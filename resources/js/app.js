import './bootstrap';

// import Vue from 'vue'
// import vue from '@vitejs/plugin-vue';

// console.log('Current directory: ' + process.cwd());
// import App from './vue/app.vue'

// const app = new vue.Vue({
//     el: '#app',
//     components: {App}
// });

import {createApp} from "vue/dist/vue.esm-bundler.js";
import Example from "./components/Example.vue";

const app = createApp({
    components: {
	Example,
    },
});

app.mount("#app");
