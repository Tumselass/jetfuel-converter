<template>

  <div class="tm_unit-select-bar">

    <span
    class="tm_unit-select-container"
      v-for="unit in unitTypes"
      :key="unit['.key']"
      >

      <input
      class="tm_unit-select-input"
      :value="unit['.key']"
      v-model="selectedUnit"
      type="radio"
      :name="unit['.key']"
      :id="unit['.key']"
      >

      <label
        tabindex="0"
        @keyup.13.32="selectUnitByLabel(unit['.key'])"
        class="tm_unit-select-label"
        :for="unit['.key']"
        >

        {{ unit.name }}

      </label>

    </span>

  </div>

</template>

<script>

import sourceData from '@/data';

export default {

  data() {
    return {
      unitTypes: sourceData.units,
      selectedUnit: this.defaultUnit,
    };
  },

  watch: {
    selectedUnit() {
      this.$emit('selectedUnit', this.selectedUnit);
    }
  },

  methods: {
    selectUnitByLabel(label) {
      this.selectedUnit = label;
    }
  },

  props: {
    defaultUnit: {
      required: true,
      type: String,
    },
  },
};

</script>

<style scoped>
.tm_unit-select-container {
  display: inline-block;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}

.tm_unit-select-container:last-child {
  margin-top: 1rem;
}

.tm_unit-select-input {
  position: absolute;
  visibility: hidden;
  display: none;
}

.tm_unit-select-label {
  color: var(--main-text-color-muted);
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
}

.tm_unit-select-input:checked + label {
  color: var(--main-color);
  background: var(--selected-bg-color);
}

.tm_unit-select-bar {
  margin: 1.3rem auto 0 auto;
  max-width: 380px;
}
</style>

