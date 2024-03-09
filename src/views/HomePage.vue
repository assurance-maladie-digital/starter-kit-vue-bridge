<template>
	<PageContainer>
		<h1 class="text-primary">Home</h1>
		<HelloWorld msg="Un titre"/>
		<HelloWorldBis parent-message="Test depuis src"/>
		<ChipList :items="[{text: 'toto', value: 'toto'}]"/>
		<FranceConnectBtn href="https://app.franceconnect.gouv.fr/"/>
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PageContainer, ChipList, FranceConnectBtn} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		ChipList,
		FranceConnectBtn
	}
});
</script>
