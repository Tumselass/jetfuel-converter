<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <UpliftInput @totalUplift="totalUplift" />
    <ButtonGroup :values="units" @selectedValue="selectedUnit"/>
    <Totalizer :totalUplift="uplift" :factor="convertionFactor" />
  </div>
</template>

<script>
import sourceData from '@/data';
import UpliftInput from './components/UpliftInput.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import Totalizer from './components/Totalizer.vue';

export default {
  name: 'app',
  components: {
    UpliftInput,
    ButtonGroup,
    Totalizer
  },
  data() {
    return {
      units: sourceData.units,
      convertionFactor: 1,
      uplift: 0
    }
  },

  methods: {
    selectedUnit: function(factor) {
      this.convertionFactor = factor;
    },
    
    totalUplift: function(uplift) {
      this.uplift = uplift;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
