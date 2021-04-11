<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in foodSources.slice(0, 12)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in foodSources.slice(12, 24)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in foodSources.slice(24, 36)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "Foods",
  data() {
    return {
      foodSources: [],
    };
  },
  mounted() {
    let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
    let foodsStr = "foods";
    let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=36&q=${foodsStr}`;
    Vue.axios.get(sourceURL).then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        this.foodSources.push(response.data.data[i].images.original.url);
      }
    });
  },
};
</script>
<style scoped>
.col {
  text-align: center;
}
</style>