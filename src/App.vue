<template>
  <v-app>
    <v-layout>
      <Sidebar />
      <v-layout column>
        <!-- <Topbar /> -->
        <v-main class="grey lighten-3">
          <router-view class="grey lighten-3" />
        </v-main>
      </v-layout>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Topbar from '@/components/Topbar.vue';
import Sidebar from '@/components/Sidebar.vue';

@Component({ components: { Sidebar, Topbar } })
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  word-break: break-word;
}
</style>
