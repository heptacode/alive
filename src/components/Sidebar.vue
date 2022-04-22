<template>
  <v-navigation-drawer app fixed color="#3B3E66" dark flat permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="(route, index) in $router.getRoutes().filter((route) => !route.meta.hidden)" :key="index" link>
        <v-list-item-icon>
          <!-- <v-icon>{{ route.icon }}</v-icon> -->
        </v-list-item-icon>

        <v-list-item-content @click="routerReplace(route.path)">
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- <v-tabs v-model="$store.state.tab" centered color="grey darken-1">
      <v-tab v-for="(route, idx) in $router.getRoutes().filter((route) => !route.meta.hidden)" :key="idx" @click="routerReplace(route.path)">
        {{ route.name }}
      </v-tab>
    </v-tabs> -->
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  routerReplace(path: string) {
    if (this.$router.currentRoute.path === path) return; // 라우터 중복 검사

    this.$router.replace(path);
  }
}
</script>
