<template>
  <div></div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "Searched",
  props: ["searchInput"],
  data(){
      return{
          searchedList:[]
      }
  },
  mounted() {
    let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
    let searchStr = this.searchInput;
    let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${searchStr}`;
    Vue.axios.get(sourceURL).then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        this.searchedList.push(response.data.data[i].images.original.url);
      }
    });
    console.log(this.searchedList)

  },
};
</script>

<style scoped>
@media (min-width: 576px) {
  .card-deck .card {
    margin-right: 0;
    margin-left: 5px;
  }
  .card-deck {
    height: 200px;
  }
}
.card {
  border: 1px solid black;
}
img {
  height: 100%;
  position: absolute;
}
</style>