<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
	/>
	<PageContainer>
		<h1 class="text-primary">{{ $config.public.title }}</h1>
		<h2>Test font color scss</h2>
		<HelloWorld :msg="$config.public.message"/>
		<VBtn color="primary">
			Primary
		</VBtn>
		<VBtn color="secondary">
			secondary
		</VBtn>
		<VBtn color="info">
			Info
		</VBtn>
		<VBtn color="success">
			Success
		</VBtn>
		<VBtn color="warning">
			Warning
		</VBtn>
		<VBtn color="error">
			Error
		</VBtn>
		<VBtn color="accent">
			Accent
		</VBtn>
		<VBtn color="light">
			Light
		</VBtn>
		<VBtn color="dark">
			Dark
		</VBtn>
		<VBtn color="risquePro">
			Risque Pro
		</VBtn>
		<VBtn class="inva">
			Violet inva
		</VBtn>

		<br /><br />

		<SubHeader
			sub-title-text="1 69 08 75 125 456 75"
			title-text="Paul Dupont"
		/>

		<br /><br />

		<v-alert type="success">
			Message de succès
		</v-alert>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text-secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {PageContainer, HeaderBar, FooterBar, SubHeader} from "@cnamts/synapse-bridge";

export default defineNuxtComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar,
		SubHeader
	}
});
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/bootstrap-tokens';
// custom styles
h2 {
	color: $vd-am-blue-lighten-60 !important;
}
.warning {
	color: black !important;
}
.dark {
	color: white !important;
}
.inva {
	background-color: $vd-mauve-darken-60 !important;
	color: white;
}
</style>
