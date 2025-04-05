export default {
    // content: [
    //     './components/**/*.{vue,js,ts}',
    //     './layouts/**/*.vue',
    //     './pages/**/*.vue',
    //     './app.vue',
    //     './plugins/**/*.{js,ts}',
    //     './nuxt.config.ts', // Ensure Nuxt-aware scanning
    //     './assets/**/*.{css,scss}',
    // ],
    theme: {
        extend: {
            fontFamily: {
            },
            scrollBehavior: {
                smooth: 'smooth',
            },
            colors: {
                bweBlue: '#4962BF',
                bweGrey: '#F4F2F2',
                textBody: '#615E5E',
                bgFill: '#F8F7F2',
                darkbg: '#242C2B',
                lightBlue: '#AEC2E3',
                deepNavy: '#2C3E50',
                royalBlue: '#3A50A1',
                softGold: '#E4B363',
                warmGrey: '#B0A8A8',
                vibrantOrange: '#F57C00',
                teal: '#009688',
                nearBlack: '#222222'
            },
        },
    },
    plugins: [],
}