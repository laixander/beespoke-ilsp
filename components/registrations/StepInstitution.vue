<template>
    <h4 class="text-lg text-default font-semibold">Institution Info</h4>
    <p class="text-sm text-dimmed mb-6">Tell us about your institution</p>
    <!-- Your form inputs here -->
    <Grid :lg="2" :gap="4">
        <UFormField label="Institution Name" size="lg">
            <UInput placeholder="Enter your institution name" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Institution Type" size="lg">
            <USelect :items="institutions" placeholder="Select institution type" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Country" size="lg">
            <UInput placeholder="Enter country name" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Website" size="lg">
            <UInput placeholder="www.institution.edu.ph" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Institution Description" size="lg" class="lg:col-span-2">
            <UTextarea placeholder="Brief description of your institution, its mission, and key area of expertise..."
                :rows="4" variant="soft" class="w-full" />
        </UFormField>
    </Grid>
</template>
<script setup lang="ts">
import { institutions } from '~/data'
import Grid from '~/components/wrapper/Grid.vue';
</script>