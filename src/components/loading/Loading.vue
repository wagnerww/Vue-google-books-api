<template>
  <div>
    <div v-if="condition">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-if="!condition">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    condition: { type: Boolean, required: true }
  }
};
</script>

<style lang="scss" scoped>
</style>
