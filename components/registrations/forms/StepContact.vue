<template>
    <h4 class="text-lg text-default font-semibold">Contact Information</h4>
    <p class="text-sm text-dimmed mb-6">Primary contact person for this partnership</p>
    <!-- Your form inputs here -->
    <Grid :lg="2" :gap="4">
        <UFormField label="Contact Person" size="lg">
            <UInput placeholder="Full name of contact person" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Position/Title" size="lg">
            <UInput placeholder="Job title or position" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Email Address" size="lg">
            <UInput placeholder="contact@institution.edu.ph" variant="soft" class="w-full" />
        </UFormField>
        <UFormField label="Phone Number" size="lg">
            <UInput placeholder="+1-234-567-8900" variant="soft" class="w-full" />
        </UFormField>
    </Grid>
</template>
<script setup lang="ts">
import Grid from '~/components/wrapper/Grid.vue';
</script>