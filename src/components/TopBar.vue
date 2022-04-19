<template>
  <v-app-bar app fixed color="white" flat>
    <v-img src="" width="160px"></v-img>

    <v-spacer></v-spacer>

    <v-tabs v-model="$store.state.tab" centered color="grey darken-1">
      <v-tab v-for="(route, idx) in $router.getRoutes().filter((route) => !route.meta.hidden)" :key="idx" @click="routerReplace(route.path)">
        {{ route.name }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue {
  routerReplace(path: string) {
    if (this.$router.currentRoute.path === path) return; // 라우터 중복 검사

    this.$router.replace(path);
  }
}
</script>
