<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useLDClient } from "launchdarkly-vue-client-sdk";
import { store } from "./store";
import { ref } from "vue";

const username = ref("");

const launchDarklyClient = useLDClient();

const login = () => {
  console.log("username is ", username.value);
  launchDarklyClient.identify({
    key: username.value,
  });
  store.setActiveUser(username.value);
};

const logout = () => {
  launchDarklyClient.identify({
    anonymous: true,
  });
  store.resetActiveUser();
  username.value = null;
};
</script>

<template>
  <v-sheet class="bg-deep-purple" rounded min-width="200">
    <v-banner
      v-if="store.username"
      size="x-large"
      color="primary"
      class="elevation-24"
    >
      <v-banner-text>
        <v-avatar color="primary" size="x-large"
          ><v-icon icon="mdi-account"></v-icon>
        </v-avatar>
        <span class="ml-10">{{ store.username }}</span></v-banner-text
      >
      <v-banner-actions>
        <v-btn
          v-if="store.username"
          block
          color="primary"
          size="large"
          variant="elevated"
          @click="logout"
        >
          Sign Out
        </v-btn>
      </v-banner-actions>
    </v-banner>

    <v-card v-if="!store.username" class="px-4 py-4 elevation-24">
      <v-text-field
        v-model="username"
        class="mb-2"
        label="Username"
      ></v-text-field>
      <v-btn
        block
        color="primary"
        size="large"
        variant="elevated"
        @click="login"
      >
        Sign In
      </v-btn>
    </v-card>
  </v-sheet>
</template>
