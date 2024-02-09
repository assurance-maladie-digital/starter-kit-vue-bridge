<template>
	<HelloWorld msg="Un titre"/>
	<PageContainer>
		Test
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
