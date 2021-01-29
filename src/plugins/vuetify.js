import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {};

export default new Vuetify(opts)

import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
render: h => h(App),
vuetify
}).$mount('#app');