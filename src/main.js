import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import couleurOnClick from './directives/couleurOnClick'

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.directive('couleur-on-click', couleurOnClick)
.mount('#app')
