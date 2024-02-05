<template>
	<PageContainer>
		<VCard class="pa-8">
			Contenu de la page.
		</VCard>
	</PageContainer>
	<PageContainer size="m">
		<VCard class="pa-8">
			Contenu de la page.
		</VCard>
	</PageContainer>
	<BackBtn/>
	<div class="d-flex align-center">
		<p class="mb-0 mr-1">
			Patient n°<b>1970756541</b>
		</p>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="1970756541"
		/>
	</div>
	<VAlert text="Test" type="success"/>
</template>

<script setup lang="ts">
import {PageContainer, BackBtn, CopyBtn} from 'bridge-david';
import {useDisplay} from 'vuetify'

const display = useDisplay();

onMounted(() => {
	console.log(display.name.value);
});
</script>
