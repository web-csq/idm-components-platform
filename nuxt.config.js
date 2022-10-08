import path from 'path'
import { router } from './router'
export default {
    server: {
        port: 9527,
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'idm-components-playform',
        meta: [
            { charset: 'utf-8' },
            { name: 'referrer', content: 'never' },
            { name: 'format-detection', content: 'telephone=no' },
            {
                name: 'viewport',
                content:
                    'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover',
            },
            { hid: 'keywords', name: 'keywords', content: 'idm组件交流平台' },
            {
                hid: 'description',
                name: 'description',
                content: 'idm组件交流平台',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'ant-design-vue/dist/antd.css',
        '~/assets/css/normalize.css',
        '~/assets/css/common.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/antd-ui',
        '@/plugins/icon',
        { src: '@/plugins/axios', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // middleware
    middleware: [],

    // Router config
    router,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    axios: {
        proxy: true,
        prefix: '/api',
    },
    proxy: {
        '/api': {
            target: 'http://116.236.111.158:8086',
            pathRewrite: {
                '^/api': '/',
                changeOrigin: true,
            },
        },
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    alias: {
        // icon 按需加载
        '@ant-design/icons/lib/dist$': path.resolve(
            __dirname,
            'plugins/antdicons.js'
        ),
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
        // postcss: {
        //     plugins: {
        //         tailwindcss: path.join(__dirname, 'tailwind.config.js'),
        //         'postcss-pxtorem': {
        //             propList: ['*', '!border*'],
        //         },
        //     },
        //     preset: { autoprefixer: true },
        // },
        babel: {
            plugins: [
                [
                    'import',
                    {
                        libraryName: 'antd',
                        libraryDirectory: 'lib', // default: lib
                        style: 'css',
                    },
                ],
            ],
        },
        extend(config, ctx) {
            const svgRule = config.module.rules.find((rule) =>
                rule.test.test('.svg')
            )
            svgRule.exclude = [path.resolve(__dirname, 'assets/icons')]

            // Includes /assets/icons/svg for svg-sprite-loader
            config.module.rules.push({
                test: /\.svg$/,
                include: [path.resolve(__dirname, 'assets/icons')],
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]',
                },
            })
        },
    },
}
