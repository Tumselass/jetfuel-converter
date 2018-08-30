<template>

  <div>
    <input
      type="number"
      placeholder="Input Uplift"
      v-model.number="selectedUplift"
      @keyup="emitSelectedUplift"
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
      if (this.selectedUplift === '') {
        this.$emit('selectedUplift', 0);
      } else {
        this.$emit('selectedUplift', this.selectedUplift);
      }
    },
  },
};

</script>

<style scoped>
</style>

