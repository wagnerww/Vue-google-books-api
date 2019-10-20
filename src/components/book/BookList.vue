<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="textSearch" label="Pesquise algo... " @input="doSearch"/>
      </v-col>
    </v-row>
    <v-row v-if="!textSearch" justify="center">
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

const axios = require("axios");
export default {
  name: "BookList",
  components: { Loading, BookItem },
  data() {
    return {
      textSearch: "",
      bookList: [],
      searchOnGoing: false
    };
  },
  methods: {
    async doSearch() {
      try {
        if (this.textSearch) {
          this.searchOnGoing = true;
          const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`
          );

          this.bookList = data.items;
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
