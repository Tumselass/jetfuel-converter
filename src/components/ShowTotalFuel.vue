<template>

  <div>
    <ShowFuelTanks />

    <hr>

    <div
      v-if="displayUnit === 'kg'"
      class="tm_total-kg">
      {{ getUpliftAsKg }} kg
    </div>

    <div
      v-if="displayUnit === 'lbs'"
      class="tm_total-kg">
      {{ getUpliftAsLbs }} lbs
    </div>

    <div
      class="tm_total-liter">
      {{ getUpliftAsLiter }} liter
    </div>

  </div>

</template>

<script>
import sourceData from '@/data';
import ShowFuelTanks from './ShowFuelTanks.vue';
import { mapState, mapGetters } from 'vuex';

export default {

  components: {
    ShowFuelTanks,
  },

  data() {
    return {
      unitTypes: sourceData.units,
    };
  },

  computed: {
    ...mapState([
      'displayUnit',
      'inputUnit',
      'selectedUplift',
      'selectedSg'
    ]),
    ...mapGetters([
      'getUpliftAsLiter',
      'getUpliftAsKg',
      'getUpliftAsLbs',
    ]),
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

