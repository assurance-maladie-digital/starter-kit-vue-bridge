<template>
	<div>
		<v-icon icon="mdi-home-outline" />
		<v-btn variant="tonal"> Button </v-btn>
		<input-facade
			v-model="date"
            label="Date"
			mask="##/##/####"
        />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref('');
</script>
