<template>
  <div id="app">
    <b-container>
      <div id="nav" class="pt-3">
        <router-link to="/" class="brand">GIPHY</router-link>
        <router-link to="/sport">Sports</router-link>
        <router-link to="/food">Foods</router-link>
        <router-link to="/pin">Pinned</router-link>
      </div>
      <div class="pb-3 pt-3">
        <b-input-group class="mt-3">
          <template #append>
            <b-input-group-text @click="search()"
              ><router-link to="/search" class="search"
                ><font-awesome-icon :icon="['fas', 'search']" /></router-link
            ></b-input-group-text>
          </template>
          <b-form-input v-model="searchInput" placeholder="search all the GIFs"></b-form-input>
        </b-input-group>
      </div>
      <router-view :input="inputAfterClick"></router-view>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchInput: "",
      inputAfterClick: ""
    };
  },
  methods:{
    search(){
      this.inputAfterClick = this.searchInput
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
}
#nav a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
#nav a.router-link-exact-active {
  color: white;
}
.brand {
  font-weight: bold;
  font-size: 30px;
}
.search {
  text-decoration: none;
  color: white;
}
.input-group-text {
  background: linear-gradient(
    45deg,
    rgb(153, 51, 255) 0%,
    rgb(255, 102, 102) 100%
  );
  border: 0px;
}
a:hover {
  color: white;
  text-decoration: none;
}
</style>