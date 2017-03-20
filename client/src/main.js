// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import VueTinymce from 'vue-tinymce';
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueMomentJS, moment);
Vue.use(VueTinymce);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
