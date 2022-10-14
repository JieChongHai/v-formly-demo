import Vue from 'vue';
import App from './App';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VFormly from "v-formly";

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VFormly);


new Vue({
  render: h => h(App),
}).$mount('#app')
