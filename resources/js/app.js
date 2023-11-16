// import './bootstrap';

// // import Vue from 'vue'
// // import vue from '@vitejs/plugin-vue';

// // console.log('Current directory: ' + process.cwd());
// // import App from './vue/app.vue'

// // const app = new vue.Vue({
// //     el: '#app',
// //     components: {App}
// // });

// import {createApp} from "vue/dist/vue.esm-bundler.js";
// // import Example from "./components/Example.vue";
// import App from "./vue/app.vue"
// // import Vue from '@vitejs/plugin-vue/vue'
// // import vue from '@vitejs/plugin-vue';
// import Vue from 'vue'


// import {library} from "@fortawesome/fontawesome-svg-core";
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
// import {faPlusSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

// library.add(faPlusSquare, faTrash);

// Vue.component('font-awesome-icon', FontAwesomeIcon)


// const app = createApp({
//     components: {
// 	// Example,
//     App,
//     },
// });

// app.mount("#app");


import './bootstrap';

import { createApp } from 'vue';
import App from "./vue/app.vue"

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusSquare, faTrash);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");