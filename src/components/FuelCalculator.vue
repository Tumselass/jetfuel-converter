<template>

  <div>
    
    <div class="tm_card">
      <SelectAircraft
        @selectedAircraftKey="setSelectedAircraft"
        :defaultAircraft="selectedAircraft"
        />
    </div>
    
    <div class="tm_card">
      <SelectUplift 
        @selectedUplift="setSelectedUplift" 
        />

    <hr>

      <SelectUnit 
        @selectedUnit="setSelectedUnit" 
        :defaultUnit="selectedConversionUnit" 
        />
    </div>

    <div class="tm_card">
      <ShowFuelTanks
        :aircraftType="selectedAircraft"
        :fuelUplift="selectedUplift"
        :sg="selectedSG"
        :convertionUnit="selectedConversionUnit"
        />

      <ShowTotalFuel 
        :sg="selectedSG" 
        :uplift="selectedUplift" 
        :convertionUnit="selectedConversionUnit" 
        />
    </div>
    
    <div class="tm_card">
      <SelectSG 
        @selectedSG="setSelectedSG" 
        :defaultSG="selectedSG" 
        /> 
    </div>

    <p class="tm_disclamer">
      <span class="tm_disclamer-heading">Disclamer</span>
      This is a hobby project made for personal use and not suitable for real life usage. I do not guarantee the quality of outputs or that the aircraft data being used is correct.
      </p>

  </div>

</template>

<script>

import helpers from '@/helpers/validation';
import SelectAircraft from './SelectAircraft';
import SelectUplift from './SelectUplift';
import SelectUnit from './SelectUnit';
import ShowTotalFuel from './ShowTotalFuel';
import SelectSG from './SelectSG';
import ShowFuelTanks from './ShowFuelTanks.vue';

const { validateString, validateNumber } = helpers;

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
      selectedSG: localStorage.getItem('sg') || '800',
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
    setLocalStorage(key, value) {
      if (this.hasLocalStorage) {
        localStorage.setItem(key, value)
      }
    },

    setSelectedAircraft(key) {
      if (validateString(key)) {
        this.selectedAircraft = key;
        this.setLocalStorage('aircraft', key);
      }
    },

    setSelectedUplift(uplift) {
      if (validateNumber(uplift)) {
        this.selectedUplift = uplift;
        this.setLocalStorage('uplift', uplift);
      }
    },

    setSelectedUnit(key) {
      if (validateString(key)) {
        this.selectedConversionUnit = key;
        this.setLocalStorage('unit', key);
      }
    },

    setSelectedSG(sg) {
      if (validateString(sg)) {
        this.selectedSG = sg;
        this.setLocalStorage('sg', sg);
      }
    }
  },

};
</script>

<style scoped>
.tm_card {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 2px;
  padding: 20px 0;
  margin: 15px auto;
  width: 95%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.12);
}

.tm_disclamer {
  color: var(--main-text-color-muted);
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin-top: 2rem;
}

.tm_disclamer-heading {
  display: block;
  font-weight: 600;
}
</style>

