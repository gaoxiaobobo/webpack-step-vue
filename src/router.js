import index from './views/index.vue'
import hello from './components/Hello.vue'
export default {
  routes: [
    {path: '/index', component: index},
    { path: '/hello', component: hello }

  ]
}