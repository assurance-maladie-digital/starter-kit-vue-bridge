<template>
	<NotFoundPage :key="route?.fullPath" class="mb-6" />
	<PageContainer size="m" spacing="pa-0 pb-8">
		<VBtn color="primary" @click="setSupportId">
			Afficher l’identifiant de support
		</VBtn>
	</PageContainer>
</template>

<script lang="ts">
import { PageContainer, NotFoundPage } from '@cnamts/synapse-bridge'
import { defineComponent } from 'vue'
export default defineComponent({
	components: {
		PageContainer,
		NotFoundPage,
	},
	data() {
		return {
			route: this.$route,
		}
	},
	methods: {
		setSupportId(): void {
			this.$router.push({
				path: this.$route.path,
				query: {
					support_id: '1178926558455813315',
				},
			})
		},
	},
})
</script>
