import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios';
// Vue.prototype.$axios = axios;
import ajaxHeader from './zhima/index.js'
Vue.use(ajaxHeader)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
