<template>

  <div>
    <div class="tm-section-description">Select Aircraft</div>
    <select
    class="tm_select-aircraft"
      @change.passive="saveSelectedAircraft"
      >

      <option
        v-for="aircraft in aircraftType"
        :key="aircraft['.key']"
        :value="aircraft['.key']"
        :selected="aircraft['.key'] === selectedAircraft ? true : false"
        >
        {{ aircraft.name }}
      </option>

    </select>
  </div>

</template>

<script>

import sourceData from '@/data';
import setLocalStorage from '../mixins/setLocalStorage';
import { mapState, mapMutations } from 'vuex';

export default {

  mixins: [
    setLocalStorage
  ],

  data() {
    return {
      aircraftType: sourceData.aircraftType,
    };
  },

  methods: {
    ...mapMutations([
      'setSelectedAircraft'
    ]),
    // Using value instead og v-model to have one option preselected
    saveSelectedAircraft(e) {
      this.setSelectedAircraft(e.target.value);
      this.setLocalStorage('aircraft', e.target.value);
    },
  },

  computed: {
    ...mapState([
      'selectedAircraft'
    ])
  }
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

