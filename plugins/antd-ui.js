import Vue from 'vue'
import { Button, message, Row, Col, Avatar, Card } from 'ant-design-vue'
message.config({
    top: '100px',
    duration: 2,
    maxCount: 1,
})
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.use(Card)
Vue.use(message)

// 导出给其他plugin使用
export { message }
