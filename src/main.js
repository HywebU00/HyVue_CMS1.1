import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
// import "@/styles/utilities.scss"; // 再載入你自定義的 class
import "@/sass/settings.scss";
// import "vuetify/styles";
//chart
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

registerPlugins(app);

app.use(VueApexCharts).mount("#app");
