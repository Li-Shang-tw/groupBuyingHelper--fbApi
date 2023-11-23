import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "/formkit.config";
import App from "./App.vue";

//import其他套件
import axios from "axios";

const app = createApp(App);

app.use(createPinia());
app.use(plugin, defaultConfig(config));

app.mount("#app");
