import VeeValidate from 'vee-validate';
import DefaultLayout from '~/layouts/Default.vue';


export default function (Vue) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VeeValidate);
}
