<template>
  <div class="">
    <template v-for="(item, index) in data">
      <div :key="index">
        {{ item }}
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
      data: null,
    };
  },

  mounted() {
    this.getInfo();
  },

  methods: {
    getInfo: async function(){
      this.data = await getCharacters();
      console.log(this.data)
    }
  }
};
</script>
