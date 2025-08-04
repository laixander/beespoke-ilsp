import type { StatCardProps } from '~/types/models'

export const statDashboardCards: StatCardProps[] = [
    {
        icon: 'i-lucide-users',
        color: 'success',
        label: 'Total Partners',
        count: 156,
        trendValue: '+12%',
        trendDescription: 'Active institutional partnerships',
    },
    {
        icon: 'i-lucide-file-text',
        color: 'secondary',
        label: 'Active MOUs',
        count: 89,
        trendValue: '+5%',
        trendDescription: 'Currently valid agreements',
    },
    {
        icon: 'i-lucide-folder-open',
        color: 'warning',
        label: 'Ongoing Activities',
        count: 34,
        trendValue: '-8%',
        trendDescription: 'Projects in progress',
    },
    {
        icon: 'i-lucide-info',
        color: 'error',
        label: 'Expiring Soon',
        count: 7,
        trendValue: '-2%',
        trendDescription: 'MOUs expiring in 60 days',
    },
]

export const statProposalCards: StatCardProps[] = [
    {
        label: 'Pending Review',
        count: 156,
        color: 'warning',
        icon: 'i-lucide-inbox'
    },
    {
        label: 'Under Review',
        count: 89,
        color: 'secondary',
        icon: 'i-lucide-scan-text'
    },
    {
        label: 'Approved',
        count: 34,
        color: 'success',
        icon: 'i-lucide-thumbs-up'
    },
    {
        label: 'Need Revision',
        count: 7,
        color: 'error',
        icon: 'i-lucide-circle-alert'
    }
]