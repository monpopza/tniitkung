import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Card } from 'bootstrap-vue/es/components'

import VueQrcodeReader from 'vue-qrcode-reader'

Vue.config.productionTip = false
Vue.use(VueQrcodeReader)
Vue.use(Card)
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
