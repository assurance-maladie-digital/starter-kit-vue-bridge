<template>
	<div>
		Clicked: {{ count }} times, count is {{ evenOrOdd }}.
		<v-btn variant="tonal" @click="increment">+</v-btn>
		<v-btn variant="tonal" @click="decrement">-</v-btn>
		<v-btn variant="tonal" @click="incrementIfOdd">Increment if odd</v-btn>
		<v-btn variant="tonal" @click="incrementAsync">Increment async</v-btn>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.count);
const evenOrOdd = computed(() => store.getters.evenOrOdd);

const increment = () => store.dispatch("increment");
const decrement = () => store.dispatch("decrement");
const incrementIfOdd = () => store.dispatch("incrementIfOdd");
const incrementAsync = () => store.dispatch("incrementAsync");
</script>
