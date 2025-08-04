export interface PageProps {
    title?: string
    description?: string
    alignCenter?: boolean
}

export interface BlockProps {
    title?: string
    description?: string
    showDivider?: boolean        // Optional: shows divider if true
    noBodyPadding?: boolean      // Optional: removes body padding if true
    icon?: string
}

// export interface StatCardProps {
//     icon: string
//     iconColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
//     iconVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
//     title: string
//     value: string | number
//     trendIcon?: 'i-lucide-trending-up' | 'i-lucide-trending-down'
//     trendValue?: string
//     trendColor?: 'success' | 'error'
//     trendDescription?: string
//     description?: string
// }

export interface ActivityItemProps {
    title: string
    university: string
    department: string
    timeAgo: string
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface DeadlineItemProps {
    title: string
    deadline: string
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface PartnerItemProps {
    name: string
    icon?: string
    sector: string
    country: string
    contactPerson: string
    activeMous: number
    completed: number
    ongoing: number
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface StatCardProps {
    label: string
    count: number
    color: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary' | 'purple'
    icon: string
    hasDetails?: boolean
    trendValue?: string           // e.g. "2%" or "-4%"
    trendDescription?: string     // optional sublabel
    useGradient?: boolean         // grdiet option
}

export interface SelectConfig {
    model: string
    items: { label: string; value: any }[]
    placeholder?: string
}

export interface SearchBarProps {
    placeholder?: string
    selectConfigs?: SelectConfig[]
    modelValue?: string
    modelSelects?: Record<string, any>
}
