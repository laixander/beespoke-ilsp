import type { ActivityItemProps } from '~/types/models'
export const activityItems: ActivityItemProps[] = [
    {
        title: 'Student Exchange Program with Tokyo University',
        university: 'Tokyo University',
        department: 'Engineering',
        timeAgo: '2 hours ago',
        status: 'ongoing',
        statusColor: 'secondary',
        statusVariant: 'soft',
    },
    {
        title: 'Joint Research Initiative with MIT',
        university: 'MIT',
        department: 'Computer Science',
        timeAgo: '1 day ago',
        status: 'ongoing',
        statusColor: 'secondary',
        statusVariant: 'soft',
    },
    {
        title: 'Internship Program - UC Berkeley',
        university: 'UC Berkeley',
        department: 'Business',
        timeAgo: '3 days ago',
        status: 'completed',
        statusColor: 'success',
        statusVariant: 'soft',
    },
    {
        title: 'Collaborative Workshop: NUS x UP',
        university: 'National University of Singapore',
        department: 'Environmental Science',
        timeAgo: '5 hours ago',
        status: 'upcoming',
        statusColor: 'warning',
        statusVariant: 'soft',
    },
]



import type { DeadlineItemProps } from '~/types/models'
export const deadlineItems: DeadlineItemProps[] = [
    {
        title: 'MOU Renewal - MIT Partnership',
        deadline: '2026-08-15',
        status: 'high',
        statusColor: 'error',
        statusVariant: 'soft',
    },
    {
        title: 'Activity Report Submission',
        deadline: '2026-08-20',
        status: 'medium',
        statusColor: 'warning',
        statusVariant: 'soft',
    },
    {
        title: 'Partner Review Meeting',
        deadline: '2026-08-25',
        status: 'low',
        statusColor: 'success',
        statusVariant: 'soft',
    },
    {
        title: 'Grant Application Deadline - Phase II',
        deadline: '2026-08-30',
        status: 'high',
        statusColor: 'error',
        statusVariant: 'soft',
    }
]

import type { PartnerItemProps } from '~/types/models'
export const partnerItems: PartnerItemProps[] = [
  {
    name: 'Tokyo University',
    sector: 'Academic',
    country: 'Japan',
    contactPerson: 'Dr. Hiroshi Tanaka',
    activeMous: 3,
    completed: 12,
    ongoing: 5,
    status: 'active',
    statusColor: 'success',
    statusVariant: 'soft',
  },
  {
    name: 'Stanford University',
    sector: 'Academic',
    country: 'USA',
    contactPerson: 'Prof. Jane Lee',
    activeMous: 4,
    completed: 10,
    ongoing: 2,
    status: 'pending',
    statusColor: 'warning',
    statusVariant: 'soft',
  },
  {
    name: 'Siemens AG',
    sector: 'Industry',
    country: 'Germany',
    contactPerson: 'Mr. Klaus Müller',
    activeMous: 1,
    completed: 6,
    ongoing: 1,
    status: 'inactive',
    statusColor: 'error',
    statusVariant: 'soft',
  },
  {
    name: 'University of Melbourne',
    sector: 'Academic',
    country: 'Australia',
    contactPerson: 'Dr. Emma Watson',
    activeMous: 2,
    completed: 9,
    ongoing: 4,
    status: 'active',
    statusColor: 'success',
    statusVariant: 'soft',
  },
]

