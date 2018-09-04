<template>

  <div class="tm_unit-select-bar">

    <span
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
      @change="emitSelectedUnit"
      >

      <label
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

  methods: {
    emitSelectedUnit() {
      this.$emit('selectedUnit', this.selectedUnit);
    },
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
  color: var(--main-text-color);
  background: var(--selected-bg-color);
}

.tm_unit-select-bar {
  margin-top: 1.3rem;
}
</style>

