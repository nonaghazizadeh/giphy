<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <router-link to="/" class="brand">GIPHY</router-link>
        <router-link to="/sports">Sports</router-link>
        <router-link to="/artists">Artists</router-link>
        <router-link to="/pinned">Pinned</router-link>
      </div>
      <div class="pb-3 pt-3">
        <b-input-group class="mt-3">
          <template #append>
            <b-input-group-text
              ><router-link to="/search" class="search"
                >search</router-link
              ></b-input-group-text
            >
          </template>
          <b-form-input v-model="searchInput"></b-form-input>
        </b-input-group>
      </div>
      <router-view :input="searchInput"></router-view>
    </b-container>
  </div>
</template>

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
  background-color: hotpink;
  border: 0px;
}
a:hover {
  color: white;
  text-decoration: none;
}
</style>
<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
};
</script>

