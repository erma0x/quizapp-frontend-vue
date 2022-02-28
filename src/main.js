//import 'bootstrap/dist/css/bootstrap.css'  
//import 'bootstrap-vue/dist/bootstrap-vue.css' 

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
