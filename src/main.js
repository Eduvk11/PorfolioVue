import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import LastArticle from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import MiComponente from './components/MiComponente.vue'
import Peliculas from './components/Peliculas.vue'



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {path: '/', component: LastArticle},
  {path: '/home', component: LastArticle},
  {path: '/ultimos-articulos', component: LastArticle},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/pagina/:id?', name:'pagina', component: Pagina},
  {path: '/peliculas', name:'peliculas', component: Peliculas},
  {path: '/mi-componente', component: MiComponente},
  {path: '*', component: ErrorComponent},
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
