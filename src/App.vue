<script setup>
import TimeLine from "./components/Time-Line.vue";
import QRCode from "./components/QR-Code.vue";

import { useLDFlag } from "launchdarkly-vue-client-sdk";
import { store } from "./components/store";
import { watchEffect } from "vue";
import Login from "./components/Login.vue";

const qrCodeKey = "qr-code";
const loginKey = "login";

const qrCode = useLDFlag(qrCodeKey, false);
const login = useLDFlag(loginKey, false);

const baseBackgroundColor = "#282828";
const baseForegroundColor = "#FFFFFF";
const beyondTheBooleanKey = "beyond-the-boolean";
const targetingKey = "targeting";

const foreground = useLDFlag("qr-background-color", baseBackgroundColor);
const background = useLDFlag("qr-foreground-color", baseForegroundColor);

watchEffect(() => {
  if (qrCode.value) {
    store.completeItem(qrCodeKey);

    if (login.value) {
      store.completeItem(targetingKey);
    } else {
      store.uncompleteItem(targetingKey);
    }

    if (
      background.value === baseBackgroundColor ||
      foreground.value === baseForegroundColor
    ) {
      console.log("background color is at base");
      store.uncompleteItem(beyondTheBooleanKey);
    } else {
      store.completeItem(beyondTheBooleanKey);
    }
  } else {
    store.uncompleteItem(qrCodeKey);
    store.uncompleteItem(beyondTheBooleanKey);
    store.uncompleteItem(targetingKey);
    store.resetMission();
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
