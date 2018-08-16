<template>

  <div>
    <h1>The Awsome Jet Fuel Calculator</h1>
    <SelectAircraft @selectedAircraftKey="setSelectedAircraft"/>
    <SelectUplift @selectedUplift="setSelectedUplift" />
  </div>
  
</template>

<script>

import SelectAircraft from './SelectAircraft';
import SelectUplift from './SelectUplift';

export default {

  components: {
    SelectAircraft,
    SelectUplift
  },

  data() {
    return {
      selectedAircraft: '',
      selectedConversionUnit: '',
      selectedUplift: 0
    }
  },
  
  methods: {
    setSelectedAircraft(key) {
      if (typeof key !== 'string') {
        throw new Error('Must be a string');
        }
      this.selectedAircraft = key;
    },

    setSelectedUplift(uplift) {
      if (typeof uplift !== 'number') {
        throw new Error('Uplift must be a number');
      }
      this.selectedUplift = uplift;
    }
  }
  
}
</script>

<style scoped>
</style>


