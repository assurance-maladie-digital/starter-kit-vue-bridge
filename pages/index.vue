<template>
	<div>
		<v-icon icon="mdi-home-outline" />
		<v-btn variant="tonal"> Button </v-btn>
		<v-text-field v-model="value" v-maska:[maska] />
	</div>
</template>

<script lang="ts" setup>
const value = ref('');
const maska = { mask: '#-#' };
</script>
