<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="search in searchedList.slice(0, 12)"
            :key="search"
            :src="search"
            @click="pin(search)"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="search in searchedList.slice(12, 24)"
            :key="search"
            :src="search"
            @click="pin(search)"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="search in searchedList.slice(24, 36)"
            :key="search"
            :src="search"
            @click="pin(search)"
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
const STORAGE_KEY = "pinned-storage";
export default {
  name: "Searched",
  props: ["searchInput"],
  data() {
    return {
      searchedList: [],
      pinnedList: [],
      storage: "",
      storageList: [],
    };
  },
  watch: {
    searchInput: {
      handler(newValue) {
        let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
        let searchStr = newValue;
        let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=36&q=${searchStr}`;
        Vue.axios.get(sourceURL).then((response) => {
          for (let i = 0; i < response.data.data.length; i++) {
            this.searchedList.push(response.data.data[i].images.original.url);
          }
        });
      },
    },
  },
  methods: {
    pin(pinnedURL) {
      this.pinnedList.push(pinnedURL);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.pinnedList));
    },
  },
  mounted() {
    let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
    let searchStr = this.searchInput;
    let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=36&q=${searchStr}`;
    Vue.axios.get(sourceURL).then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        this.searchedList.push(response.data.data[i].images.original.url);
      }
    });
    this.storage = localStorage.getItem(STORAGE_KEY);
    if (this.storage !== null) {
      this.storage = this.storage.slice(1).slice(0, -1);
      this.storageList = this.storage.split(",");
      for (let index = 0; index < this.storageList.length; index++) {
        this.pinnedList.push(this.storageList[index].slice(1).slice(0, -1));
      }
    }
  },
};
</script>

<style scoped>
.col {
  text-align: center;
}
</style>