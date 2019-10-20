<template>
  <v-container fluid>
    <v-row justify="end">
      <v-col cols="12" md="2">
        <v-btn text block @click="goBack">Voltar</v-btn>
      </v-col>
    </v-row>
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
          <v-btn text color="primary" @click="goToPreview">Ver Preview</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "BookEntryPage",
  data() {
    return {
      book: {}
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`
      );
      this.book = data;
    } catch (error) {}
  },
  methods: {
    goBack() {
      this.$router.push("/book");
    },
    goToPreview() {
      window.open(this.book.volumeInfo.previewLink, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
