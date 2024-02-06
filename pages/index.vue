<script lang="ts">
	import { Component, Vue, toNative } from "vue-facing-decorator";

	@Component
	class Toto extends Vue {
		model = 'Hello World';
		msg = 'Hello World';
	}

	export default toNative(Toto);
</script>

<template>
	<div>
		<HelloWorld :msg="msg" v-model="model"/>
		{{ model }}
	</div>
</template>

