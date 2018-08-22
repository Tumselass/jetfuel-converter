<template>

  <div>
    <h1>The Awsome Jet Fuel Calculator</h1>
    <SelectAircraft @selectedAircraftKey="setSelectedAircraft"/>
    <SelectUplift @selectedUplift="setSelectedUplift" />
    <SelectUnit @selectedUnit="setSelectedUnit" :defaultUnit="selectedConversionUnit" />
    <ShowTotalFuel :sg="selectedSG" :uplift="selectedUplift" :convertionUnit="selectedConversionUnit" />
    <SelectSG @selectedSG="setSelectedSG" :defaultSG="selectedSG" />
  </div>
  
</template>

<script>

import SelectAircraft from './SelectAircraft';
import SelectUplift from './SelectUplift';
import SelectUnit from './SelectUnit';
import ShowTotalFuel from './ShowTotalFuel';
import SelectSG from './SelectSG';

export default {

  components: {
    SelectAircraft,
    SelectUplift,
    SelectUnit,
    ShowTotalFuel,
    SelectSG
  },
  
  data() {
    return {
      selectedAircraft: '',
      selectedConversionUnit: 'liter',
      selectedUplift: 0,
      selectedSG: '80'
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
    },

    setSelectedSG(sg) {
      if (typeof sg !== 'string') {
        throw new Error('Must be a string');
        }
      this.selectedSG = sg;
    }
  }
  
}
</script>

<style scoped>
</style>


