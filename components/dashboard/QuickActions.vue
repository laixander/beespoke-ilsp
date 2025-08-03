<template>
    <UButton
        v-for="(action, index) in quickActions"
        :key="index"
        :label="action.label"
        :trailing-icon="action.icon"
        variant="outline"
        color="neutral"
        size="lg"
        class="justify-between md:p-4 lg:p-6"
        @click="action.click"
    />
</template>
<script setup lang="ts">
import { quickActions } from '~/data'
</script>