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
:root {
  --main-text-color: rgba(129, 129, 129, 1);
  --main-text-color-muted: rgba(129, 129, 129, 0.6);
  --main-color: rgba(162, 162, 162, 1);
  --accent-color: rgba(187, 187, 187, 1);
  --selected-bg-color: rgba(243, 243, 243, 1);
}

body {
  font-size: 16px;
  color: var(--main-text-color);
}

input,
select {
  font-size: inherit;
  font-family: inherit;
  border: none;
  text-align: center;
  color: var(--main-text-color);
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
  line-height: 1.5rem;
}
</style>
