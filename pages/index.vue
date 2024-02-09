<template>
	<PageContainer>
		<HelloWorld msg="Un titre" />
		<HelloWorldBis parent-message="Test depuis src" />
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PageContainer} from "bridge-david";

export default defineComponent({
	components: {
		PageContainer
	}
});
</script>
