import "vuetify/styles"; // Global CSS has to be imported
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { LDPlugin } from "launchdarkly-vue-client-sdk";
import App from "./App.vue";

const app = createApp(App);

const clientSideID = import.meta.env.VITE_CLIENT_ID;

if (clientSideID) {
  app.use(LDPlugin, { clientSideID });
}

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});

app.use(vuetify);
app.mount("#app");
