<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="textSearch" label="Pesquise algo... " @change="doSearch"/>
      </v-col>
    </v-row>
    <loading :condition="searchOnGoing">
      <v-row>
        <v-col cols="12" md="3" lg="2" v-for="(book, index) in bookList" :key="index">
          <v-card class="mx-auto">
            <v-card-title>{{book.volumeInfo.title}}</v-card-title>
            <v-card-text>{{book.volumeInfo.subtitle}}</v-card-text>
            <v-card-actions>
              <v-btn text small color="primary">Ver Detalhes</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </loading>
  </div>
</template>

<script>
import Loading from "../loading/Loading.vue";
const axios = require("axios");
export default {
  name: "BookList",
  components: { Loading },
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
