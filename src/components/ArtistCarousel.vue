<template>
  <div>
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
        <b-card img-src="https://picsum.photos/1024/480/?image=52" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=54" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=58" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=52" overlay></b-card>
      </b-card-group>
    </template>
    </b-carousel-slide>
    <b-carousel-slide>
    <template v-slot:img>
      <b-card-group deck>
        <b-card img-src="https://picsum.photos/1024/480/?image=52" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=54" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=58" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=52" overlay></b-card>
      </b-card-group>
    </template>
    </b-carousel-slide>
    <b-carousel-slide>
    <template v-slot:img>
      <b-card-group deck>
        <b-card img-src="https://picsum.photos/1024/480/?image=52" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=54" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=58" overlay></b-card>
        <b-card img-src="https://picsum.photos/1024/480/?image=52" overlay></b-card>
      </b-card-group>
    </template>
    </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
@media (min-width: 576px) {
  .card-deck .card{
    margin-right:0;
    margin-left: 5px
    }
}
.card{
  border: 1px solid black
}
</style>