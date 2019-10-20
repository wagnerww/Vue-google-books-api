<template>
  <v-text-field v-model="textSearch" label="Pesquise algo..." @input="doSearch"/>
</template>

<script>
export default {
  name: "SearchInputField",
  data() {
    return {
      textSearch: "",
      lasChange: 0,
      delay: 300
    };
  },
  methods: {
    async doSearch() {
      this.lasChange = new Date().getTime();
      setTimeout(() => {
        if (new Date().getTime() >= this.lasChange + this.delay) {
          this.$emit("search", this.textSearch);
        }
      }, this.delay);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
