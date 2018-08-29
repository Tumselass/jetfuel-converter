<template>
  <div id="app">
   <FuelCalculator />
  </div>
</template>

<script>

import FuelCalculator from '@/components/FuelCalculator';

export default {
  components: {
    FuelCalculator,
  },
};
</script>

<style>
body {
  font-size: 16px;
}

input,
select {
  font-size: inherit;
  font-family: inherit;
  border: none;
  text-align: center;
}

hr {
  width: 80%;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
