<template>
    <div class="idm-yuanquan-box">
        <div class="yuanquan-title text-o-e-2">
            <span class="talk-hash">#{{ componentData.hash }}#</span>{{ componentData.title }}
        </div>
        <a-row v-if="componentData.images && componentData.images.length > 0" :gutter="[16, 16]">
            <a-col v-for="(item, index) in componentData.images" :key="index" :span="12">
                <img :src="item" alt="图片加载失败" class="yunquan-image" />
            </a-col>
        </a-row>
        <view class="yuanquan-tag"> {{ componentData.tag }} </view>
        <div class="d-flex just-b align-c yuanquan-bottom">
            <div>{{ componentData.user }}</div>
            <div class="d-flex align-c">
                <svg-icon icon-class="aixin" class-name="yuanquan-aixin" />
                <span>{{ componentData.like }}</span>
                <svg-icon icon-class="pinglun" class-name="yuanquan-pinglun" />
                <span>{{ componentData.comment }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { IYunQuanData } from './mock/mockData'
export default {
    name: 'IYunQuan', // 云圈
    props: {
        componentData: {
            type: Object,
            default: () => IYunQuanData,
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.idm-yuanquan-box {
    margin: 0 0 20px 0;
    font-size: 12px;

    .yuanquan-title {
        color: #000;
        margin: 0 0 5px 0;
    }

    .talk-hash {
        color: rgb(53, 199, 94);
        margin: 0 5px 0 0;
    }

    .yuanquan-tag {
        background: #eee;
        border-radius: 15px;
        overflow: hidden;
        color: #000;
        padding: 0px 8px;
    }

    .yunquan-image {
        width: 100%;
    }

    .yuanquan-bottom {
        margin: 5px 0 0 0;
    }

    .yuanquan-aixin {
        margin: 0 5px 0 0;
    }

    .yuanquan-pinglun {
        margin: 0 5px 0 10px;
    }

}
</style>
