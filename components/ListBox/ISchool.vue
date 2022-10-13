<template>
    <a-card hoverable :bordered="false" class="school-box">
        <template #cover>
            <div class="school-box-top">
                <img alt="图片加载失败" class="school-box-top-image" :src="componentData.cover" />
                <div class="school-box-top-sort">视频</div>
            </div>
        </template>
        <div class="school-box-title">
            <span class="text-o-e-2">
                {{ componentData.title }}
            </span>
        </div>
        <div class="school-box-team">
            <svg-icon icon-class="renqun" class-name="school-box-icon" />{{ componentData.team }}
        </div>
        <div class="d-flex just-b align-c school-box-bottom">
            <div class="d-flex align-c">
                <a-avatar :size="15" :src="componentData.originAvatar" />
                <span class="ml-6">{{ componentData.origin }}</span>
            </div>
            <div>
                <span class="text-o-e school-box-count">{{ componentData.count }}</span>
            </div>
        </div>
    </a-card>
</template>
<script>
import { ISchoolData } from './mock/mockData'
export default {
    name: 'ISchool',  // i学院
    props: {
        componentData: {
            type: Object,
            default: () => ISchoolData,
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.school-box {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #f1f1f1;

    ::v-deep(.ant-card-body) {
        padding: 0;
    }

    .school-box-top {
        position: relative;
        overflow: hidden;

        .school-box-top-sort {
            position: absolute;
            bottom: -2px;
            right: -2px;
            padding: 1px 7px;
            border-top-left-radius: 5px;
            font-size: 12px;
            background: rgb(232, 233, 240);
            transform: scale(0.92);
        }
    }

    .school-box-top-image {
        width: 100%;
        border: 0;
    }

    .school-box-team {
        color: #999;
        font-size: 12px;
        padding: 0 4px;
        transform: scale(0.92);

        .school-box-icon {
            font: inherit;
            color: #999;
            margin: 0 5px 0 0;
            font-size: 12px;
        }
    }

    .school-box-title {
        color: #000;
        padding: 5px 10px;
        font-size: 12px
    }

    .ml-6 {
        margin-left: 6px;
    }

    .school-box-bottom {
        font-size: 12px;
        margin-top: 5px;
        padding: 0 4px 10px;
        transform: scale(0.92);
    }

    .school-box-count {
        color: #999;
    }

    &:hover {
        .school-box-title {
            color: rgb(24, 144, 255);
        }
    }
}
</style>
