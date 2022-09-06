<template>
    <div
        v-if="isExternal"
        :style="styleExternalIcon"
        class="idm-svg-external-icon idm-svg-icon"
        v-on="$listeners"
    />
    <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
const isExternalFunc = (path) => /^(https?:|mailto:|tel:)/.test(path)
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
    },
    computed: {
        isExternal() {
            return isExternalFunc(this.iconClass)
        },
        iconName() {
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
                return 'idm-svg-icon ' + this.className
            } else {
                return 'idm-svg-icon'
            }
        },
        styleExternalIcon() {
            return {
                mask: `url(${this.iconClass}) no-repeat 50% 50%`,
                '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
            }
        },
    },
}
</script>
<style scoped>
.idm-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
    overflow: hidden;
}

.idm-svg-external-icon {
    background-color: currentcolor;
    mask-size: cover !important;
    display: inline-block;
}
</style>
