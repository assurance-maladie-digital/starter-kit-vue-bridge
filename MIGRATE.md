# Etapes de migration

## Mise en place

1 - Copier votre dossier `src` dans votre nouveau projet de migration.

2 - Dans le fichier `nuxt.config.ts`, ajouter le lien vers votre fichier de style global.

``` ts
// nuxt.config.ts
export default defineNuxtConfig({
	...
	css: [
		...
		'@/theme/styles.scss' // chemin vers votre fichier de style global
	],
	...
})
```


## Migration du routeur

1 - Mettre à jour le tableau de déclaration des routes vue-router avec la version 4.

Par exemple, pour créer une route par défaut :

``` ts
// src/router/index.ts
[
	... // les routes existantes
	{
		path: '/*',
		name: 'test',
		component: () => import('@/views/Test.vue')
	},
]
```

a été remplacé par :

``` ts
	...
	path: '/:pathMatch(.*)*',
	...
```

Voir [le guide de migration de vue-router](https://router.vuejs.org/guide/migration/) pour plus d'informations.

2 - Dans le fichier ‘app/router.options.ts’, mettre à jour le path de votre fichier de configuration de route si besoin.

Le fichier `app/router.options.ts` est chargé automatiquement par Nuxt, et permet de surcharger les routes par défaut de
Nuxt.
Pour plus d'informations,
voir [cette page de documentation de Nuxt](https://nuxt.com/docs/guide/going-further/custom-routing).

3 - Dans la version 4 de vue-router, certains types ont été remplacés. Il faut effectuer les changements de types dans le projet.

- `RouteConfig` devient `RouteRecordRaw`,
- `Location` devient `RouteLocation`,
- `Route` devient `RouteLocationNormalized`.


### Animations des pages

Si le projet utise des transitions de page,

1 - Retirer le composent '<transition>' dans le fichier 'app.vue'

2 - Configurer une transition de page dans le fichier 'nuxt.config.ts'

``` ts
// nuxt.config.ts
export default defineNuxtConfig({
	...
	app: {
		...
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	}
```

3 - Définir le style de la transition dans un fichier de style global.

``` css
.page-enter-active,
.page-leave-active {
	transition-duration: .15s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.page-enter,
.page-leave-active {
	opacity: 0;
}
```

	
## Utilisation du script [vue-class-migrator](https://github.com/getyourguide/vue-class-migrator)

vue-class-migrator est un script permettant de migrer automatiquement les composants vueJs écris avec vue-class-component à la syntaxe native VueJs Option API

1. Supprimer tous les décorateurs personnalisés, ils ne seront pas reconnus par vue-class-migrator et causeront l'échec de la migration du composant.

2. Executer la commande `npx vue-class-migrator -d .` à la racine de votre projet.

3. Consulter les logs dans le terminal pour repérer les éventuels composants causant des erreurs et n'ayant pas pu être migré automatiquement.

4. Si vous avez déclaré vos props en tant que mixins dans vos composants en utilisant le helper 'mixin' de vue-class-componant, modifier l'import de la mixin dans le composant.


```typescript
	const Props = Vue.extend({
		props: {
			foo: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

		export default defineComponent({
		extends: MixinsDeclaration,
```

deviens

```typescript
	const Props = defineComponent({
		props: {
			displayInfo: {
				type: Boolean,
				default: false
			}
		}
	});

	export default defineComponent({
		extends: Props,
		...
```

5. Implémenter les fonctionnalités  qui utilisaient des décorateurs retiré à l'étape 1 en utilisant l'option API, des mixins ou des composables.

Par example : la gestion des [tag metas](https://nuxt.com/docs/migration/meta#options-api)
```typescript
	@Meta
	metaInfo(): MetaInfo {
		return {
			title: 'Page title',
			meta: [
				{
					name: 'description',
					vmid: 'description',
					content: 'This is my page description.'
				}
			]
		};
	}
```

Deviens

```typescript
export default defineNuxtComponent({
	head() {
		return {
			title: 'Page title',
			meta: [
				{
					name: 'description',
					content: 'This is my page description.'
				}
			]
		}
	}
	...
```

## Migration des tags meta

Nuxt intègre son propre système de gestion des tags meta.

Pour des metas déclarés de cette façon :

```typescript
	@Meta
	metaInfo(): MetaInfo {
		return {
			title: 'Page title',
			meta: [
				{
					name: 'description',
					vmid: 'description',
					content: 'This is my page description.'
				}
			]
		};
	}
```

Il faut les migrer de la façon suivante :

```typescript
export default defineNuxtComponent({
	...
	head() {
		return {
			title: 'Page title',
			meta: [
				{
					name: 'description',
					content: 'This is my page description.'
				}
			]
		}
	}
});
```

Pour localiser les informations :

```typescript
	head(nuxtApp) {
		return {
			title: nuxtApp.i18n.t('page.currentPage.meta.title'),
			meta: [
				{
					name: 'description',
					content: nuxtApp.i18n.t('page.currentPage.meta.description')
				}
			]
		}
	}
```

## Migration des composants Vuetify

Pour faciliter la migration des composants Vuetify, ce starter kit intègre le
plugin [eslint-plugin-vuetify](https://github.com/vuetifyjs/eslint-plugin-vuetify).
Il permet de faire remonter certains problèmes tels que des props qui n'existent plus ou dont le nom a changé. Certains
changements peuvent être effectués automatiquement.

``` $ pnpm lint:migrate:fix```

Voici un aperçu des changements qui seront effectués par le script :

```diff
// passage de la syntaxe vue2 a vue3 pour la réactivité :
- value
+ modelValue

- xxx.sync
+ v-model:xxx

// Changement de nom de certaines props :
- outlined
+ variant="outlined"
- accordion
+ variant="accordion"
- text
+ variant="text"
- background-color="xxx"
+ bg-color="xxx"
- top
+ location="top"
- large
+ size="large"
...

// Autres changements concernants les props :
- validate-on-blur
+ :validate-on="blur"

// Changement concernants les events :
- @change
+ @update:model-value

// Changement de nom de certains composants :
- VExpansionPanelHeader
+ VExpansionPanelTitle
- VExpansionPanelContent
+ VExpansionPanelText
- VSimpleCheckbox
+ VCheckboxBtn
...
```
Ces changements seront uniquement effectués sur les composants Vuetify.

