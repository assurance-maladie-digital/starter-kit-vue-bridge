<template>
	<div class="hello">
		<h1>{{ greeting }}</h1>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	greeting: {
		type: String,
		default: "Hello, world!",
	},
});
</script>
