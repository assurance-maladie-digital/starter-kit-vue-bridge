<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
	/>
	<PageContainer>
		<h1 class="text-primary">Home</h1>
		<HelloWorld msg="Un titre"/>
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
import {PageContainer, HeaderBar, FooterBar} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar
	}
});
</script>
