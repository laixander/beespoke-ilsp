<template>
    <Block>
        <div class="w-full h-2 bg-primary absolute top-0 left-0" />
        <div class="flex items-start gap-4 pt-2">
            <div class="space-y-4 flex-1">
                <div class="flex items-start">
                    <div class="flex-1">
                        <div class="flex items-center">
                            <div class="flex-1 font-semibold leading-7">AI Research Collaboration Initiative</div>
                            <div class="flex gap-2">
                                <UBadge label="External" color="secondary" variant="soft" size="sm" />
                                <UBadge label="High" color="error" variant="soft" size="sm" />
                            </div>
                        </div>
                        <div class="flex justify-start items-center gap-2">
                            <UBadge label="Pending" color="warning" variant="soft" size="sm" />
                            <span class="text-xs text-dimmed">Last updated: 2025-01-25</span>
                        </div>
                    </div>
                    <!-- <UButton icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost" size="sm" /> -->
                </div>
                <div class="text-sm text-toned text-pretty truncate line-clamp-2 mb-auto py-4">
                    Leading technological university in Japan with strong research programs in engineering and applied sciences.
                </div>
                <UAlert color="neutral" variant="soft">
                    <template #description>
                        <Grid :md="2" :lg="4" :gap="4">
                            <div class="flex items-center gap-2">
                                <UBadge icon="i-lucide-building" variant="soft" color="success" class="p-2.5" />
                                <div class="inline-flex flex-col">
                                    <span class="font-medium text-sm text-highlighted">MIT Technology Institute</span>
                                    <span class="text-xs text-muted">Organization</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <UBadge icon="i-lucide-calendar" variant="soft" color="secondary" class="p-2.5" />
                                <div class="inline-flex flex-col">
                                    <span class="font-medium text-sm text-highlighted">2025-01-25</span>
                                    <span class="text-xs text-muted">Submitted Date</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <UBadge icon="i-lucide-handshake" variant="soft" color="orange" class="p-2.5" />
                                <div class="inline-flex flex-col">
                                    <span class="font-medium text-sm text-highlighted">Partnership</span>
                                    <span class="text-xs text-muted">Type</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <UBadge icon="i-lucide-user" variant="soft" color="purple" class="p-2.5" />
                                <div class="inline-flex flex-col">
                                    <span class="font-medium text-sm text-highlighted">Dr. Hiroshi Tanaka</span>
                                    <span class="text-xs text-muted">Primary Contact</span>
                                </div>
                            </div>
                        </Grid>
                    </template>
                </UAlert>
                <UAlert color="secondary" variant="subtle">
                    <template #description>
                        <div class="flex items-center gap-2 mb-4">
                            <UIcon name="i-lucide-building" size="16" class="flex" />
                            <span class="font-medium text-sm">Target Departments</span>
                        </div>
                        <div class="flex justify-start items-center gap-1">
                            <UBadge label="College of Engineering" color="secondary" variant="subtle" />
                            <UBadge label="College of Computer Studies" color="secondary" variant="subtle" />
                            <UBadge label="College of Agriculture" color="secondary" variant="subtle" />
                        </div>
                    </template>
                </UAlert>
            </div>
            <div class="grid gap-2">
                <UButton label="View Details" icon="i-lucide-eye" color="secondary" />
                <UButton label="Quick Approve" icon="i-lucide-circle-check-big" variant="soft" />
                <UButton label="Request Info" icon="i-lucide-info" variant="soft" color="warning" />
            </div>
        </div>
    </Block>
</template>
<script setup lang="ts">
import Block from '../wrapper/Block.vue';
import Grid from '../wrapper/Grid.vue';
</script>