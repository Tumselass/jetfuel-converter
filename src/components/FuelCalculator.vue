<template>

  <div>

    <div class="tm-card">
      <SelectAircraft
        @selectedAircraftKey="setSelectedAircraft"
        :defaultAircraft="selectedAircraft"
        />
    </div>
    
    <div class="tm-card">
      <SelectUplift 
        @selectedUplift="setSelectedUplift" 
        />
    <hr>
      <SelectUnit 
        @selectedUnit="setSelectedUnit" 
        :defaultUnit="selectedConversionUnit" 
        />
    </div>

    <div class="tm-card">
      <ShowFuelTanks
        :aircraftType="selectedAircraft"
        :fuelUplift="selectedUplift"
        :sg="selectedSG"
        />

      <ShowTotalFuel 
        :sg="selectedSG" 
        :uplift="selectedUplift" 
        :convertionUnit="selectedConversionUnit" 
        />
    </div>
    
    <div class="tm-card">
      <SelectSG 
        @selectedSG="setSelectedSG" 
        :defaultSG="selectedSG" 
        /> 
    </div>

  </div>

</template>

<script>

import SelectAircraft from './SelectAircraft';
import SelectUplift from './SelectUplift';
import SelectUnit from './SelectUnit';
import ShowTotalFuel from './ShowTotalFuel';
import SelectSG from './SelectSG';
import ShowFuelTanks from './ShowFuelTanks.vue';

export default {

  components: {
    SelectAircraft,
    SelectUplift,
    SelectUnit,
    ShowTotalFuel,
    SelectSG,
    ShowFuelTanks,
  },

  data() {
    return {
      hasLocalStorage: undefined,
      selectedAircraft: localStorage.getItem('aircraft') || 'b737ng',
      selectedConversionUnit: localStorage.getItem('unit') || 'liter',
      selectedUplift: 0,
      selectedSG: localStorage.getItem('sg') || '80',
    };
  },

  beforeMount() {
    if (typeof(Storage) !== 'undefined') {
      this.hasLocalStorage = true;
    } else {
      this.hasLocalStorage = false;
    }
  },

  methods: {
    setSelectedAircraft(key) {
      if (typeof key !== 'string') {
        throw new Error('Must be a string');
      }
      this.selectedAircraft = key;
      this.setLocalStorage('aircraft', key);
    },

    setSelectedUplift(uplift) {
      if (typeof uplift !== 'number') {
        throw new Error('Uplift must be a number');
      }
      this.selectedUplift = uplift;
      this.setLocalStorage('uplift', uplift);
    },

    setSelectedUnit(key) {
      if (typeof key !== 'string') {
        throw new Error('Must be a string');
      }
      this.selectedConversionUnit = key;
      this.setLocalStorage('unit', key);
    },

    setSelectedSG(sg) {
      if (typeof sg !== 'string') {
        throw new Error('Must be a string');
      }
      this.selectedSG = sg;
      this.setLocalStorage('sg', sg);
    },

    setLocalStorage(key, value) {
      if (this.hasLocalStorage) {
        localStorage.setItem(key, value)
      }
    }
  },

};
</script>

<style scoped>
.tm-card {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 2px;
  padding: 20px 0;
  margin: 15px auto;
  width: 95%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
</style>

