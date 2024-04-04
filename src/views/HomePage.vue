<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
	/>
	<PageContainer>
		<h1 class="text-primary">Home</h1>
		<HelloWorld msg="Un titre"/>
		<div class="mt-4 my-4">
			<h2>NotificationBar</h2>
			<NotificationBar>
				<template #action>
					<VBtn
						variant="outlined"
						color="white"
						@click="removeNotification"
					>
						2ème action
					</VBtn>
				</template>
			</NotificationBar>
			<VBtn
				color="primary"
				@click="createNotification"
			>
				Envoyer une notification
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
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PageContainer, HeaderBar, NotificationBar, FooterBar} from "@cnamts/synapse-bridge";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
	components: {
		PageContainer,
		HeaderBar,
		NotificationBar,
		FooterBar
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
		createNotification(): void {
			this.dispatchNotification({
				type: 'info',
				message: 'Exemple de notification.',
			})
		},
		removeNotification(): void {
			this.dispatchClearNotification();
		}
	}
});
</script>
