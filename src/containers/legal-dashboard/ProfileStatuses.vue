<template>
  <b-card :title="$t('dashboards.cases-by-lawoffice')">
    <div v-for="(s,index) in casesByLawOffice" :key="index" class="mb-4">
      <p class="mb-2">
        {{ s.title }}
        <span class="float-right text-muted">{{s.status}}/{{s.total}}</span>
      </p>
      <b-progress :value="(s.status / s.total) * 100"></b-progress>
    </div>
  </b-card>
</template>
<script>
import casesByLawOffice from "../../data/casesByLawoffice";

export default {
  data() {
    return {
      casesByLawOffice
    };
  }
};
</script>
