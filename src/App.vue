<script setup>
import TimeLine from "./components/Time-Line.vue";
import QRCode from "./components/QR-Code.vue";

import { useLDFlag } from "launchdarkly-vue-client-sdk";
import { store } from "./components/store";
import { watchEffect } from "vue";
const qrCode = useLDFlag("qr-code", false);
watchEffect(() => {
  if (qrCode.value) {
    store.completeItem("qr-code");
  }
});
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row no-gutters class="flex-nowrap">
          <v-col
            cols="1"
            style="min-width: 100px; max-width: 100%"
            class="flex-grow-1 flex-shrink-0"
          >
            <TimeLine class="mr-auto ma-2 pa-2" />
          </v-col>
          <v-col class="flex-grow-0 flex-shrink-0">
            <QRCode v-if="qrCode" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
