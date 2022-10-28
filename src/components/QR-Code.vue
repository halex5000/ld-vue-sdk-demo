<script setup>
import { useLDFlag } from "launchdarkly-vue-client-sdk";
import QrcodeVue from "qrcode.vue";

const size = 200;
const value = window.location.href;
const foreground = useLDFlag("qr-background-color", "#FFFFFF");
const background = useLDFlag("qr-foreground-color", "#282828");
</script>

<template>
  <v-img class="ma-2 pa-2 elevation-24">
    <qrcode-vue
      v-if="value"
      :value="value"
      :size="size"
      :foreground="foreground"
      :background="background"
    />
  </v-img>
</template>
