import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export //Added


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify //Added
}).$mount('#app')
