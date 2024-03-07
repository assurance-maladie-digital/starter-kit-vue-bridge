<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HelloWorldBis",
	props: {
		parentMessage: {
			type: String,
			default: ""
		}
	},
});
</script>

<template>
	<h1>{{ parentMessage }}</h1>
</template>
