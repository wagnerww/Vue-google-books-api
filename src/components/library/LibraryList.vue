<template>
  <div>
    <loading :condition="searchOnGoing">
      <v-row>
        <v-col cols="12" md="3" lg="2" v-for="(shelf, index) in shelfList" :key="index">
          <library-item :shelf="shelf"/>
        </v-col>
      </v-row>
    </loading>
  </div>
</template>

<script>
import Loading from "../loading/Loading.vue";
import LibraryItem from "./LibralyItem.vue";
import api from "../api/api";

export default {
  name: "LibraryList",
  components: { Loading, LibraryItem },
  mixins: [api],
  data() {
    return {
      searchOnGoing: false,
      shelfList: [{ title: "Estante de testes" }]
    };
  },
  async created() {
    this.searchOnGoing = true;
    const { items } = await this.get(
      `/users/${this.$store.state.userId}/bookshelves`
    );
    this.shelfList = items;
    this.searchOnGoing = false;
  }
};
</script>

<style lang="scss" scoped>
</style>
