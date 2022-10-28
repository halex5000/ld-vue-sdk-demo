<!-- eslint-disable vue/no-ref-as-operand -->
<script setup>
import { store } from "../components/store";
import { useLDReady } from "launchdarkly-vue-client-sdk";

const isLaunchDarklyReady = useLDReady();

if (isLaunchDarklyReady) {
  console.log("launch darkly is ready!");
  store.completeItem("initialize");
}
</script>

<template>
  <v-timeline align="start" style="color: white">
    <v-timeline-item
      v-for="(milestone, i) in store.milestones"
      :key="i"
      :dot-color="milestone.color"
      :icon="milestone.icon"
      fill-dot
    >
      <template #opposite>
        <v-card width="225">
          <v-card-text v-if="milestone.isComplete">
            <v-icon
              class="ma-2"
              :color="milestone.color"
              icon="mdi-check"
            ></v-icon>
            Mission Accomplished
          </v-card-text>
          <v-card-text v-else>
            <v-icon
              class="ma-2"
              :color="milestone.color"
              icon="mdi-alert"
            ></v-icon>
            Incomplete
          </v-card-text>
          <v-card v-if="milestone.isComplete && milestone.key === 'qr-code'">
            <v-card-text>
              <qrcode-vue
                :value="value"
                :size="size"
                :foreground="foreground"
                :background="background"
              />
            </v-card-text>
          </v-card>
        </v-card>
      </template>
      <v-card
        width="400"
        height="150"
        variant="tonal"
        rounded="true"
        :color="milestone.color"
      >
        <v-card-title class="text--light text-h5">
          {{ milestone.title }}
        </v-card-title>
        <v-card-text class="text--primary">
          <p>{{ milestone.description }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="outlined">
            Hint
            <v-tooltip activator="parent" location="bottom">{{
              milestone.hint
            }}</v-tooltip>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
