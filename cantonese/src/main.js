import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'
import "./Layout/index.css";
import "./style/list-body.css";

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
