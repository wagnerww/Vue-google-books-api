<template>
  <div>
    <v-snackbar :color="color" multi-line v-model="showMessage">
      {{ message }}
      <v-btn text @click="showMessage = false">Fechar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "FeedBack",
  data() {
    return {
      message: "",
      showMessage: false,
      color: ""
    };
  },
  watch: {
    "$store.state.message.text": "setMessage"
  },
  methods: {
    setMessage() {
      this.message = this.$store.state.message.text;
      this.color =
        this.$store.state.message.type === "ERROR" ? "error" : "success";
      this.showMessage = true;
    }
  }
};
</script>

<style scoped>
</style>
