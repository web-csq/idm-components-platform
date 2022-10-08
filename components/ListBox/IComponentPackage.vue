<template>
    <div class="idm-component-package-box cursor-p">
        <div class="d-flex just-b align-c">
            <div class="d-flex align-c">
                <div class="package-name">{{ componentData.packageName }}</div>
                <div class="package-class-name">
                    （{{ componentData.className }}）
                </div>
            </div>
            <div class="d-flex align-c">
                <span class="package-class-origin">{{
                componentData.origin
                }}</span>
                <a-avatar :size="15" :src="componentData.originAvatar" />
            </div>
        </div>
        <div class="package-class-describe text-o-e-2">
            {{ componentData.describe }}
        </div>
        <div class="bottom-line">
            <a-row :gutter="[16, 0]">
                <a-col :span="5"><span class="package-class-time text-o-e">{{
                componentData.time
                }}</span>
                </a-col>
                <a-col :span="5">
                    <span class="package-class-language text-o-e">{{
                    componentData.language
                    }}</span>
                </a-col>
                <a-col :span="4">
                    <span class="package-class-like text-o-e">
                        <svg-icon icon-class="xin" class-name="idm-component-package-icon" />{{ componentData.like }}
                    </span>
                </a-col>
                <a-col :span="10">
                    <span class="package-class-team text-o-e">
                        <svg-icon icon-class="renqun" class-name="idm-component-package-icon" />{{ componentData.team }}
                    </span>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import { IComponentPackageData } from './mock/mockData'
export default {
    name: 'IComponentPackage', // 组件包
    props: {
        componentData: {
            type: Object,
            default: () => IComponentPackageData,
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.idm-component-package-box {
    background: rgb(245, 251, 255);
    padding: 10px;

    .package-name,
    .package-class-name {
        color: #000;
        font-weight: 600;
        font-size: 14px;
    }

    .package-class-origin {
        color: #666;
        font-size: 12px;
        margin-right: 5px;
    }

    .package-class-describe {
        color: #555;
        font-size: 12px;
        margin: 10px 0;
    }

    .bottom-line {
        color: #999;
        font-size: 12px;
    }

    .package-class-language::before {
        display: inline-block;
        margin: 0 5px -2px 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgb(255, 221, 0);

        content: ' ';
    }
}

.idm-component-package-icon {
    color: #999;
    margin: 2px 2px 0 0;
}
</style>
