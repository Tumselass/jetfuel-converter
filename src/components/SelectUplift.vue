<template>

  <div>
    <input
      type="text"
      pattern="[0-9]"
      placeholder="Input Uplift"
      v-model.number="selectedUplift"
      @change="emitSelectedUplift"
      >
  </div>

</template>

<script>

export default {

  data() {
    return {
      selectedUplift: null,
    };
  },
  // TODO: Check for negative number and prevent it & change from number to text and sanatize the input to only include numbers
  methods: {
    emitSelectedUplift(event) {
      if (this.selectedUplift === '') return;
      this.$emit('selectedUplift', this.selectedUplift);
    },
  },
};

</script>

<style scoped>
</style>

