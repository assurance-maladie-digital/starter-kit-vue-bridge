<script lang="ts">
import { defineComponent } from 'vue'
import { BackBtn } from '@cnamts/synapse-bridge'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'
import config from '../../public/json/config.env.json'
import { mapActions, mapGetters } from 'vuex'
import counter from '../stores/counter'
import axios from 'axios'

export default defineComponent({
	components: {
		HelloWorld,
		BackBtn,
	},
	data() {
		return {
			config,
			counter
		}
	},
	computed: {
		...mapGetters('notification', {
			notificationData: 'notification',
		}),
	},
	methods: {
		...mapActions('notification', {
			dispatchNotification: 'addNotification',
			dispatchClearNotification: 'clearNotification',
		}),
		...mapActions('counter', {
			increment: 'increment',
			decrement: 'decrement',
			reset: 'reset',
		}),

		createNotification() {
			this.dispatchNotification({
				ref: '1',
				type: 'info',
				message: 'Exemple de notification 1.',
			})
		},
		removeNotification() {
			this.dispatchClearNotification()
		},

		increment() {
			this.counter.commit('increment')
		},
		decrement() {
			this.counter.commit('decrement')
		},
		reset() {
			this.counter.commit('reset')
		},

		async callApiAxios() {
			const response = await axios.get('/user')
			console.log(response)
		},
	},
})
</script>

<template>
	<h1 class="text-primary">{{ config && config.title ? config.title : 'Accueil' }}</h1>
	<div class="mt-6 mb-12 d-flex align-center justify-center">
		<VCard width="695" variant="tonal" class="d-flex">
			<img src="/starter-kit.svg" alt="Starter kit" />
		</VCard>
	</div>
	<v-row justify="center">
		<v-col cols="12" md="4">
			<v-card color="grey-lighten-4" class="mx-auto">
				<v-card-title>Exemple de composant Nuxt</v-card-title>
				<v-card-item>
					<HelloWorld :msg="config && config.message ? config.message : 'Bonjour'" />
				</v-card-item>
			</v-card>
		</v-col>
		<v-col cols="12" md="4">
			<v-card color="grey-lighten-4" class="mx-auto">
				<v-card-title>Exemple de composant DS</v-card-title>
				<v-card-item>
					<BackBtn to="/home" />
					<br />
					<br />
					<VBtn
						color="primary"
						height="auto"
						min-height="30px"
						class="api"
						@click="callApiAxios"
					>
						api rest avec axios
					</VBtn>
					<a
						href="https://digital-design-system.netlify.app/demarrer/introduction/"
						target="_blank"
					>
						Voir la documentation des composants du Design System.
					</a>
				</v-card-item>
			</v-card>
		</v-col>
		<v-col cols="12" md="4">
			<v-card color="grey-lighten-4" class="mx-auto">
				<v-card-title>Test des stores</v-card-title>
				<v-card-item>
					<div>Compteur: {{ counter.state.count }}</div>
					<div class="d-flex flex-wrap align-center justify-center">
						<v-btn
							color="primary"
							class="ma-2 increment"
							@click="increment"
						>
							Incrémenter
						</v-btn>
						<v-btn
							color="primary"
							class="ma-2 decrement"
							@click="decrement"
						>
							Décrémenter
						</v-btn>
						<v-btn
							color="primary"
							class="ma-2 reset"
							@click="reset"
						>
							Réinitialiser
						</v-btn>
					</div>
				</v-card-item>
				<v-card-item>
					<div class="notif">
						{{ notificationData ? notificationData.message : '' }}
					</div>
					<div class="d-flex flex-wrap align-center justify-center">
						<VBtn
							color="primary"
							class="ma-2 create"
							@click="createNotification"
						>
							Créer une notification
						</VBtn>
						<VBtn
							color="primary"
							class="ma-2 create"
							@click="removeNotification"
						>
							Supprimer une notification
						</VBtn>
					</div>
				</v-card-item>
			</v-card>
		</v-col>
	</v-row>
</template>
