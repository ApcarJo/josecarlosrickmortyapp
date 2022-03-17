<template>
  <div class="" v-if="data" >
    <template v-for="(item, index) in data">
      <div :key="index" class="flex flex-col items-center justify-center">
        <div class="bg-gray-200 flex-col items-center justify-center rounded-xl p-12 mb-12">
        <img :src="item.image"/>
          <h3><span>{{ item.name }}</span></h3>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {getCharacters} from "./../utils/ApiCall";
export default {
  name: "HomeView",

  data() {
    return {
      res: null,
      data: null,
    };
  },

  mounted() {
    this.getInfo();
  },

  methods: {
    async getInfo() {
      this.res = await getCharacters();
      this.data = this.res.data.results;
    }
  },
};
</script>
