<template>
    <UDropdownMenu :items="items" :content="{ align: 'center', collisionPadding: 12 }"
        :ui="{ content: collapsed ? 'w-48' : 'w-(--reka-dropdown-menu-trigger-width)' }">
        <UButton v-bind="{
            ...user,
            label: collapsed ? undefined : user?.name,
            trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down'
        }" color="neutral" variant="ghost" block :square="collapsed" class="data-[state=open]:bg-elevated" :ui="{
            trailingIcon: 'text-dimmed'
        }" />

        <template #chip-leading="{ item }">
            <span :style="{
                '--chip-light': `var(--color-${(item as any).chip}-500)`,
                '--chip-dark': `var(--color-${(item as any).chip}-400)`
            }" class="ms-0.5 size-2 rounded-full bg-(--chip-light) dark:bg-(--chip-dark)" />
        </template>
    </UDropdownMenu>
</template>
<script setup lang="ts">
import type { UserMenuProps } from '~/types'
import { useUserMenuItems } from '~/data'

defineProps<UserMenuProps>()

const user = ref({
  name: 'Jane Copper',
  avatar: {
    src: 'https://i.pravatar.cc/40',
    alt: 'Jane Copper'
  }
})

const items = useUserMenuItems(user)
</script>
