<template>
  <v-container fluid>
    <back-button/>
    <v-row>
      <v-col cols="12">
        <h4 class="display-1">{{shelf.title}}</h4>
        <span class="overline ml-2">{{shelf.volumeCount}} livros</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../api/api";
import BackButton from "../navigation/BackButton.vue";

export default {
  name: "LibraryEntryPage",
  components: { BackButton },
  mixins: [api],
  data() {
    return { shelf: {} };
  },
  async created() {
    this.shelf = await this.get(
      `/users/117148036497079499490/bookshelves/${this.$route.params.id}`
    );
  }
};
</script>

<style lang="scss" scoped>
</style>
