<template>
  <v-container fluid>
    <back-button/>
    <v-row v-if="book && book.volumeInfo">
      <v-col
        cols="12"
        md="3"
        v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
      >
        <img :src="book.volumeInfo.imageLinks.thumbnail" alt>
      </v-col>
      <v-col cols="12" md="9">
        <h4 class="display-1">{{book.volumeInfo.title}}</h4>
        <h5 class="headline">{{book.volumeInfo.subtitle || "Sem descrição"}}</h5>
        <p class="mt-2">{{book.volumeInfo.description}}</p>
        <!--  <p v-html="book.volumeInfo.description"></p> -->

        <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length">
          <v-subheader>Autores</v-subheader>
          <v-divider class="mb-2"/>
          <v-chip v-for="(author, i) in book.volumeInfo.authors" :key="i" pill class="mr-3">
            <v-avatar left color="primary white--text">{{author.substring(0, 1)}}</v-avatar>
            {{author}}
          </v-chip>
        </div>
        <div class="mt-4" v-if="book.volumeInfo.categories && book.volumeInfo.categories.length">
          <v-subheader>Categorias</v-subheader>
          <v-divider class="mb-2"/>
          <v-chip
            v-for="(category, i) in book.volumeInfo.categories"
            :key="i"
            class="mr-3"
          >{{category}}</v-chip>
        </div>

        <div class="mt-4" v-if="book.volumeInfo.previewLink">
          <v-subheader>Ações</v-subheader>
          <v-divider class="mb-2"/>
          <v-btn text color="primary" @click="goToPreview(book)">Ver Preview</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../api/api";
import bookService from "./bookService";
import BackButton from "../navigation/BackButton.vue";

export default {
  name: "BookEntryPage",
  components: { BackButton },
  data() {
    return {
      book: {}
    };
  },
  async created() {
    this.book = await this.get(`/volumes/${this.$route.params.id}`);
  },
  mixins: [bookService, api]
};
</script>

<style lang="scss" scoped>
</style>
