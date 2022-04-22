<template>
  <v-app>
    <!-- <LineChart :chartData="datasets." /> -->
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LineChart from '@/components/charts/LineChart';
import { datasets } from '@/store/dummyData';

@Component({ components: { LineChart } })
export default class War extends Vue {
  datasets: any = datasets;
}
</script>
