# Migration
Etapes de migration


## Migration du routeur

1 - Mettre à jour le tableau de déclaration des routes vue-router avec la version 4. https://router.vuejs.org/guide/migration/

2 - Créer un fichier ‘app/router.options.ts’, ce fichier sera automatiquement lu par Nuxt. Exporter un object de configuration tel que défini dans la documentation de Nuxt : https://nuxt.com/docs/guide/going-further/custom-routing.

``` ts
// app/router.options.ts

import type { RouterConfig } from '@nuxt/schema'

const routes = [
	// Routes vue router V4
	{
		path: '/test',
		name: 'test',
		component: { template: '<div>Test</div>' }
	},
];

export default <RouterConfig> {
	routes: (_routes) => routes, // Ecrase les routes Nuxts par défaut.
}
```

3 - Tester si la route `/test` affiche 'test'.
