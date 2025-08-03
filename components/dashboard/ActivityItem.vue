<template>
    <div class="flex items-center gap-2">
        <div class="flex-1">
            <h4 class="font-semibold">
                {{ title }}
            </h4>
            <div class="flex items-center *:text-xs *:text-dimmed">
                <div>{{ university }}</div>
                <UIcon name="i-lucide-dot" class="size-6 shrink-0" />
                <div>{{ department }}</div>
                <UIcon name="i-lucide-dot" class="size-6 shrink-0" />
                <div>{{ timeAgo }}</div>
            </div>
        </div>
        <UBadge :label="status" :color="statusColor || 'primary'" :variant="statusVariant || 'soft'" />
        <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" />
    </div>
</template>

<script setup lang="ts">
import type { ActivityItemProps } from '~/types/models'
defineProps<ActivityItemProps>()
</script>