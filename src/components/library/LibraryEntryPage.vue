<template>
  <v-container fluid>
    <back-button/>
    <v-row>
      <v-col cols="12">
        <h4 class="display-1">{{shelf.title}}</h4>
        <span class="overline ml-2">{{shelf.volumeCount}} livros</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3" lg="2" v-for="(book, index) in bookList" :key="index">
        <book-item :book="book"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../api/api";
import BackButton from "../navigation/BackButton.vue";
import BookItem from "../book/BookItem.vue";

export default {
  name: "LibraryEntryPage",
  components: { BackButton, BookItem },
  mixins: [api],
  data() {
    return { shelf: {}, bookList: [] };
  },
  async created() {
    this.shelf = await this.get(
      `/users/${this.$store.state.userId}/bookshelves/${this.$route.params.id}`
    );

    const { items } = await this.get(
      `/users/${this.$store.state.userId}/bookshelves/${
        this.$route.params.id
      }/volumes`
    );
    console.log("items", items);
    this.bookList = items;
  }
};
</script>

<style lang="scss" scoped>
</style>
