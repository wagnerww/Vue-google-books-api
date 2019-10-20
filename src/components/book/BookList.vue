<template>
  <div>
    <v-row>
      <v-col cols="12">
        <search-input-field @search="doSearch"/>
      </v-col>
    </v-row>

    <v-row v-if="!bookList.length" justify="center">
      <v-col cols="12" md="4" class="text-center">
        <p class="overline">Digtite algo para iniciar a pesquisa</p>
      </v-col>
    </v-row>

    <loading :condition="searchOnGoing">
      <v-row>
        <v-col cols="12" md="3" lg="2" v-for="(book, index) in bookList" :key="index">
          <book-item :book="book"/>
        </v-col>
      </v-row>
    </loading>
  </div>
</template>

<script>
import Loading from "../loading/Loading.vue";
import BookItem from "./BookItem.vue";
import api from "../api/api";
import SearchInputField from "../search/searchInputField.vue";

export default {
  name: "BookList",
  components: { Loading, SearchInputField, BookItem },
  mixins: [api],
  data() {
    return {
      bookList: [],
      searchOnGoing: false
    };
  },
  methods: {
    async doSearch(textSearch) {
      try {
        if (textSearch) {
          this.searchOnGoing = true;
          const { items } = await this.get(`/volumes?q=${textSearch}`);
          this.bookList = items;

          this.searchOnGoing = false;
        } else {
          this.bookList = [];
        }
      } catch (error) {
        this.searchOnGoing = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
