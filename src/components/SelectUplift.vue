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

  methods: {
    emitSelectedUplift(event) {
      this.$emit('selectedUplift', this.selectedUplift);
    }
  }
}

</script>

<style scoped>
</style>


