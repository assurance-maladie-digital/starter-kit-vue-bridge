# Migration
Etapes de migration

## Mise en place

1 - Copier votre dossier `src` dans votre nouveau projet de migration.


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
```

Voir [le guide de migration de vue-router](https://router.vuejs.org/guide/migration/) pour plus d'informations.


2 - Dans le fichier ‘app/router.options.ts’, mettre à jour le path de votre fichier de configuration de route si besoin.

Le fichier `app/router.options.ts` est chargé automatiquement par Nuxt, et permet de surcharger les routes par défaut de Nuxt.
Pour plus d'informations, voir [cette page de documentation de Nuxt](https://nuxt.com/docs/guide/going-further/custom-routing).
