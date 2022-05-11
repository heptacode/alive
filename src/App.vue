<template>
  <v-app>
    <Sidebar />
    <v-layout>
      <div style="min-width: 56px"></div>
      <router-view style="width: 100%" />
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import useRegisterSW from '@/mixins/useRegisterSW';
import Sidebar from '@/components/Sidebar.vue';

@Component({
  components: { Sidebar },
  mixins: [useRegisterSW],
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  word-break: break-word;
}
</style>
