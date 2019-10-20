<template>
  <v-app>
    <app-header/>

    <v-content>
      <router-view/>
    </v-content>

    <feedBack/>
  </v-app>
</template>

<script>
import FeedBack from "./components/feedback/FeedBack.vue";
import appHeader from "./components/header/Header.vue";

export default {
  name: "App",
  components: {
    FeedBack,
    appHeader
  },
  created() {
    if (window.localStorage.authToken) {
      this.$store.commit("setAuthToken", window.localStorage.authToken);
    } else {
      this.$router.push("/");
    }
  }
};
</script>
