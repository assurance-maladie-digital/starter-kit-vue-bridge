<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
// DO NOT USE <script setup>

//class component
import { Component, Vue, toNative } from "vue-facing-decorator";

@Component
class test extends Vue {
	name: string = "test";
}

export default toNative(test)
</script>
