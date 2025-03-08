import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.ts', // Ensure Nuxt-aware scanning
    ],
    theme: {
        extend: {
            fontFamily: {
            },
            colors: {
                bweBlue: '#4962BF',
                bweGrey: '#F4F2F2',
                textBody: '#615E5E',
                bgFill: '#F8F7F2',
                darkbg: '#242C2B',
            },
        },
    },
    plugins: [],
}

export default config