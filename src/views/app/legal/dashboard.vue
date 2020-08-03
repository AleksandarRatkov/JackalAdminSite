<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.dashboard')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="8" lg="12">
        <div class="icon-cards-row">
          <icon-cards-carousel></icon-cards-carousel>
        </div>
        <b-row>
          <b-colxx md="12" class="mb-4">
            <profile-statuses></profile-statuses>
          </b-colxx>
        </b-row>
      </b-colxx>
      <b-colxx lg="4" md="12" class="mb-4">
        <product-categories-doughnut></product-categories-doughnut>
      </b-colxx>
    </b-row>
    <b-row></b-row>
    <b-row>
      <b-colxx xl="6" lg="12" class="mb-4">
        <calendar></calendar>
      </b-colxx>
      <b-colxx xl="6" lg="12" class="mb-4">
        <best-sellers :title="$t('dashboards.todo-list')"></best-sellers>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import BestSellers from "../../../containers/legal-dashboard/BestSellers";
import Calendar from "../../../containers/legal-dashboard/Calendar";
import IconCardsCarousel from "../../../containers/legal-dashboard/IconCardsCarousel";
import ProductCategoriesDoughnut from "../../../containers/legal-dashboard/Case-by-Court-Doughnut";
import ProfileStatuses from "../../../containers/legal-dashboard/ProfileStatuses";

export default {
  components: {
    "best-sellers": BestSellers,
    calendar: Calendar,
    "icon-cards-carousel": IconCardsCarousel,
    "product-categories-doughnut": ProductCategoriesDoughnut,
    "profile-statuses": ProfileStatuses,
  },
};
</script>
