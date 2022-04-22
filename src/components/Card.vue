<template>
  <v-card class="pa-2 rounded-lg" elevation="1">
    <v-container>
      <v-card-title v-if="title">
        <h4>{{ title }}</h4>
      </v-card-title>
      <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
      <slot />
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop() title?: string;
  @Prop() subtitle?: string;
}
</script>
