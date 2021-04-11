<template>
  <div class="mb-5">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <b-card-group deck>
            <b-card
              v-for="source in artistsSources.slice(0, 4)"
              :key="source"
              :img-src="source"
            ></b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <b-card-group deck>
            <b-card
              v-for="source in artistsSources.slice(4, 8)"
              :key="source"
              :img-src="source"
            ></b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <b-card-group deck>
            <b-card
              v-for="source in artistsSources.slice(8, 12)"
              :key="source"
              :img-src="source"
            ></b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      artistsSources: [],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  mounted() {
    let APIKEY = "SJNLdIKsz1131URk7ADVxs7gKcKTRW6z";
    let artistStr = "artists";
    let sourceURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${artistStr}`;
    Vue.axios.get(sourceURL).then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        this.artistsSources.push(response.data.data[i].images.original.url);
      }
    });
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
    height: 320px;
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