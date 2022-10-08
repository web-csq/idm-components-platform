<template>
    <a-card hoverable :bordered="false" class="idm-component-market-box">
        <template #cover>
            <div class="idm-component-market-top">
                <div class="idm-component-market-top-preview" @click="handlePreview">
                    预览
                </div>
                <img alt="图片加载失败" class="idm-component-market-top-image" :src="componentData.componentCover" />
                <div class="idm-component-market-top-package">
                    组件包：{{ componentData.packageName }}
                </div>
            </div>
        </template>
        <div class="d-flex just-b align-c p-6">
            <div class="component-market-name">
                {{ componentData.componentName }}
            </div>
            <div class="text-blue">1.0.0</div>
        </div>
        <div class="component-market-class-name">
            类名：<span class="text-blue">{{ componentData.className }}</span>
        </div>
        <div class="d-flex just-b align-c component-market-bottom">
            <div class="d-flex align-c">
                <a-avatar :size="15" :src="componentData.originAvatar" />
                <span class="ml-6">{{ componentData.origin }}</span>
            </div>
            <div>
                <span class="text-o-e">{{ componentData.time }}</span>
            </div>
        </div>
    </a-card>
</template>
<script>
import { IComponentMarketData } from './mock/mockData'
export default {
    name: 'IComponentMarket', // 组件市场
    props: {
        componentData: {
            type: Object,
            default: () => IComponentMarketData,
        },
    },
    data() {
        return {}
    },
    methods: {
        handlePreview() { },
    },
}
</script>

<style lang="scss" scoped>
.idm-component-market-box {
    border-radius: 5px;
    overflow: hidden;
    background: rgb(245, 250, 255);
    padding: 10px;

    ::v-deep(.ant-card-body) {
        padding: 0;
    }

    .idm-component-market-top {
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }

    .idm-component-market-top-preview {
        position: absolute;
        top: 6px;
        right: 6px;
        border-radius: 10px;
        background: #ccc;
        color: #fff;
        font-size: 12px;
        padding: 2px 10px;
        display: none;
    }

    .idm-component-market-top-package {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: #fff;
        font-size: 12px;
        height: 0;
        padding: 0;
        line-height: 25px;
        box-sizing: border-box;
        transition: height 0.2s;
        background: linear-gradient(180deg,
                rgba(255, 255, 255, 0.4),
                rgba(150, 150, 150, 0.3));
    }

    .idm-component-market-top-image {
        width: 100%;
        border-radius: 5px;
    }

    &:hover {
        .idm-component-market-top-preview {
            display: block;
        }

        .idm-component-market-top-package {
            height: 25px;
            padding: 2px 5px;
        }
    }

    .p-6 {
        padding: 6px 0;
    }

    .ml-6 {
        margin-left: 6px;
    }

    .text-blue {
        color: rgb(33, 124, 255);
    }

    .component-market-name {
        color: #000;
    }

    .component-market-class-name {
        font-size: 12px;
    }

    .component-market-bottom {
        font-size: 12px;
        margin-top: 5px;
    }
}
</style>
