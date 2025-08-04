<template>
    <div class="space-y-6">
        <!-- Success Icon and Header -->
        <div class="flex flex-col items-center gap-4">
            <UIcon name="i-lucide-check-circle" class="size-16 text-success" />
            <div class="text-center">
                <h2 class="text-xl font-semibold text-success mb-2">
                    Partnership Proposal Submitted Successfully!
                </h2>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Thank you for your interest in partnering with CBSUA. Your proposal has been received
                    and will be reviewed by our International Linkages team.
                </p>
            </div>
        </div>

        <!-- Grey Box for Next Steps -->
        <UAlert color="neutral" variant="soft">
            <template #description>
                <h3 class="text-sm font-semibold text-default text-center mb-2">What happens next?</h3>
                <ul class="list-disc pl-5 text-sm text-toned space-y-1">
                    <li>Your proposal will be reviewed within 5–7 business days</li>
                    <li>You will receive an email confirmation with your reference number</li>
                    <li>Our team may contact you for additional information</li>
                    <li>You will be notified of the decision via email</li>
                </ul>
            </template>
        </UAlert>

        <!-- Buttons -->
        <div class="flex justify-center gap-2">
            <UButton label="Submit Another Proposal" variant="outline" color="neutral" size="lg"
                @click="$emit('restart')" />
            <UButton label="Visit CBSUA Website" color="neutral" size="lg" @click="$emit('visit-site')" />
        </div>
    </div>
</template>