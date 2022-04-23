<template>
  <v-app>
    <v-container>
      <v-select :items="warDatasets.map((data) => data.name)" label="Location" v-model="name"></v-select>

      <v-layout justify-space-around class="mt-4 mb-10">
        <v-card class="rounded-lg" style="border-bottom: 5px solid #fbdf81">
          <v-card-title>
            <v-icon class="mr-2">{{ mdiCalendarToday }}</v-icon>
            Today Deaths
          </v-card-title>
          <v-card-text class="text-h5">{{ warDatasets[getDataIndex].todayDeaths }} </v-card-text>
        </v-card>

        <v-card class="rounded-lg" style="border-bottom: 5px solid #f4772f">
          <v-card-title>
            <v-icon class="mr-2">{{ mdiCalendarWeek }}</v-icon>
            Weekly Deaths
          </v-card-title>
          <v-card-text class="text-h5">{{ warDatasets[getDataIndex].weeklyDeaths }}</v-card-text>
        </v-card>

        <v-card class="rounded-lg" style="border-bottom: 5px solid #f83145">
          <v-card-title class="mr-2">
            <v-icon>{{ mdiCalendarMonth }}</v-icon>
            Total Deaths
          </v-card-title>
          <v-card-text class="text-h5">{{ warDatasets[getDataIndex].totalDeaths }} </v-card-text>
        </v-card>
      </v-layout>

      <LineChart :chartData="warDatasets[getDataIndex]" :height="200" />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LineChart from '@/components/charts/LineChart';
import { warDatasets, WarDataset } from '@/store/dummyData';
import { mdiCalendarToday, mdiCalendarWeek, mdiCalendarMonth } from '@mdi/js';

@Component({ components: { LineChart } })
export default class War extends Vue {
  warDatasets: WarDataset[] = warDatasets;
  mdiCalendarToday: string = mdiCalendarToday;
  mdiCalendarWeek: string = mdiCalendarWeek;
  mdiCalendarMonth: string = mdiCalendarMonth;

  name: string = warDatasets.map((data) => data.name)[0];

  get getDataIndex(): number {
    return warDatasets.findIndex((data) => data.name === this.name);
  }
}
</script>
