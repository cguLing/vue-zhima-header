import zhimaHeader from './src/header/index.vue'
let ajaxHeader = {}
ajaxHeader.install = function (Vue) {
//   Vue.prototype.$msg = 'Hello I am test.js'
//   Vue.prototype.$myMethod = function (arr) {
//     if (arr.length < 0) {
//       return false
//     } else {
//       arr = arr.join('连接你我')
//       return arr
//     }
//   }
  Vue.component(zhimaHeader.name, zhimaHeader) // testPanel.name 组件的name属性
}
export default ajaxHeader