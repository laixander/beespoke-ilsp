<template>
    <Page title="ILSP" description="Welcome to CBSUA International Linkages Management System">
        <template #actions>
            <UButton label="View Calendar" icon="i-lucide-calendar" color="neutral" variant="outline" size="lg" block
                class="justify-center" />
            <UButton label="Quick Add" icon="i-lucide-plus" size="lg" block class="justify-center" />
        </template>
        <Grid :lg="4" :gap="4">
            <StatCard
                v-for="(dashboard, index) in statDashboardCards"
                :key="index"
                v-bind="dashboard"
                hasDetails
            />
        </Grid>

        <Grid :lg="4" :gap="4">
            <GridSpan :lg="3" >
                <Grid :lg="2" :gap="4">
                    <Block title="Partnership Distribution" description="Pie chart goes here">
                        <DonutChart />
                    </Block>
                    <Block title="Department Activity" description="Bar graph goes here">
                        <StackedBarChart />
                    </Block>
                </Grid>
            </GridSpan>
            <Block title="Quick Actions" description="Quick actions goes here">
                <QuickActions />
            </Block>
        </Grid>

        <Grid :lg="2" :gap="4">
            <Block title="Recent Activities" description="Add description for recent activities" icon="i-lucide-activity" noBodyPadding showDivider>
                <ListGroup>
                    <ActivityItem
                        v-for="(activity, index) in activityItems"
                        :key="index"
                        v-bind="activity"
                    />
                </ListGroup>
            </Block>
            <Block title="Upcoming Deadlines" description="Add description for upcoming deadlines" icon="i-lucide-triangle-alert" noBodyPadding showDivider>
                <ListGroup>
                    <DeadlineItem
                        v-for="(deadline, index) in deadlineItems"
                        :key="index"
                        v-bind="deadline"
                        class="min-h-[81px]"
                    />
                </ListGroup>
            </Block>
        </Grid>
    </Page>
</template>

<script setup lang="ts">
import { activityItems, statDashboardCards, deadlineItems } from '~/data'
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'
import Grid from '~/components/wrapper/Grid.vue'
import GridSpan from '~/components/wrapper/GridSpan.vue'
import ListGroup from '~/components/wrapper/ListGroup.vue'
import DonutChart from '~/components/apexchart/DonutChart.vue'
import StackedBarChart from '~/components/apexchart/StackedBarChart.vue'
import ActivityItem from '~/components/dashboard/ActivityItem.vue'
import DeadlineItem from '~/components/dashboard/DeadlineItem.vue'
import QuickActions from '~/components/dashboard/QuickActions.vue'
</script>