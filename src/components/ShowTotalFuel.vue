<template>

  <div>
    <ShowFuelTanks
        :aircraftType="aircraftType"
        :fuelUplift="calculateTotalKg"
        :sg="sgAsFactor"
        />

    <hr>

    <div
      class="tm_total-kg">
      {{ calculateTotalKg }} kg
    </div>

    <div
      class="tm_total-liter">
      {{ calculateTotalLiter }} liter
    </div>

  </div>

</template>

<script>
import sourceData from '@/data';
import ShowFuelTanks from './ShowFuelTanks.vue';

export default {

  components: {
    ShowFuelTanks,
  },

  data() {
    return {
      unitTypes: sourceData.units,
    };
  },

  props: {
    aircraftType: {
      required: true,
      type: String,
    },
    uplift: {
      required: true,
      type: Number,
    },
    convertionUnit: {
      required: true,
      type: String,
    },
    sg: {
      required: true,
      type: String,
    },
  },

  computed: {
    sgAsFactor() {
      return Number(this.sg) / 1000; 
    },
    calculateTotalLiter() {
      let liter;
      if (this.convertionUnit === 'kg') {
        liter = this.uplift / this.sgAsFactor;
      } else {
        liter = this.uplift * this.unitTypes[this.convertionUnit].factor;
      }
      return Math.round(liter);
    },
    calculateTotalKg() {
      let kg;
      if (this.convertionUnit === 'kg') {
        kg = this.uplift;
      } else {
        kg = this.calculateTotalLiter * this.sgAsFactor;
      }
      return Math.round(kg);
    },
  },
};
</script>

<style scoped>
.tm_total-liter {
  font-size: 0.9rem;
}

.tm_total-kg {
  font-size: 1.5rem;
}
</style>

