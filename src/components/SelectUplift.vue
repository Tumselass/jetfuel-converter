<template>

  <div>
    <input
      type="number"
      pattern="[0-9]"
      placeholder="Uplift"
      v-model.number="selectedUplift"
      @keyup.numbers="emitSelectedUplift"
      @change="emitSelectedUplift"
      >
  </div>

</template>

<script>

export default {

  data() {
    return {
      selectedUplift: null, // default value
    };
  },

  methods: {
    emitSelectedUplift() {
      if (this.selectedUplift === '' || null) {
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

