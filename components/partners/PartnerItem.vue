<template>
    <div class="flex items-center space-x-4">
        <UBadge :icon="icon || 'i-lucide-building'" :color="statusColor || 'neutral'"
            :variant="statusVariant || 'soft'" size="lg" class="p-3" />
        <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-default truncate">{{ name }}</p>
            <div class="flex items-center *:text-sm *:text-dimmed">
                <div>{{ sector }}</div>
                <UIcon name="i-lucide-dot" class="size-6 shrink-0" />
                <div>{{ country }}</div>
                <UIcon name="i-lucide-dot" class="size-6 shrink-0" />
                <div>{{ contactPerson }}</div>
            </div>
        </div>
        <div class="flex-1 grid grid-cols-1 lg:grid-cols-4 items-center *:text-center">
            <div>
                <p class="text-sm font-semibold text-default truncate">{{ activeMous }}</p>
                <p class="text-xs text-dimmed truncate">Active MOUs</p>
            </div>
            <div>
                <p class="text-sm font-semibold text-default truncate">{{ completed }}</p>
                <p class="text-xs text-dimmed truncate">Completed</p>
            </div>
            <div>
                <p class="text-sm font-semibold text-default truncate">{{ ongoing }}</p>
                <p class="text-xs text-dimmed truncate">Ongoing</p>
            </div>
            <div>
                <UBadge :label="status" :variant="statusVariant || 'soft'" :color="statusColor || 'primary'" />
            </div>
        </div>
        <div class="inline-flex items-center">
            <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PartnerItemProps } from '~/types/models'
defineProps<PartnerItemProps>()
</script>
