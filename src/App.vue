<template>
  <div id="app">
   <FuelCalculator />
  </div>
</template>

<script>

import FuelCalculator from '@/components/FuelCalculator';

export default {
  components: {
    FuelCalculator
  },
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
