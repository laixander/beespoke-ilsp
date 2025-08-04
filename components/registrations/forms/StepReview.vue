<template>
    <h4 class="text-lg text-default font-semibold">Review & Submit</h4>
    <p class="text-sm text-dimmed mb-6">Final details and confirmation</p>
    <!-- Your form inputs here -->
    <UFormField label="Partnership Objectives" class="mb-6">
        <UTextarea placeholder="What do you hope to achieve through this partnership?"
                :rows="4" variant="soft" class="w-full" />
    </UFormField>
    <UFormField label="Proposed Duration" size="lg" class="mb-6">
        <USelect :items="durations" placeholder="Select duration" variant="soft" class="w-full" />
    </UFormField>
    <UAlert variant="subtle" color="secondary" class="mb-6">
        <template #description>
            <h4 class="font-semibold text-default mb-4">Proposal Summary</h4>
            <ul class="grid grid-rows-12 lg:grid-rows-3 grid-flow-col gap-2">
                <li class="text-dimmed">Institution: <span class="text-default ml-2">N/A</span></li>
                <li class="text-dimmed">Type: <span class="text-default ml-2">N/A</span></li>
                <li class="text-dimmed">Country: <span class="text-default ml-2">N/A</span></li>
                <li class="text-dimmed">Contact: <span class="text-default ml-2">N/A</span></li>
                <li class="text-dimmed">Email: <span class="text-default ml-2">N/A</span></li>
                <li class="text-dimmed">Collaboration Areas: <span class="text-default ml-2">N/A</span></li>
            </ul>
        </template>
    </UAlert>
    <UCheckbox label="I agree to the terms and conditions and confirm that the information provided is accurate" />
</template>
<script setup lang="ts">
import { durations } from '~/data'
</script>