<template>
  <div class="home">
    <searched :afterClick="input"></searched>
  </div>
</template>

<script>
import Searched from "../components/Searched.vue";

export default {
  name: "Saerch",
  props: ["input"],
  components: {
    Searched,
  },
};
</script>