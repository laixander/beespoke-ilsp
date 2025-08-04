<template>
    <h4 class="text-lg text-default font-semibold">Collaboration Areas</h4>
    <p class="text-sm text-dimmed mb-6">What types of collaboration are you interested in?</p>
    <!-- Your form inputs here -->
    <UFormField label="Areas of Collaboration" :ui="uiFormField">
        <UCheckboxGroup :items="items" :ui="uiCheckboxGroup" />
    </UFormField>
    <UFormField label="Proposed Activities" class="mb-6">
        <UTextarea placeholder="Describe the specific activities or projects you would like to collaborate on..."
                :rows="4" variant="soft" class="w-full" />
    </UFormField>
    <UFormField label="Resources & Capabilities">
        <UTextarea placeholder="What resources, expertise, or capabilities can your institution contribute to the partnership?"
                :rows="4" variant="soft" class="w-full" />
    </UFormField>
</template>
<script setup lang="ts">
import type { CheckboxGroupItem } from '@nuxt/ui'

// Checkbox Items
const items = ref<CheckboxGroupItem[]>([
    'Student Exchange',
    'Joint Research',
    'Technology Transfer',
    'Extension Services',
    'Conference Collaboration',
    'Faculty Exchange',
    'Curriculum Development',
    'Innovation Projects',
    'Training Programs',
    'Publication Collaboration',
    'Others'
])

const uiFormField = {
    root: 'mb-6',
    container: 'mt-3'
}

const uiCheckboxGroup = {
    fieldset: 'grid grid-rows-12 lg:grid-rows-4 grid-flow-col gap-2'
}
</script>