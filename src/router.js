import index from './views/index.vue'
import hello from './components/Hello.vue'
import imgVue from './views/image.vue'

export default {
  routes: [
    {path: '/index', component: index},
    {path: '/hello', component: hello },
    {path: '/imgVue', component: imgVue },

  ]
}