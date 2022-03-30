import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios';
// Vue.prototype.$axios = axios;'
// import VueMatomo from 'vue-matomo'
// Vue.use(VueMatomo, {
//   host: 'https://matomo.site.youdao.com/',
//   siteId: '3', // siteId值
//   // 根据router自动注册,需要注意的是如果有路由传值值太长的话会matomo会监听不到并报414，就不能使用此方法了
//   //  router: router,
//   // 是否需要在发送追踪信息之前请求许可
//   // 默认false
//   requireConsent: false,
//   enableLinkTracking: true,
//   // 是否追踪初始页面
//   // 默认true
//   trackInitialView: false,
//   // 最终的追踪js文件名，因为我这边的matomo版本比较老，所以使用的是piwik，现在版本新的话此值应该为matomo
//   trackerFileName: 'matomo',
//   debug: true
// })
import ajaxHeader from './zhima/index.js'
Vue.use(ajaxHeader)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
