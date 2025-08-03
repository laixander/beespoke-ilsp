import type { DropdownMenuItem } from '@nuxt/ui'
import { useColorMode, useAppConfig } from '#imports'

export function useUserMenuItems(user: Ref<{ name: string; avatar: any }>) {
    const colorMode = useColorMode()
    const appConfig = useAppConfig()

    const colors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
    const neutrals = ['slate', 'gray', 'zinc', 'neutral', 'stone']

    const items = computed<DropdownMenuItem[][]>(() => ([
        [
            {
                type: 'label',
                label: user.value.name,
                avatar: user.value.avatar
            }
        ],
        [
            {
                label: 'Profile',
                icon: 'i-lucide-user'
            },
            {
                label: 'Switch Role',
                icon: 'i-lucide-user-cog',
                children: ['ILSP Staff', 'Department', 'Administrator', 'Institution', 'System Admin'].map(role => ({
                    label: role,
                    type: 'checkbox',
                    checked: useRole().value === role,
                    onUpdateChecked(checked: boolean) {
                        if (checked) useRole().value = role
                    },
                    onSelect(e: Event) {
                        e.preventDefault()
                    }
                }))
            },
            {
                label: 'Settings',
                icon: 'i-lucide-settings',
            }
        ],
        [
            {
                label: 'Theme',
                icon: 'i-lucide-palette',
                children: [
                    {
                        label: 'Primary',
                        slot: 'chip',
                        chip: appConfig.ui.colors.primary,
                        content: {
                            align: 'center',
                            collisionPadding: 16
                        },
                        children: colors.map(color => ({
                            label: color,
                            chip: color,
                            slot: 'chip',
                            checked: appConfig.ui.colors.primary === color,
                            type: 'checkbox',
                            onSelect: e => {
                                e.preventDefault()
                                appConfig.ui.colors.primary = color
                            }
                        }))
                    },
                    {
                        label: 'Neutral',
                        slot: 'chip',
                        chip: appConfig.ui.colors.neutral === 'neutral' ? 'old-neutral' : appConfig.ui.colors.neutral,
                        content: {
                            align: 'end',
                            collisionPadding: 16
                        },
                        children: neutrals.map(color => ({
                            label: color,
                            chip: color === 'neutral' ? 'old-neutral' : color,
                            slot: 'chip',
                            type: 'checkbox',
                            checked: appConfig.ui.colors.neutral === color,
                            onSelect: e => {
                                e.preventDefault()
                                appConfig.ui.colors.neutral = color
                            }
                        }))
                    }
                ]
            },
            {
                label: 'Appearance',
                icon: 'i-lucide-sun-moon',
                children: [
                    {
                        label: 'Light',
                        icon: 'i-lucide-sun',
                        type: 'checkbox',
                        checked: colorMode.value === 'light',
                        onSelect(e: Event) {
                            e.preventDefault()
                            colorMode.preference = 'light'
                        }
                    },
                    {
                        label: 'Dark',
                        icon: 'i-lucide-moon',
                        type: 'checkbox',
                        checked: colorMode.value === 'dark',
                        onUpdateChecked(checked: boolean) {
                            if (checked) colorMode.preference = 'dark'
                        },
                        onSelect(e: Event) {
                            e.preventDefault()
                        }
                    }
                ]
            }
        ],
        [
            {
                label: 'Templates',
                icon: 'i-lucide-layout-template',
                children: [
                    { label: 'Starter', to: 'https://ui-pro-starter.nuxt.dev/' },
                    { label: 'Landing', to: 'https://landing-template.nuxt.dev/' },
                    { label: 'Docs', to: 'https://docs-template.nuxt.dev/' },
                    { label: 'SaaS', to: 'https://saas-template.nuxt.dev/' },
                    { label: 'Dashboard', to: 'https://dashboard-template.nuxt.dev/', checked: true, type: 'checkbox' },
                    { label: 'Chat', to: 'https://chat-template.nuxt.dev/' }
                ]
            }
        ],
        [
            {
                label: 'Documentation',
                icon: 'i-lucide-book-open',
                to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
                target: '_blank'
            },
            {
                label: 'GitHub repository',
                icon: 'i-simple-icons-github',
                to: 'https://github.com/nuxt-ui-pro/dashboard',
                target: '_blank'
            }
        ],
        [
            {
                label: 'Log out',
                icon: 'i-lucide-log-out'
            }
        ]
    ]))

    return items
}