<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="3" class="text-center">
        <h6 class="display-1 text-uppercase">Login</h6>
        <v-text-field v-model="token" label="Token"/>
        <v-text-field v-model="userId" label="ID usuário"/>
        <v-btn class="mb-2" depressed dark block color="primary" @click="login">Login</v-btn>
        <v-btn color="secundary" text @click="loginAsGuest">Entrar como visitante</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userId: "117148036497079499490",
      token: "AIzaSyB-_Clu4jgIn5XJ-B92UQ2MZlYTi5GGm7E"
    };
  },
  methods: {
    login() {
      if (this.token && this.userId) {
        this.$store.commit("setAuthToken", this.token);
        this.$store.commit("setUserId", this.userId);

        this.$router.push("/book");
      } else {
        this.$store.commit(
          "showErrorMessage",
          "Você deve informar o ID de usuário e o TOKEN!"
        );
      }
    },
    loginAsGuest() {
      this.$store.commit("setLogged", true);
      this.$router.push("/book");
    }
  }
};
</script>

<style scoped>
</styled>

