<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in storiesSources.slice(0, 12)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in storiesSources.slice(12, 24)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in storiesSources.slice(24, 36)"
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
  name: "StoriesComponents",
  data() {
    return {
      storiesSources: [],
    };
  },
  mounted() {
    let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
    let storiesStr = "stories";
    let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=36&q=${storiesStr}`;
    Vue.axios.get(sourceURL).then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        this.storiesSources.push(response.data.data[i].images.original.url);
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