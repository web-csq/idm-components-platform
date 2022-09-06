<template>
    <div class="idm-index-page-container">
        <div class="idm-index-page-left">
        </div>
        <div class="idm-index-page-right"></div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    components: {
    },
    // async asyncData(context) {
    //     // console.log(context)
    //     const res = await context.$axios.get('')
    //     console.log(res)
    // },
    layout: 'DefaultIndex',
    head() {
        return {
            title: '首页'
        }
    },
    mounted() {
        this.$axios.get('/DreamWeb/ctrl/util/genVerifyCodeKey').then(res=> {
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
    .idm-index-page-container{
        width: 1080px;
        margin: 0 auto;
    }
</style>
