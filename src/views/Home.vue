<template>
	<h1 class="text-primary">{{ config ? config.title : 'Accueil' }}</h1>
	<div class="mt-6 mb-12 d-flex align-center justify-center">
		<VCard width="695" variant="tonal" class="d-flex">
			<img src="/starter-kit.svg" alt="Starter kit"/>
		</VCard>
	</div>
	<v-row justify="center">
		<v-col
			cols="12"
			md="4"
		>
			<v-card
				color="grey-lighten-4"
				class="mx-auto"
			>
				<v-card-title>
					Exemple de composant Nuxt
				</v-card-title>
				<v-card-item>
					<HelloWorld :msg="config ? config.message : 'Bonjour'"/>
				</v-card-item>
			</v-card>
		</v-col>
		<v-col
			cols="12"
			md="4"
		>
			<v-card
				color="grey-lighten-4"
				class="mx-auto"
			>
				<v-card-title>
					Exemple de composant DS
				</v-card-title>
				<v-card-item>
					<BackBtn to="/home" />
					<br /><br />
					<a href="https://digital-design-system.netlify.app/demarrer/introduction/" target="_blank">
						Voir la documentation des composants du Design System.
					</a>
				</v-card-item>
			</v-card>
		</v-col>
		<v-col
			cols="12"
			md="4"
		>
			<v-card
				color="grey-lighten-4"
				class="mx-auto"
			>
				<v-card-title>
					Test des stores
				</v-card-title>
				<v-card-item>
					<div>Compteur: {{ counter.state.count }}</div>
					<div class="d-flex flex-wrap align-center justify-center">
						<v-btn @click="increment" color="primary" class="ma-2">Incrémenter</v-btn>
						<v-btn @click="decrement" color="primary" class="ma-2">Décrémenter</v-btn>
						<v-btn @click="reset" color="primary" class="ma-2">Réinitialiser</v-btn>
					</div>
				</v-card-item>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { BackBtn } from "@cnamts/synapse-bridge";
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";
import config from "../../public/json/config.env.json";

import { mapActions, mapGetters } from "vuex";
import counter from '@/store/counter';

export default defineComponent({
	components: {
		HelloWorld,
		BackBtn
	},
	data() {
		return {
			config,
			counter
		};
	},
	computed: {
		...mapGetters('counter', {
			count: 'count',
		}),
	},
	methods: {
		...mapActions('counter', {
			increment: 'increment',
			decrement: 'decrement',
			reset: 'reset',
		}),

		increment() {
			this.counter.commit('increment');
		},
		decrement() {
			this.counter.commit('decrement');
		},
		reset() {
			this.counter.commit('reset');
		}
	}
});
</script>
