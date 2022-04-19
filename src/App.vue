<template>
  <v-app>
    <TopBar />
    <v-main class="grey lighten-3">
      <router-view class="grey lighten-3" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TopBar from '@/components/TopBar.vue';

@Component({ components: { TopBar } })
export default class App extends Vue {}
</script>

<style>
* {
  word-break: break-word;
}
</style>
