import { createApp } from 'vue'
import '../src/index.css'
import router from './router/router.js'


import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
