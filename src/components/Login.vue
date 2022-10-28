<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { useLDClient } from "launchdarkly-vue-client-sdk";
import { store } from "./store";
import { ref } from "vue";

let username = ref(null);

// const launchDarklyClient = useLDClient();

const login = () => {
  console.log("username is ", username);
};
</script>

<template>
  <v-sheet class="bg-deep-purple" rounded min-width="200">
    <v-card class="px-4 py-4">
      <v-text-field
        v-if="!store.username"
        v-model="username"
        class="mb-2"
        label="Username"
      ></v-text-field>

      <v-chip v-if="store.username" class="ma-2" color="primary" label>
        <v-icon start icon="mdi-account-circle-outline"></v-icon>
        {{ username }}
      </v-chip>

      <br />

      <v-btn
        v-if="!store.username"
        block
        class="elevation-24"
        color="primary"
        size="large"
        type="submit"
        variant="elevated"
        @click="login"
      >
        Sign In
      </v-btn>

      <v-btn
        v-if="store.username"
        block
        class="elevation-24"
        color="primary"
        size="large"
        type="submit"
        variant="elevated"
        @click="logout"
      >
        Sign Out
      </v-btn>
    </v-card>
  </v-sheet>
</template>
