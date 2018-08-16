<template>

  <div>
    
    {{ showConvertedUplift }}
    hei
  </div>
  
</template>

<script>

import sourceData from '@/data';

export default {
  
  data() {
    return {
      unitTypes: sourceData.units,
    }
  },

  props: {
    uplift: {
      required: true,
      type: Number
    },
    convertionUnit: {
      required: false,
      type: String,
    }
  },

  computed: {
    showConvertedUplift() {
      return this.uplift * this.unitTypes[this.convertionUnit].factor;
    }
  }
}
</script>

<style scoped>
</style>


