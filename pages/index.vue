<template>
	<PageContainer>
		<VCard class="pa-8">
			Contenu de la page.
		</VCard>
	</PageContainer>
	<BackBtn/>
	<VAlert text="Test" type="success"/>
</template>

<script setup lang="ts">
import {PageContainer, BackBtn} from 'bridge-david';
</script>
