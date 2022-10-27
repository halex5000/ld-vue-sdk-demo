<script setup>
import { ref } from "vue";

let items = ref([
  {
    color: "#A34FDE",
    icon: "mdi-rocket-launch",
    title: "Initialize LaunchDarkly client",
    description: "Setup the LaunchDarkly client with an SDK key",
  },
]);

const loading = true;
</script>

<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        max-width="40%"
        min-width="30%"
        elevated
        rounded="true"
        :loading="loading"
      >
        <v-progress-linear
          v-if="loading"
          class="position-absolute"
          style="z-index: 1"
          color="#A34FDE"
          height="10"
          indeterminate
        />
        <v-card-title class="white text--primary text-h5">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{ item.description }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
