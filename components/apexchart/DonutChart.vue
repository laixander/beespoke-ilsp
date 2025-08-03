<template>
    <client-only>
        <div class="w-full max-w-md mx-auto">
            <ApexChart type="donut" :options="chartOptions" :series="series" width="100%" />
        </div>
    </client-only>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColorMode } from '#imports'
import { tooltip } from '#build/ui'

const colorMode = useColorMode()

const series = [23, 68, 17]
const labels = ['Academic Institutions', 'Industry Partners', 'Government']
const customColors = ['var(--ui-warning)', 'var(--ui-secondary)', 'var(--ui-primary)']

const chartOptions = computed(() => {
    const isDark = colorMode.value === 'dark'
    return {
        labels,
        colors: customColors,
        chart: {
            background: 'transparent',
            toolbar: {
                show: false
            },
            fontFamily: `'Public Sans', sans-serif`
        },
        legend: {
            position: 'bottom',
            labels: {
                colors: isDark ? 'dark' : 'light'
            },
            markers: {
                strokeWidth: 0,
                offsetX: -6,
                customHTML: () => {
                return `<div style="
                    width: 12px;
                    height: 12px;
                    border-radius: 4px;
                    background-color: currentColor;
                    display: inline-block;
                "></div>`
                }
            },
            itemMargin: {
                horizontal: 12
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: isDark ? 'dark' : 'light'
        }
    }
    
})
</script>
