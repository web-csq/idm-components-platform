<template>
    <div class="error-page">
        <div class="error">
            <div class="title">{{ statusCode }} - {{ message }}</div>
            <nuxt-link class="error-link" to="/">回到首页</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500
        },
        message() {
            return this.error.message || 'Error'
        },
    },
    head() {
        return {
            title: `${
                this.statusCode === 404 ? '找不到页面' : '呈现页面出错'
            } - 掘金`,
            meta: [
                {
                    name: 'viewport',
                    content:
                        'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.error-page {
    padding: 1rem;
    background: #f7f8fb;
    color: #47494e;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    font-weight: 100 !important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 960px;
    }

    .title {
        font-size: 1.5rem;
        margin-top: 15px;
        color: #47494e;
        margin-bottom: 8px;
    }
}

.error-link {
    display: block;
    margin-top: 24px;
    padding: 14px 24px;
    font-size: 18px;
    color: #fff;
    background-color: $theme;
    border-radius: 5px;
}
</style>
