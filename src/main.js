import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import App from "./App.vue";

const app = createApp(App);
const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
}); // Replaces new Vuetify()

app.use(vuetify);
app.mount("#app");
