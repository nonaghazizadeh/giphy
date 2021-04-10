<template>
  <div>
    <h6 class="pt-3">
      Artists
    </h6>
    <artist-carousel>
    </artist-carousel>
  </div>
</template>

<script>
import ArtistCarousel from './ArtistCarousel.vue'
export default {
  components: { ArtistCarousel },
  name: 'Artists',
}
</script>

<style scoped>
h6{
  text-align: left !important;
    font-weight: bold;
}

</style>
