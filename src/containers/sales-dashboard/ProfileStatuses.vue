<template>
  <b-card :title="$t('dashboards.sales-by-stage')">
    <div v-for="(s,index) in salesByStage" :key="index" class="mb-4">
      <p class="mb-2">
        {{ s.title }}
        <span class="float-right text-muted">{{s.status}}/{{s.total}}</span>
      </p>
      <b-progress :value="(s.status / s.total) * 100"></b-progress>
    </div>
  </b-card>
</template>
<script>
import salesByStage from "../../data/salesByStage";

export default {
  data() {
    return {
      salesByStage
    };
  }
};
</script>
