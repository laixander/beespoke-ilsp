<template>
    <Page :title="pageTitle" :description="pageDescription" alignCenter>
        <Block class="w-4xl p-4">
            <div class="w-full mx-auto space-y-6">
                <template v-if="!submitted">
                    <StepperLayout :step="step" :steps="steps" :value="value" :step-components="stepComponents"
                        @next="goToNext" @previous="goToPrevious" />
                </template>
                <template v-else>
                    <Success @restart="restartForm" @visit-site="navigateToWebsite" />
                </template>
            </div>
        </Block>
    </Page>
</template>


<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'

import StepInstitution from '~/components/registrations/StepInstitution.vue'
import StepContact from '~/components/registrations/StepContact.vue'
import StepCollaboration from '~/components/registrations/StepCollaboration.vue'
import StepReview from '~/components/registrations/StepReview.vue'
import Success from '~/components/registrations/Success.vue'
import StepperLayout from '~/components/registrations/StepperLayout.vue'

const submitted = ref(false)

const pageTitle = computed(() =>
    submitted.value ? undefined : 'Partnership Registration'
)
const pageDescription = computed(() =>
    submitted.value ? undefined : 'Submit your partnership proposal to collaborate with Central Bicol State University of Agriculture'
)

const steps = ['Institution Info', 'Contact Details', 'Collaboration', 'Review & Submit']
const totalSteps = steps.length
const step = ref(0)

const value = ref(0)

const stepComponents = [StepInstitution, StepContact, StepCollaboration, StepReview]

watch(step, () => {
    value.value = Math.round(((step.value + 1) / totalSteps) * 100)
}, { immediate: true })

const goToNext = () => {
    if (step.value < totalSteps - 1) {
        step.value++
    } else {
        submitForm()
    }
}

const goToPrevious = () => {
    if (step.value > 0) step.value--
}

const submitForm = () => {
    submitted.value = true
}

const restartForm = () => {
    step.value = 0
    value.value = 0
    submitted.value = false
}

const navigateToWebsite = () => {
    window.open('https://www.cbsua.edu.ph', '_blank')
}
</script>