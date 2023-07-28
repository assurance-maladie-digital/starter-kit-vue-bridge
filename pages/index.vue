<template>
	<div>
		<v-icon icon="mdi-home-outline" />
		<v-btn variant="tonal"> Button </v-btn>
	</div>
</template>

<script setup>
const axios = useNuxtApp().$axios;

onMounted(async () => {
	axios.get('/api/hello').then((res) => {
		console.log(res.data.api);
	});
});
</script>
