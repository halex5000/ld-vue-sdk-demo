<script setup>
import TimeLine from "./components/Time-Line.vue";
import QRCode from "./components/QR-Code.vue";

import { useLDFlag } from "launchdarkly-vue-client-sdk";
import { store } from "./components/store";
import { watchEffect } from "vue";
import Login from "./components/Login.vue";
const qrCode = useLDFlag("qr-code", false);
const login = useLDFlag("login", false);
const foreground = useLDFlag("qr-background-color", "#FFFFFF");
const background = useLDFlag("qr-foreground-color", "#282828");

watchEffect(() => {
  if (qrCode.value) {
    store.completeItem("qr-code");
  }

  if (login.value) {
    store.completeItem("login");
  }

  if (foreground.value && background.value) {
    store.completeItem("beyond-the-boolean");
  }
});
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row no-gutters class="flex-nowrap">
          <v-navigation-drawer permanent location="left">
            <Login v-if="login" />
          </v-navigation-drawer>
          <v-col
            cols="1"
            style="min-width: 100px; max-width: 100%"
            class="flex-grow-1 flex-shrink-0"
          >
            <TimeLine />
          </v-col>
          <v-navigation-drawer permanent location="right">
            <QRCode
              v-if="qrCode"
              :background="background"
              :foreground="foreground"
            />
          </v-navigation-drawer>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
