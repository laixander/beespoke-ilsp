// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'ILSP Application',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'A professional web application built with Nuxt UI, featuring multiple pages, data visualization, and comprehensive management capabilities.' }
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
    modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
    css: ['~/assets/css/main.css'],
    ui: {
        theme: {
            colors: [
                'primary',
                'secondary',
                'success',
                'info',
                'warning',
                'error',
                'neutral',
                'violet',
                'orange',
                'purple'
            ]
        }
    }
})
