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
      selectedUnit: this.defaultUnit
    }
  },

  methods: {
    emitSelectedUnit() {
      this.$emit('selectedUnit', this.selectedUnit);
    }
  },

  props: {
    defaultUnit: {
      required: true,
      type: String
    }
  }
}

</script>

<style scoped>
</style>


