<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="3" class="text-center">
        <h6 class="display-1 text-uppercase">Login</h6>
        <v-text-field v-model="token" label="Token"/>
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
      token: "AIzaSyB-_Clu4jgIn5XJ-B92UQ2MZlYTi5GGm7E"
    };
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit("setAuthToken", this.token);
        this.$store.commit("setLogged", true);
        this.$router.push("/book");
      } else {
        this.$store.commit("showErrorMessage", "Você deve informar o TOKEN!");
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

