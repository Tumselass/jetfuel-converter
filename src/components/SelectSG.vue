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
      selectedSG: this.defaultSG,
    };
  },

  methods: {
    emitSelectedSG() {
      this.$emit('selectedSG', this.selectedSG);
    },
  },

  props: {
    defaultSG: {
      required: true,
      type: String,
    },
  },
};

</script>

<style scoped>
</style>

