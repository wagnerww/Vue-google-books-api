<template>
  <v-card class="mx-auto book-card">
    <v-card-title>
      <span>{{shelf.title}}</span>
    </v-card-title>
    <v-card-text>
      <span>
        Número de Livros:
        <span class="font-weight-medium ml-2">{{shelf.volumeCount}}</span>
      </span>
    </v-card-text>
    <v-card-actions>
      <navigation-button :url="entryPageUrl"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import NavigationButton from "../navigation/NavigationButton.vue";
export default {
  name: "LibraryItem",
  components: { NavigationButton },
  props: { shelf: { type: Object, required: true } },
  computed: {
    entryPageUrl() {
      return `/library/${this.shelf.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
