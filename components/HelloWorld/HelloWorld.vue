	<script lang="ts">
	import { Component, Vue, toNative, Model, Prop, Watch } from "vue-facing-decorator";

	import { useDisplay } from "vuetify";

	@Component
	class HelloWorld extends Vue {
		screenSize = useDisplay().name;

		// Define the models
		@Model
		model!: string;

		// Define the props
		@Prop({ required: true })
		msg!: string;

		// Define the data
		snackbar = false;

		text = "Hello, I am a snackbar";

		// Define the computeds properties
		get btnLabel() {
			return 'Open the snackbar';
		}

		// Define the watch
		@Watch('msg', { immediate: true })
		onMsgChange() {
			console.log('msg changed');
		}

		@Watch('screenSize', { immediate: true })
		onScreenSizeChange() {
			console.log('screenSize changed', this.screenSize);
		}

		// Define the methods
		async mounted() {
			const {name} = useDisplay();
			await this.$nextTick();
			console.log(name.value);
		}
	}

	export default toNative(HelloWorld);
</script>

<template>
	<h1>{{ msg }}</h1>
	<div class="text-center">
		<VTextField v-model="model" label="Hello World" />
		<v-btn color="red-darken-2" @click="snackbar = true">
			{{ btnLabel }}
		</v-btn>

		<v-snackbar v-model="snackbar" multi-line>
			{{ text }}

			<template v-slot:actions>
				<v-btn color="red" variant="text" @click="snackbar = false">
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</div>
</template>
