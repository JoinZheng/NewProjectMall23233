import App from './App'
import Vant from  'vant';

// #ifndef VUE3
import Vue from 'vue'
// import 'vant/lib/index.css';
// import 'vant/es/toast/style'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Vant)
  return {
    app
  }
}
// #endif