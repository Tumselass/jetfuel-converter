<template>

  <div>
    <input
      type="number"
      pattern="[0-9]"
      placeholder="Uplift"
      v-model.number="selectedUplift"
      @keyup.numbers="saveSelectedUplift"
      @change="saveSelectedUplift"
      >
  </div>

</template>

<script>
import { mapMutations } from 'vuex';

export default {

  data() {
    return {
      selectedUplift: null, // default value
    };
  },

  methods: {
    ...mapMutations([
      'setSelectedUplift'
    ]),
    saveSelectedUplift() {
      if (this.selectedUplift === '' || null) {
        this.setSelectedUplift(0);
      } else {
        this.setSelectedUplift(this.selectedUplift);
      }
    },
  },
};

</script>

