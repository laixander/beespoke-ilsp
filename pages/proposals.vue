<template>
    <Page title="Proposal Intake" description="Manage incoming partnership proposals and collaboration requests">
        <template #actions>
            <UButton label="Add Internal Proposal" icon="i-lucide-plus" size="lg" variant="outline" color="neutral" />
            <UButton label="Export Report" icon="i-lucide-file-text" size="lg" />
        </template>
        <Grid :lg="4" :gap="4">
            <StatCard v-for="(proposal, index) in statProposalCards" :key="index" v-bind="proposal" useGradient />
        </Grid>
        <SearchBar
            v-model:search="search"
            v-model:modelValue1="_classifications"
            v-model:modelValue2="_regions"
            :selectOptions1="classifications"
            :selectOptions2="regions"
            placeholder="Search Partners..."
            @search="handleSearch"
        />
        <Grid :lg="1" :gap="4">
            <ProposalItem />
            <ProposalItem />
            <ProposalItem />
            <ProposalItem />
        </Grid>
        <Block>
            <ComingSoon />
        </Block>
    </Page>
</template>

<script setup lang="ts">
import { classifications, regions, statProposalCards } from '~/data'
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'
import ComingSoon from '~/components/ComingSoon.vue';
import Grid from '~/components/wrapper/Grid.vue';
import SearchBar from '~/components/SearchBar.vue';
import ProposalItem from '~/components/proposals/ProposalItem.vue';

const search = ref('')
const _classifications = ref('all')
const _regions = ref('all')

const handleSearch = (value: string) => {
  console.log('Search triggered with:', value)
  // Add filter logic here...
}
</script>