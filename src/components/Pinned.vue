<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="(search, index) in firstCol"
            :key="index"
            :src="search"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="(search, index) in secondCol"
            :key="index"
            :src="search"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            class="mb-4"
            fluid
            v-for="(search, index) in thirdCol"
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
      firstCol: [],
      secondCol: [],
      thirdCol: [],
      storage: "",
      storageList: [],
    };
  },
  mounted() {
    for (let index = 0; index < this.pinnedStorageList.length; index++) {
      if (index % 3 === 0) {
        this.firstCol.push(this.pinnedStorageList[index]);
      } else if (index % 3 === 1) {
        this.secondCol.push(this.pinnedStorageList[index]);
      } else if (index % 3 === 2) {
        this.thirdCol.push(this.pinnedStorageList[index]);
      }
    }
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
<style scoped>
.col {
  text-align: center;
}
</style>