<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="(search, index) in pinnedStorageList.slice(0, 12)"
            :key="index"
            :src="search"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="(search, index) in pinnedStorageList.slice(12, 24)"
            :key="index"
            :src="search"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="(search, index) in pinnedStorageList.slice(24, 36)"
            :key="index"
            :src="search"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const STORAGE_KEY = "pinned-storage";
export default {
  name: "Pinned",
  data() {
    return {
      pinnedStorageList: [],
      storage: "",
      storageList: [],
    };
  },
  created() {
    this.storage = localStorage.getItem(STORAGE_KEY);
    this.storage = this.storage.slice(1).slice(0, -1);
    this.storageList = this.storage.split(",");
    for (let index = 0; index < this.storageList.length; index++) {
      this.pinnedStorageList.push(
        this.storageList[index].slice(1).slice(0, -1)
      );
    }
  },
};
</script>