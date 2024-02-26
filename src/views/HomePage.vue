<template>
	<PageContainer>
		<HelloWorld msg="Un titre"/>
		<HelloWorldBis parent-message="Test depuis src"/>
	</PageContainer>
</template>

<script lang="ts">
import {PageContainer} from "bridge-david";
import {defineComponent} from "vue";

export default defineComponent({
	components: {
		PageContainer
	}
});
</script>
