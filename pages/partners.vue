<template>
    <Page title="Partner Management" description="Manage institutional partnerships and collaborations">
        <template #actions>
            <UButton label="Add New Partner" icon="i-lucide-plus" size="lg" block class="justify-center" />
        </template>
        <Block>
            <div class="flex gap-2">
                <UInput placeholder="Search Partners..." icon="i-lucide-search" size="lg" class="flex-1" />
                <USelect v-model="_classifications" :items="classifications" size="lg" class="lg:w-44" />
                <USelect v-model="_regions" :items="regions" size="lg" class="lg:w-44" />
            </div>
        </Block>

        <section class="space-y-6">
            <p class="text-sm text-dimmed">
                Showing 4 of 4 partners
            </p>

            <div class="grid grid-cols-4 gap-4">
                <PartnerCard />
            </div>
            
            <ListGroup>
                <PartnerItem
                    v-for="(partner, index) in partnerItems"
                    :key="index"
                    v-bind="partner"
                />
            </ListGroup>
        </section>
    </Page>
</template>
<script setup lang="ts">
import { classifications, regions, partnerItems } from '~/data'
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'
import PartnerItem from '~/components/partners/PartnerItem.vue'
import ListGroup from '~/components/wrapper/ListGroup.vue'
import PartnerCard from '~/components/partners/PartnerCard.vue'
const _classifications = ref('all')
const _regions = ref('all')
</script>