import Vue from 'vue';
import Vuex from 'vuex';

const myPlugin = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    localStorage.setItem('store', JSON.stringify(state));
  })
}

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [myPlugin],
  state: {
    inputUnit: JSON.parse(localStorage.getItem('unit')) || {'.key': 'liter', name: 'Liter', factor: 1},
    displayUnit: 'kg',
    selectedAircraft: localStorage.getItem('aircraft') || 'b737ng',
    selectedUplift: 0,
    selectedSg: localStorage.getItem('sg') || '804'
  },
  mutations: {
    setDisplayUnit(state, unit) {
      this.state.displayUnit = unit;
    },
    setInputUnit(state, unit) {
      this.state.inputUnit = unit;
    },
    setSelectedAircraft(state, aircraft) {
      this.state.selectedAircraft = aircraft;
    },
    setSelectedUplift(state, uplift) {
      this.state.selectedUplift = uplift;
    },
    setSelectedSg(state, sg) {
      this.state.selectedSg = sg;
    }
  },
  getters: {
    getSgAsFactor(state) {
      return Number(state.selectedSg) / 1000;
    },
    getUpliftAsLiter(state, getters) {
      if (!state.inputUnit) return;

      let liter;
      if (state.inputUnit['.key'] === 'kg') {
        liter = state.selectedUplift / getters.getSgAsFactor;
      } else {
        liter = state.selectedUplift * state.inputUnit.factor;
      }
      return Math.round(liter);
    },
    getUpliftAsKg(state, getters) {
      if (!state.inputUnit) return;

      let kg;
      if (state.inputUnit['.key'] === 'kg') {
        kg = state.selectedUplift;
      } else {
        kg = getters.getUpliftAsLiter * getters.getSgAsFactor;
      }
      return Math.round(kg);
    },
    getUpliftAsLbs(state, getters) {
      return Math.round(getters.getUpliftAsKg * 2.204);
    }
  }
});