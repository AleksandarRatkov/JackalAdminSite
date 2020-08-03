<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.salesdashboard')" />
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
      <b-colxx xl="12" lg="12" class="mb-4">
        <calendar></calendar>
      </b-colxx>
     </b-row>
  </div>
</template>

<script>

import Calendar from "../../../containers/sales-dashboard/Calendar";
import IconCardsCarousel from "../../../containers/sales-dashboard/IconCardsCarousel";
import ProductCategoriesDoughnut from "../../../containers/sales-dashboard/Activity-by-type-Doughnut";
import ProfileStatuses from "../../../containers/sales-dashboard/ProfileStatuses";

export default {
  components: {
    calendar: Calendar,
    "icon-cards-carousel": IconCardsCarousel,
    "product-categories-doughnut": ProductCategoriesDoughnut,
    "profile-statuses": ProfileStatuses,
  },
};

</script>
