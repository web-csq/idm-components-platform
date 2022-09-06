import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue' // svg component

Vue.component('svg-icon', SvgIcon)
const req = require.context('@/assets/icons', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
