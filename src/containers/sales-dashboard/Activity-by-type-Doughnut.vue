<template>
  <b-card class="h-100" :title="$t('dashboards.case-by-court')">
    <div class="dashboard-donut-chart">
      <doughnut-chart :data="salesChartData" shadow />
    </div>
  </b-card>
</template>
<script>
import DoughnutChart from "../../components/Charts/Doughnut";
import { salesChartData } from "../../data/charts";

export default {
  components: {
    "doughnut-chart": DoughnutChart
  },
  data() {
    return {
      salesChartData
    };
  }
};
</script>
