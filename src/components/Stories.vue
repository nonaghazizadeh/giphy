<template>
  <div class="pb-5">
    <h6>Stories</h6>
    <stories-component></stories-component>
  </div>
</template>

<script>
import StoriesComponent from "./StoriesComponent.vue";
export default {
  components: { StoriesComponent },
  name: "Stories",
};
</script>

<style scoped>
h6 {
  text-align: left !important;
  font-weight: bold;
}
</style>