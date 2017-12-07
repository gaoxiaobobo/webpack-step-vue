// const Vue = require('vue')
// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!2'
//   }
// })

import Vue  from 'vue'
import Hello from './components/Hello.vue'
import Hello2 from './components2/Hello2.vue'

new Vue({
  el: '#app',
  template: '<div><hello></hello><Hello2></Hello2></div>',
  components: {Hello,Hello2}
})