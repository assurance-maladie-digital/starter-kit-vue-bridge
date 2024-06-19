<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
	/>
	<HeaderMenu />
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
		<p class="text-secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {PageContainer, HeaderBar, FooterBar} from "@cnamts/synapse-bridge";
import HeaderMenu from "@cnamts/access-master-vue/src/elements/layout/HeaderMenu";

export default defineNuxtComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar,
		HeaderMenu
	}
});
</script>
