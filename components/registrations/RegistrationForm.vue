<template>
    <div class="w-full mx-auto space-y-6">
        <div class="space-y-2">
            <!-- Header -->
            <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                <span>Step {{ step + 1 }} of {{ steps.length }}</span>
                <span>{{ value }}% Complete</span>
            </div>

            <!-- Progress Bar with v-model -->
            <UProgress v-model="value" class="w-full h-2 rounded-full" color="primary" />

            <!-- Step Labels -->
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

        <!-- Footer Buttons -->
        <div class="flex justify-between">
            <UButton label="Previous" icon="i-lucide-chevron-left" variant="outline" color="neutral" size="lg" :disabled="step === 0" @click="goToPrevious" />
            <UButton :label="step === steps.length - 1 ? 'Submit' : 'Next'" trailing-icon="i-lucide-chevron-right" color="primary" size="lg" @click="goToNext" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import StepInstitution from '~/components/registrations/forms/StepInstitution.vue'
import StepContact from '~/components/registrations/forms/StepContact.vue'
import StepCollaboration from '~/components/registrations/forms/StepCollaboration.vue'
import StepReview from '~/components/registrations/forms/StepReview.vue'

// Step setup
const steps = ['Institution Info', 'Contact Details', 'Collaboration', 'Review & Submit']
const totalSteps = steps.length
const step = ref(0)

// Dynamically bind progress value (percentage)
const value = ref(0)

const stepComponents = [StepInstitution, StepContact, StepCollaboration, StepReview]

// Update progress whenever step changes
watch(step, () => {
    value.value = Math.round(((step.value + 1) / totalSteps) * 100)
}, { immediate: true })

// Navigation
function goToNext() {
    if (step.value < totalSteps - 1) {
        step.value++
    } else {
        submitForm()
    }
}

function goToPrevious() {
    if (step.value > 0) step.value--
}

function submitForm() {
    alert('Form submitted!')
}
</script>