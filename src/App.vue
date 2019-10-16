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
//AIzaSyB-_Clu4jgIn5XJ-B92UQ2MZlYTi5GGm7E

import FeedBack from "./components/feedback/FeedBack.vue";
import appHeader from "./components/header/Header.vue";

export default {
  name: "App",
  components: {
    FeedBack,
    appHeader
  }
};
</script>
