import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "/formkit.config";
import App from "./App.vue";

//------font-awesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faCircleUp, faCircleDown);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(plugin, defaultConfig(config));

app.mount("#app");
