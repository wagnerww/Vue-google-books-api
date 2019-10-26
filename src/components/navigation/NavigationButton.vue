<template>
  <v-btn text small color="primary" @click="gotToDetails">Ver Detalhes</v-btn>
</template>

<script>
export default {
  name: "NavigationButton",
  props: {
    url: { type: String, required: true }
  },
  methods: {
    gotToDetails() {
      this.$router.push(this.url);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
