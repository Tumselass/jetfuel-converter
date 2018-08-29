<template>

  <div>

    {{ showConvertedUplift.toFixed(1) }} liter
    {{ showConvertedSG.toFixed(1) }} kg

  </div>

</template>

<script>

import sourceData from '@/data';

export default {

  data() {
    return {
      unitTypes: sourceData.units,
    };
  },

  props: {
    uplift: {
      required: true,
      type: Number,
    },
    convertionUnit: {
      required: true,
      type: String,
    },
    sg: {
      required: true,
      type: String,
    },
  },

  computed: {
    showConvertedUplift() {
      return this.uplift * this.unitTypes[this.convertionUnit].factor;
    },
    showConvertedUnit() {
      return this.unitTypes[this.convertionUnit].name;
    },
    showConvertedSG() {
      const sgAsFactor = Number(this.sg) / 100;
      return this.uplift * sgAsFactor;
    },
  },
};
</script>

<style scoped>
</style>

