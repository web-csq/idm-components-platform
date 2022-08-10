/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    purgeCSS: {
        whitelistPatterns: [/el-.+$/],
        whitelistPatternsChildren: [/el-.+$/],
    },
    theme: {
        extend: {},
    },
    plugins: [],
}
