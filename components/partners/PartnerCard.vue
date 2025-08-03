<template>
    <UCard>
        <div class="flex flex-col space-y-1.5 pb-4">
            <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                    <UBadge icon="i-lucide-building" color="neutral" variant="soft" size="lg" class="rounded-full p-3" />
                    <div class="flex-1 min-w-0">
                        <h3 class="font-semibold truncate">Tokyo University</h3>
                        <div class="flex items-center text-sm text-muted-foreground gap-1">
                            <UIcon name="i-lucide-map-pin" class="size-3 shrink-0 text-muted" />
                            Japan
                        </div>
                    </div>
                </div>
                <UDropdownMenu
                    :items="items"
                    :content="{
                        align: 'end',
                        side: 'bottom',
                        sideOffset: 8
                    }"
                    :ui="{
                        content: 'w-auto'
                    }"
                >
                    <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" />
                </UDropdownMenu>
            </div>
            <div class="flex items-center space-x-2 mt-2">
                <UBadge label="Academic" variant="soft" color="success" class="rounded-full" />
                <UBadge label="Active" variant="soft" color="success" class="rounded-full" />
            </div>
        </div>
        <div class="pt-0 space-y-6">
            <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                    <div class="text-2xl font-bold text-primary">3</div>
                    <div class="text-xs text-muted-foreground">Active MOUs</div>
                </div>
                <div>
                    <div class="text-2xl font-bold text-success">12</div>
                    <div class="text-xs text-muted-foreground">Completed</div>
                </div>
                <div>
                    <div class="text-2xl font-bold text-warning">5</div>
                    <div class="text-xs text-muted-foreground">Ongoing</div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm">
                    <UIcon name="i-lucide-mail" class="size-3 shrink-0 text-toned" />
                    <span class="truncate">Dr. Hiroshi Tanaka</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <UIcon name="i-lucide-globe" class="size-3 shrink-0 text-toned" />
                    <a href="https://www.u-tokyo.ac.jp" class="text-primary hover:underline truncate">Visit
                        Website</a>
                </div>
            </div>
            <div class="space-y-2">
                <p class="text-xs font-medium text-muted-foreground">Areas of Collaboration:</p>
                <div class="flex flex-wrap gap-1">
                    <UBadge label="Student Exchange" variant="outline" color="neutral" />
                    <UBadge label="Research" variant="outline" color="neutral" />
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { UBadge } from '#components';
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    icon: 'i-lucide-user'
  },
  {
    label: 'Billing',
    icon: 'i-lucide-credit-card'
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog'
  }
])
</script>