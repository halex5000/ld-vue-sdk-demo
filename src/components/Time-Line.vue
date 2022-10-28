<!-- eslint-disable vue/no-ref-as-operand -->
<script setup>
import { store } from "../components/store";
import { useLDReady, useLDFlag } from "launchdarkly-vue-client-sdk";
import { useTheme } from "vuetify";

const isLaunchDarklyReady = useLDReady();

if (isLaunchDarklyReady) {
  console.log("launch darkly is ready!");
  store.completeItem("initialize");
}

const theme = useTheme();

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");

const themeSwitcher = useLDFlag("theme-switcher", false);
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
          <v-card-subtitle v-if="milestone.isComplete">
            <v-icon
              class="ma-2"
              :color="milestone.color"
              icon="mdi-check"
            ></v-icon>
            Mission Accomplished
          </v-card-subtitle>
          <v-card-subtitle v-else>
            <v-icon
              class="ma-2"
              :color="milestone.color"
              icon="mdi-alert"
            ></v-icon>
            Incomplete
          </v-card-subtitle>
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
          <v-btn variant="tonal">
            {{ milestone.isComplete ? "Done" : "Hint" }}
            <v-tooltip activator="parent" location="bottom">{{
              milestone.hint
            }}</v-tooltip>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
    <v-timeline-item v-if="themeSwitcher" dot-color="#EBFF38" fill-dot>
      <template #icon>
        <v-icon icon="mdi-compare" variant="text" color="#282828"></v-icon>
      </template>
      <template #opposite>
        <v-card width="225">
          <v-card-subtitle>
            <v-icon class="ma-2" color="#EBFF38" icon="mdi-check"></v-icon>
            Mission Accomplished
          </v-card-subtitle>
        </v-card>
      </template>
      <v-card
        width="400"
        height="150"
        variant="tonal"
        rounded="true"
        color="#EBFF38"
      >
        <v-card-title class="text--light text-h5">
          Theme Switcher Unlocked!
        </v-card-title>
        <v-card-text class="text--primary">
          <p>You've unlocked the theme switcher!</p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" @click="toggleTheme">
            Switch Theme
            <v-tooltip activator="parent" location="right">
              Try switching the theme!
            </v-tooltip>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
