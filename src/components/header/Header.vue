<template>
  <v-app-bar app color="secondary" dark flat>
    <v-toolbar-title>Projeto - Curso Vue</v-toolbar-title>

    <v-spacer/>
    <v-toolbar-items v-if="$store.state.logged">
      <v-btn text @click="gotToBooksList">Livros</v-btn>
      <v-btn text @click="goToCollection">Minha Coleção</v-btn>
      <v-btn text @click="gotToLogout">Sair</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    gotToBooksList() {
      this.$router.push("/book");
    },
    goToCollection() {
      this.$router.push("/collection");
    },
    gotToLogout() {
      this.$store.commit("setAuthToken", "");
      this.$store.commit("setLogged", false);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
