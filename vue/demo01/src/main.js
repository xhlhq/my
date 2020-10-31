import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { DatePicker } from 'ant-design-vue'
Vue.use(DatePicker)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
