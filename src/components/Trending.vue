<template>
  <div>
    <h4>
      <font-awesome-icon :icon="['fas', 'chart-line']" /><span>Trending</span>
    </h4>
    <trending-carousel> </trending-carousel>
  </div>
</template>

<script>
import TrendingCarousel from "./TrendingCarousel.vue";
export default {
  components: { TrendingCarousel },
  name: "Trending",
};
</script>

<style scoped>
h4 {
  text-align: left !important;
  font-weight: bold;
}
span {
  margin-left: 15px;
}
svg {
  color: rgb(86, 86, 250);
}
</style>
