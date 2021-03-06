import { Component, Prop, Vue } from 'vue-property-decorator';
import { Line, mixins } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  extends: Line,
  mixins: [mixins.reactiveProp],
})
export default class LineChart extends Vue {
  @Prop() chartData!: ChartData;
  @Prop() chartOptions?: ChartOptions;

  renderChart!: (chartData: ChartData, options?: ChartOptions) => void;

  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
}
