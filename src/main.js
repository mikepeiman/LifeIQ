import VeeValidate from 'vee-validate';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VeeValidate);
  
  head.bodyAttrs = { class: 'app-dark-mode', id: 'custom-body-id' }
}

