<template>
    <Block>
        <div class="flex gap-2">
            <UInput :placeholder="placeholder" icon="i-lucide-search" size="lg" class="flex-1" v-model="searchQuery"
                @keydown.enter="emitSearch" @blur="emitSearch" />
            <USelect v-model="modelValue1" :items="selectOptions1" size="lg" class="lg:w-44" />
            <USelect v-model="modelValue2" :items="selectOptions2" size="lg" class="lg:w-44" />
        </div>
    </Block>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Block from '~/components/wrapper/Block.vue'

const props = defineProps<{
    placeholder?: string
    modelValue1: string | number
    modelValue2: string | number
    selectOptions1: Array<{ label: string; value: string | number }>
    selectOptions2: Array<{ label: string; value: string | number }>
    search: string
}>()

const emit = defineEmits([
    'update:modelValue1',
    'update:modelValue2',
    'update:search',
    'search'
])

const modelValue1 = computed({
    get: () => props.modelValue1,
    set: val => emit('update:modelValue1', val)
})

const modelValue2 = computed({
    get: () => props.modelValue2,
    set: val => emit('update:modelValue2', val)
})

const searchQuery = computed({
    get: () => props.search,
    set: val => emit('update:search', val)
})

// Emits the search event with the current search query
const emitSearch = () => {
    emit('search', searchQuery.value)
}
</script>
