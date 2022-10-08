<template>
    <div></div>
</template>
<script>
import { IHotTalkData } from './mock/mockData'
export default {
    name: 'IHotTalk', // 热话题
    props: {
        componentData: {
            type: Object,
            default: () => IHotTalkData,
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>

</style>
