<template>
    <div class="space-y-6">
        <!-- Step Indicator -->
        <div class="space-y-2">
            <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                <span>Step {{ step + 1 }} of {{ steps.length }}</span>
                <span>{{ value }}% Complete</span>
            </div>

            <UProgress :model-value="value" class="w-full h-2 rounded-full" color="primary" />

            <div class="flex justify-between text-xs font-medium text-gray-500 mt-1">
                <template v-for="(label, index) in steps" :key="index">
                    <span :class="{ 'text-primary font-semibold': index === step }">{{ label }}</span>
                </template>
            </div>
        </div>

        <!-- Step Content -->
        <div class="border border-gray-200 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-900">
            <component :is="stepComponents[step]" />
        </div>

        <!-- Step Buttons -->
        <div class="flex justify-between">
            <UButton label="Previous" icon="i-lucide-chevron-left" variant="outline" color="neutral" size="lg"
                :disabled="step === 0" @click="onPrevious" />
            <UButton :label="step === steps.length - 1 ? 'Submit Proposal' : 'Next'"
                trailing-icon="i-lucide-chevron-right" color="primary" size="lg" @click="onNext" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { StepperLayoutProps } from '~/types/models'

defineProps<StepperLayoutProps>()

const emit = defineEmits<{
    (e: 'next'): void
    (e: 'previous'): void
}>()

const onNext = () => emit('next')
const onPrevious = () => emit('previous')
</script>