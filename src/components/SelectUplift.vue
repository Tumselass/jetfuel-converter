<template>
  
  <div>
    <input 
      type="number"
      v-model.number="selectedUplift"
      @change="emitSelectedUplift"
      >
  </div>

</template>

<script>

export default {
  
  data() {
    return {
      selectedUplift: 0
    }
  },
  // TODO: Check for negative number and prevent it
  methods: {
    emitSelectedUplift(event) {
      this.$emit('selectedUplift', this.selectedUplift);
    }
  }
}

</script>

<style scoped>
</style>


