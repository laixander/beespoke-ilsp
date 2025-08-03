import type { NavigationMenuItem } from '@nuxt/ui'

export const navigationMenuItemsByRole: Record<string, NavigationMenuItem[]> = {
    'ILSP Staff': [
        [
            { label: 'MAIN NAVIGATION', type: 'label' },
            { label: 'Dashboard', icon: 'i-lucide-pie-chart', to: '/' },
            { label: 'Proposal Intake', icon: 'i-lucide-inbox', to: '/proposals' },
            { label: 'MOU Workflow', icon: 'i-lucide-git-branch', to: '/workflows' },
            { label: 'Partner Management', icon: 'i-lucide-users', to: '/partners' },
            { label: 'MOU Repository', icon: 'i-lucide-file-text', to: '/mous' },
            { label: 'Project Monitoring', icon: 'i-lucide-folder-open', to: '/monitoring' },
            { label: 'Project Evaluation', icon: 'i-lucide-clipboard-check', to: '/evaluations' },
            { label: 'Reports & Analytics', icon: 'i-lucide-chart-column', to: '/analytics' },
            { label: 'Partner Registration', icon: 'i-lucide-user-plus', to: '/registrations' }
        ]
    ],
    'Department': [
        [
            { label: 'MAIN NAVIGATION', type: 'label' },
            { label: 'Activities', icon: 'i-lucide-folder-open' },
            { label: 'Reports', icon: 'i-lucide-chart-column' }
        ]
    ],
    'Administrator': [
        [
            { label: 'MAIN NAVIGATION', type: 'label' },
            { label: 'Dashboard', icon: 'i-lucide-pie-chart', to: '/' },
            { label: 'Notifications', icon: 'i-lucide-bell' },
            { label: 'Settings', icon: 'i-lucide-settings' }
        ]
    ],
    'Institution': [
        [
            { label: 'MAIN NAVIGATION', type: 'label' },
            { label: 'Reports', icon: 'i-lucide-chart-column' },
            { label: 'Settings', icon: 'i-lucide-settings' }
        ]
    ],
    'System Admin': [
        [
            { label: 'MAIN NAVIGATION', type: 'label' },
            { label: 'Dashboard', icon: 'i-lucide-pie-chart', to: '/' },
            { label: 'Users', icon: 'i-lucide-user' },
            { label: 'Roles', icon: 'i-lucide-user-cog' },
            { label: 'Settings', icon: 'i-lucide-settings' }
        ]
    ]
}


// import type { NavigationMenuItem } from '@nuxt/ui'

// export const navigationLinks: NavigationMenuItem[] = [
//     [
//         {
//             label: 'MAIN NAVIGATION',
//             type: 'label'
//         },
//         {
//             label: 'Dashboard',
//             icon: 'i-lucide-pie-chart',
//             to: '/'
//         },
//         {
//             label: 'Partners',
//             icon: 'i-lucide-users',
//             to: '/partners'
//         },
//         {
//             label: 'MOUs',
//             icon: 'i-lucide-file-text',
//             to: '/mous'
//         },
//         {
//             label: 'Activities',
//             icon: 'i-lucide-folder-open',
//         },
//         {
//             label: 'Reports',
//             icon: 'i-lucide-chart-column',
//         },
//         {
//             label: 'Notifications',
//             icon: 'i-lucide-bell',
//         },
//         {
//             label: 'Settings',
//             icon: 'i-lucide-settings',
//         }
//     ]
// ]
