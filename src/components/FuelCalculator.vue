<template>

  <div>
    <h1>The Awsome Jet Fuel Calculator</h1>
    <SelectAircraft @selectedAircraftKey="setSelectedAircraft"/>
    <SelectUplift @selectedUplift="setSelectedUplift" />
    <SelectUnit @selectedUnit="setSelectedUnit" />
    <ShowTotalFuel :uplift="selectedUplift" :convertionUnit="selectedConversionUnit" />
  </div>
  
</template>

<script>

import SelectAircraft from './SelectAircraft';
import SelectUplift from './SelectUplift';
import SelectUnit from './SelectUnit';
import ShowTotalFuel from './ShowTotalFuel';

export default {

  components: {
    SelectAircraft,
    SelectUplift,
    SelectUnit,
    ShowTotalFuel
  },
  //!! for tett kobling mellom selectUplift og denne. Dersom default skal byttes må det gjøres i begge og det er ikke bra. Finn ny løsning
  data() {
    return {
      selectedAircraft: '',
      selectedConversionUnit: 'liter',
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
    },

    setSelectedUnit(key) {
      if (typeof key !== 'string') {
        throw new Error('Must be a string');
        }
      this.selectedConversionUnit = key;
    }
  }
  
}
</script>

<style scoped>
</style>


