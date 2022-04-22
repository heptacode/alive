<template>
  <v-navigation-drawer app fixed color="#3B3E66" dark flat permanent>
    <v-list-item>
      <v-list-item-content>
        <v-img src="alive-logo.svg" max-width="150"></v-img>
        <v-list-item-subtitle class="mt-1">A live map of Alive</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="(route, index) in $router.getRoutes().filter((route) => !route.meta.hidden)" :key="index" link>
        <v-list-item-icon>
          <v-icon>{{ route.meta.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content @click="routerPush(route.path)">
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  routerPush(path: string) {
    if (path === '/' && this.$router.currentRoute.path === path) return; // 라우터 중복 검사

    this.$router.push(path || '/');
  }
}
</script>
