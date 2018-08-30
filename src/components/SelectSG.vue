<template>

  <div>

    <div>
      SG 0.{{ selectedSG }}
    </div>

    <input
      class="tm-sg-slider"
      type="range"
      v-model="selectedSG"
      @change="emitSelectedSG"
      :min="sg.low"
      :max="sg.high"
      >

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
.tm-sg-slider {
  -webkit-appearance: none;
  height: 4px;
  width: 70%;
  border-radius: 5px;
  background: var(--accent-color);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.tm-sg-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: var(--main-color);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.tm-sg-slider::-moz-range-thumb {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: var(--main-color);
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
}
</style>

