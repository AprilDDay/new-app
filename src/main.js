import Vue from 'vue'
import App from './App.vue'
//import Hover from './components/Hover.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//Vue.createApp(AttributeBinding).mount('#bind-attribute')