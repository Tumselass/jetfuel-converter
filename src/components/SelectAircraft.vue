<template>

  <div>
    <div class="tm-section-description">Select Aircraft</div>
    <select
    class="tm_select-aircraft"
      @change.passive="emitSelectedAircraftKey"
      >

      <option
        v-for="aircraft in aircraftType"
        :key="aircraft['.key']"
        :value="aircraft['.key']"
        :selected="aircraft['.key'] === selectedAircraftKey ? true : false"
        >
        {{ aircraft.name }}
      </option>

    </select>
  </div>

</template>

<script>

import sourceData from '@/data';

export default {

  data() {
    return {
      aircraftType: sourceData.aircraftType,
      selectedAircraftKey: this.defaultAircraft,
    };
  },

  props: {
    defaultAircraft: {
      required: true,
      type: String,
    },
  },
  // Using value instead og v-model to have one option preselected
  methods: {
    emitSelectedAircraftKey(event) {
      this.$emit('selectedAircraftKey', event.target.value);
    },
  },
};

</script>

<style scoped>
.tm-section-description {
  margin-bottom: 0.6rem;
  color: var(--main-text-color-muted);
}

.tm_select-aircraft {
  background-color: transparent;
  color: var(--main-color);
}
</style>

