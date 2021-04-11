<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in searchedList.slice(0, 15)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in searchedList.slice(15, 30)"
            :key="source"
            :src="source"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="source in searchedList.slice(30, 45)"
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
  name: "Searched",
  props: ["searchInput"],
  data() {
    return {
      searchedList: [],
    };
  },
  watch: {
    searchInput: {
      handler(newValue) {
        let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
        let searchStr = newValue;
        let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=45&q=${searchStr}`;
        Vue.axios.get(sourceURL).then((response) => {
          for (let i = 0; i < response.data.data.length; i++) {
            this.searchedList.push(response.data.data[i].images.original.url);
          }
        });
        console.log(this.searchedList);
      },
    },
  },
  mounted() {
    let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
    let searchStr = this.searchInput;
    let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=45&q=${searchStr}`;
    Vue.axios.get(sourceURL).then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        this.searchedList.push(response.data.data[i].images.original.url);
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