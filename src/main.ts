import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUsers, faChartLine, faClipboardCheck, faCubes, faSlidersH, faTasks, faPeopleArrows, faParachuteBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// <i class="fas fa-people-arrows"></i>
library.add(faHome, faUsers, faChartLine, faClipboardCheck, faCubes, faSlidersH, faTasks, faPeopleArrows, faParachuteBox);

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
