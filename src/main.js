import { createApp } from "vue";
import App from "./App.vue";
import { SimpleTestPlugin } from "@/SimpleTestPlugin";

const app = createApp(App);

app.use(SimpleTestPlugin);
app.mount("#app");