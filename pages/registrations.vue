<template>
    <Page title="Partnership Registration" description="Submit your partnership proposal to collaborate with Central Bicol State University of Agriculture" alignCenter>
        <Block class="w-6xl p-4">
            <RegistrationForm />
        </Block>
    </Page>
</template>

<script setup lang="ts">
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'
import RegistrationForm from '~/components/registrations/RegistrationForm.vue';
</script>