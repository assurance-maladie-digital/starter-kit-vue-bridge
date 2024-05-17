<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
	/>
	<PageContainer>
		<h1 class="text-primary">{{ $config.public.title }}</h1>
		<HelloWorld :msg="$config.public.message"/>
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
import {PageContainer, HeaderBar, FooterBar} from "@cnamts/synapse-bridge";

export default defineNuxtComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar
	}
});
</script>
