import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import './style/index.css'
import VueEcharts from 'vue-echarts'
import * as ECharts from 'echarts'




Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart',VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
