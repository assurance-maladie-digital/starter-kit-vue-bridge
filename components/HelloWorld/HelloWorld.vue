<script setup lang="ts">
const props = defineProps({
	parentMessage: String
})

const parentMessage = ref(props.parentMessage || 'Hello World!')
</script>

<template>
	<h1>{{ parentMessage }}</h1>
</template>

