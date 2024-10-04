<template>
	<div>
		<PageContainer>
			<div class="d-flex flex-wrap align-center justify-center ma-n2">
				<NotificationBar>
					<template #action>
						<VBtn
							variant="outlined"
							color="white"
							@click="removeNotification1"
						>
							2ème action
						</VBtn>
					</template>
				</NotificationBar>

				<NotificationBar
					type="error"
					bottom
				/>

				<VBtn
					color="primary"
					class="ma-2 mt-12"
					@click="createNotification1"
				>
					Envoyer une notification 1
				</VBtn>

				<VBtn
					color="primary"
					class="ma-2 mt-12"
					@click="createNotification2"
				>
					Envoyer une notification 2
				</VBtn>

				<VBtn
					color="primary"
					variant="outlined"
					class="ma-2 mt-12"
					@click="removeNotification"
				>
					Supprimer les notifications
				</VBtn>
			</div>
		</PageContainer>
		<FooterBar
			hide-a11y-link
			hide-cgu-link
			hide-cookies-link
			hide-legal-notice-link
			hide-sitemap-link
		>
			<p class="text--secondary mb-0">Contenu supplémentaire.</p>
		</FooterBar>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import {
	PageContainer,
	FooterBar,
	NotificationBar
} from "@cnamts/synapse-bridge";
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
	components: {
		PageContainer,
		FooterBar,
		NotificationBar,
	},
	data() {
		return {
		}
	},
	computed: {
		...mapGetters('notification', {
			notification: 'notification',
		}),
	},
	methods: {
		...mapActions('notification', {
			dispatchNotification: 'addNotification',
			dispatchClearNotification: 'clearNotification',
		}),
		createNotification1(): void {
			this.dispatchNotification({
				ref: "1",
				type: 'info',
				message: 'Exemple de notification 1.',
			})
		},
		createNotification2(): void {
			this.dispatchNotification({
				ref: "2",
				type: 'warning',
				message: 'Exemple de notification 2.',
			})
		},
		removeNotification(): void {
			this.dispatchClearNotification();
		},
		removeNotification1(): void {
			this.dispatchClearNotification();
		}
	}
});
</script>
