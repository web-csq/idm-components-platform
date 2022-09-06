import Vue from 'vue'
import { Button, message } from 'ant-design-vue'
message.config({
    top: '100px',
    duration: 2,
    maxCount: 1,
})
Vue.use(Button)
Vue.use(message)

// 导出给其他plugin使用
export { message }
