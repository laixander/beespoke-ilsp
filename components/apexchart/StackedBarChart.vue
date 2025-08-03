<template>
    <ClientOnly>
        <ApexChart type="bar" height="400" :options="chartOptions" :series="series" />
    </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const series = ref([
    {
        name: 'Completed',
        data: [44, 55, 41, 67, 22],
    },
    {
        name: 'Active',
        data: [13, 23, 20, 8, 13],
    },
])

const chartOptions = computed(() => {
    const isDark = colorMode.value === 'dark'
    return {
        chart: {
            type: 'bar',
            stacked: true,
            background: 'transparent',
            toolbar: {
                show: false
            },
            fontFamily: `'Public Sans', sans-serif`
        },
        xaxis: {
            categories: ['Engineering', 'Business', 'Agriculture', 'Education', 'IT'],
            labels: {
                style: { colors: 'var(--ui-text-toned)' },
            },

            axisBorder: {
                show: true,
                color: 'var(--ui-border)'
            },
            axisTicks: {
                show: true,
                color: 'var(--ui-border)'
            },
        },
        legend: {
            position: 'top',
            labels: {
                colors: 'var(--ui-text-toned)'
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
        tooltip: {
            theme: isDark ? 'dark' : 'light'
        },
        fill: {
            opacity: 1,
            colors: ['var(--ui-primary)', 'var(--ui-color-primary-300)'],
        },
        plotOptions: {
            bar: {
                columnWidth: '70%',
                borderRadius: 8,
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: 'var(--ui-border)'
        },
    }

})
</script>