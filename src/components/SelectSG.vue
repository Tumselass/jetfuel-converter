<template>
  
  <div>
    
    <input 
      type="range" 
      v-model="selectedSG"
      @change="emitSelectedSG"
      :min="sg.low" 
      :max="sg.high"
      >
    sg 0.{{ selectedSG }}

  </div>

</template>

<script>

import sourceData from '@/data';

export default {
  
  data() {
    return {
      sg: sourceData.sg,
      selectedSG: this.defaultSG
    }
  },

  methods: {
    emitSelectedSG() {
      console.log('range');
      this.$emit('selectedSG', this.selectedSG);
    },
    test() {
      console.log('test');
    }
  },

  props: {
    defaultSG: {
      required: true,
      type: String
    }
  }
}

</script>

<style scoped>
</style>


