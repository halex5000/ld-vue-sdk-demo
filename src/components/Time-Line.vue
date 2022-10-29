<!-- eslint-disable vue/no-ref-as-operand -->
<script setup>
import { store } from "../components/store";
import { useLDReady } from "launchdarkly-vue-client-sdk";
import { useTheme } from "vuetify";
import { useLDFlag } from "launchdarkly-vue-client-sdk";

const isLaunchDarklyReady = useLDReady();

if (isLaunchDarklyReady) {
  console.log("launch darkly is ready!");
  store.completeItem("initialize");
}

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  store.completeMission();
};

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
        <v-card width="250">
          <v-card-subtitle v-if="milestone.isComplete">
            <v-btn class="ma-2 elevation-24" :color="milestone.color" icon>
              <v-icon icon="mdi-check" color="#282828"></v-icon
            ></v-btn>
            Mission Accomplished
          </v-card-subtitle>
          <v-card-subtitle v-else>
            <v-btn
              class="ma-2 elevation-24"
              :color="milestone.color"
              icon="mdi-alert"
            ></v-btn>
            Incomplete
          </v-card-subtitle>
        </v-card>
      </template>
      <v-card width="540" height="150" variant="elevated">
        <v-card-title class="text--light text-h5">
          {{ milestone.title }}
        </v-card-title>
        <v-card-text class="text--primary" width="100%">
          <p>{{ milestone.description }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="outlined" :color="milestone.color">
            {{ milestone.isComplete ? "Done" : "Hint" }}
            <v-tooltip activator="parent" location="right">{{
              milestone.isComplete
                ? "Congratulations, you did it!!"
                : milestone.hint
            }}</v-tooltip>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
    <v-timeline-item dot-color="#EBFF38" fill-dot>
      <template #icon>
        <v-icon icon="mdi-compare" variant="text" color="#282828"></v-icon>
      </template>
      <template #opposite>
        <v-card width="250">
          <v-card-subtitle v-if="store.missionComplete">
            <v-btn class="ma-2 elevation-24" color="#EBFF38" icon
              ><v-icon color="#282828" icon="mdi-check"></v-icon
            ></v-btn>
            Mission Accomplished
          </v-card-subtitle>
          <v-card-subtitle v-else>
            <v-btn class="ma-2 elevation-24" color="#EBFF38" icon
              ><v-icon class="ma-2" color="#282828" icon="mdi-alert"></v-icon
            ></v-btn>

            Incomplete
          </v-card-subtitle>
        </v-card>
      </template>
      <v-card v-if="themeSwitcher" width="500" height="150" variant="elevated">
        <v-card-title class="text-h5"> Theme Switcher Unlocked! </v-card-title>
        <v-card-text class="text--primary">
          <p>You've unlocked the theme switcher!</p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="outlined" @click="toggleTheme">
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
