<template>
    <div class="idm-hot-talk-box cursor-p" :style="{backgroundImage: `url(${componentData.bgImage})`}">
        <div class="hot-talk-title">#{{componentData.title}}</div>
        <div class="hot-talk-sub-title">{{componentData.subTitle}}</div>
        <div class="hot-talk-join d-flex align-c">
            <svg-icon icon-class="right-arrow-circle" class-name="hot-talk-icon" />参入话题
        </div>
    </div>
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
.idm-hot-talk-box {
    color: #fff;
    padding: 7px 10px;
    border-radius: 5px;
    background: #f10215;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .hot-talk-sub-title {
        margin-top: 3px;
        font-size: 12px;
    }

    .hot-talk-join {
        margin-top: 20px;
        font-size: 12px;
        flex-direction: row-reverse;
    }

    .hot-talk-icon {
        font-size: 21px;
    }
}
</style>
