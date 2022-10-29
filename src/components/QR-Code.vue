<!-- eslint-disable vue/require-default-prop -->
<script setup>
import QrcodeVue from "qrcode.vue";

const size = 200;
const value = window.location.href;

defineProps({
  foreground: String,
  background: String,
});
</script>

<template>
  <v-sheet class="elevation-24" rounded min-width="200">
    <v-img class="px-7 py-6">
      <qrcode-vue
        v-if="value"
        :value="value"
        :size="size"
        :foreground="foreground"
        :background="background"
      />
    </v-img>
  </v-sheet>
</template>
