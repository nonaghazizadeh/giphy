<template>
  <div class="pb-5">
    <h4>
      <font-awesome-icon :icon="['fas', 'tv']" /><span>Stories</span>
    </h4>

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
h4 {
  text-align: left !important;
  font-weight: bold;
}
span{
  margin-left: 15px;
}
svg{color: indigo;}
</style>