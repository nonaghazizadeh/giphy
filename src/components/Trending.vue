<template>
  <div>
    <h6>
      Trending
    </h6>
    <trending-carousel>
    </trending-carousel>
  </div>
  
</template>

<script>
import TrendingCarousel from './TrendingCarousel.vue'
export default {
  components: { TrendingCarousel },
  name: 'Trending',
}
</script>

<style scoped>
h6{
  text-align: left !important;
    font-weight: bold;
}

</style>
