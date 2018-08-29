<template>

  <div>
    <select
      @change="emitSelectedAircraftKey"
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
</style>

