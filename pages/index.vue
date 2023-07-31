<template>
	<div>
		<v-icon icon="mdi-home-outline" />
		<v-btn variant="tonal"> Button </v-btn>

		<form>
			<v-select
				v-model="locale"
				:items="['fr', 'en']"
				variant="outlined"
				density="compact"
			/>
			<p>{{ $t('welcome') }}</p>
		</form>
	</div>
</template>

<script setup>
	const { locale } = useI18n()
</script>
