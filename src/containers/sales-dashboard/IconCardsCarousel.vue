<template>
  <div class="icon-cards-row">
    <glide-component :settings="glideIconsOption">
      <icon-card :title="$t('dashboards.new-rent-requests')" icon="iconsminds-clock" :value="5" />
      <icon-card :title="$t('dashboards.new-sales-requests')" icon="iconsminds-basket-coins" :value="7" />
      <icon-card :title="$t('dashboards.units-in-market')" icon="iconsminds-arrow-refresh" :value="23" />
      <icon-card :title="$t('dashboards.showings-thismonth')" icon="iconsminds-mail-read" :value="8" />
    </glide-component>
  </div>
</template>
<script>
import GlideComponent from "../../components/Carousel/GlideComponent";
import IconCard from "../../components/Cards/IconCard";

export default {
  components: {
    "glide-component": GlideComponent,
    "icon-card": IconCard,
  },
  data() {
    return {
      glideIconsOption: {
        gap: 5,
        perView: 4,
        type: "carousel",
        breakpoints: {
          320: {
            perView: 1,
          },
          576: {
            perView: 2,
          },
          1600: {
            perView: 3,
          },
          1800: {
            perView: 4,
          },
        },
        hideNav: true,
      },
    };
  },
};
</script>
