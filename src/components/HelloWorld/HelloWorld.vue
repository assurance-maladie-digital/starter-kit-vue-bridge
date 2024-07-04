<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: '',
		},
	},
})
</script>

<template>
	<h2 class="text-primary">{{ msg }}</h2>
</template>
