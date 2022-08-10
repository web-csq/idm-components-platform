<template>
    <IHelloWord></IHelloWord>
</template>

<script>
export default {
    name: 'IndexPage',
    // async asyncData(context) {
    //     // console.log(context)
    //     const res = await context.$axios.get('')
    //     console.log(res)
    // },
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
