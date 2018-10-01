import Vue from 'vue';
import Vuex from 'vuex';
import { setLocalStorage } from './plugins';
import { version } from '../../package.json';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [setLocalStorage],
  state: {
    inputUnit: {'.key': 'liter', name: 'Liter', factor: 1},
    displayUnit: 'kg',
    selectedAircraft: 'b737ng',
    selectedUplift: 0,
    selectedSg: '804',
    selectedTheme: null,
    version: version
  },
  mutations: {
    setInitialState(state) {
      if (!localStorage.getItem('store')) return;

      const localStore = JSON.parse(localStorage.getItem('store'));
      if (localStore.version === state.version) {
        this.replaceState(localStore)
      }
    },
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
    },
    setSelectedTheme(state, theme) {
      this.state.selectedTheme = theme;
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