import index from './views/index.vue'
import hello from './components/Hello.vue'
import imgVue from './views/image.vue'
import hello2 from './components2/Hello2.vue'

export default {
  routes: [
    {path: '/index', component: index},
    {path: '/hello', component: hello },
    {path: '/imgVue', component: imgVue },
    {path: '/hello2', component: hello2 },

  ]
}