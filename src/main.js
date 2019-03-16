import Vue from "vue";
import vueChatScroll from 'vue-chat-scroll';
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(vueChatScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
