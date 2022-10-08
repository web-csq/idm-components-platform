<template>
    <div class="idm-common-box-container">
        <div class="idm-common-box-top d-flex just-b align-c">
            <div class="idm-common-box-top-left d-flex align-c">
                <div
                    class="idm-common-box-top-left-icon d-flex align-c"
                    :style="'background:' + componentData.topColor">
                    <svg-icon :icon-class="componentData.iconClass" />
                </div>
                <div class="idm-common-box-top-left-text">
                    {{ componentData.topText }}
                    <span
                        :style="'background:' + componentData.circleColor"
                        class="idm-common-box-top-left-circle"></span>
                </div>
            </div>

            <div class="idm-common-box-top-right cursor-p">
                <span>{{ componentData.moreText }}</span>
                <svg-icon icon-class="right-arrow" class-name="right-arrow" />
            </div>
        </div>
        <slot name="list"></slot>
    </div>
</template>
<script>
export default {
    name: 'ICommonBoxContainer',
    props: {
        componentData: {
            type: Object,
            default() {
                return {
                    topText: '组件代码包',
                    iconClass: 'code',
                    moreText: '全部',
                    topColor: 'red',
                    circleColor: 'rgba(255, 0, 0, 0.4)',
                }
            },
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.idm-common-box-container {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
}

.idm-common-box-top {
    margin-bottom: 15px;
}

.idm-common-box-top-left-icon {
    font-size: 16px;
    padding: 2px;
    border-radius: 50%;
    color: #ffffff;
    margin: 2px 0 0 0;
}

.idm-common-box-top-left-text {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    margin: 0 0 0 10px;
    position: relative;
    top: 0;
    left: 0;
    color: #000000;
}

.idm-common-box-top-left-circle {
    position: absolute;
    top: 3px;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}
</style>
