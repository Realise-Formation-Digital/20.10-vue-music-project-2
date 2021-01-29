import Vue from 'vue'
// Fontawesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export

library.add(faHeart, faCopyright)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');