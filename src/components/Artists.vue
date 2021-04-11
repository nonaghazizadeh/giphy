<template>
  <div>
    <h4 class="pt-3"><font-awesome-icon :icon="['fas', 'bolt']" /><span>Artists</span></h4>
    <artist-carousel> </artist-carousel>
  </div>
</template>

<script>
import ArtistCarousel from "./ArtistCarousel.vue";
export default {
  components: { ArtistCarousel },
  name: "Artists",
};
</script>

<style scoped>
h4{
  text-align: left !important;
  font-weight: bold;
}
span{
  margin-left: 15px;
}
svg{
  color: rgb(252, 134, 154);
}
</style>
