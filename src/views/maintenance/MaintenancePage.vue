<template>
	<PageContainer>
		<MaintenancePage />
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	MaintenancePage,
} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		MaintenancePage,
	},
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>
