# Migration
Etapes de migration

# Routes custom

## Utilisation du script [vue-class-migrator](https://github.com/getyourguide/vue-class-migrator)

vue-class-migrator est un script permettant de migrer automatiquement les composants vueJs écris avec vue-class-component à la syntaxe native VueJs Option API

1. Supprimer tous les décorateurs personnalisés, ils ne seront pas reconnus par vue-class-migrator et causeront l'échec de la migration du composant.

2. Executer la commande `npx vue-class-migrator -d .` à la racine de votre projet.

3. Consulter les logs dans le terminal pour repérer les éventuels composants causants n'ayant pas pu être migré automatiquement.

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
			meta: [{
				name: 'description',
				content: 'This is my page description.'
			}]
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
