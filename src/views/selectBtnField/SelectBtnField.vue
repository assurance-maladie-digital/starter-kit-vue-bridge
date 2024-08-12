<script lang="ts" setup>
import {
    SelectBtnField,
} from "@cnamts/synapse-bridge";
import { ref } from 'vue'

const value = ref(null)
const items = ref([
    {
        text: 'Email',
        value: 'email'
    },
    {
        text: 'Courrier',
        value: 'courrier'
    },
    {
        text: 'SMS',
        value: 'sms'
    }
]);
</script>

<template>
    <div>
        <SelectBtnField v-model="value" :items="items" label="Moyen de contact" :readonly="true" />
    </div>
</template>

<style lang="scss" scoped></style>