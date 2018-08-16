<template>
  
  <div>
    <span
      v-for="unit in unitTypes"
      :key="unit['.key']"
      >
      <input
      :value="unit['.key']" 
      v-model="selectedUnit"
      type="radio" 
      :name="unit['.key']" 
      :id="unit['.key']"
      @change="emitSelectedUnit"
      >
      <label :for="unit['.key']">{{ unit.name }}</label>
    </span>
    
  </div>

</template>

<script>

import sourceData from '@/data';

export default {
  
  data() {
    return {
      unitTypes: sourceData.units,
      selectedUnit: 'liter'
    }
  },

  methods: {
    emitSelectedUnit() {
      this.$emit('selectedUnit', this.selectedUnit);
    }
  }
}

</script>

<style scoped>
</style>


