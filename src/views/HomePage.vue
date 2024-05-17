<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
	/>
	<PageContainer>
		<h1 class="text-primary">{{ $config.public.title }}</h1>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<NirField v-model="nir" label="Nir" />
	</FooterBar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
	PageContainer,
	HeaderBar,
	FooterBar,
	NirField,
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar,
		NirField,
	},
	data() {
		return {
			nir: "",
		};
	},
});
</script>
