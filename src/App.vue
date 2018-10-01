<template>
  <div id="app">
   <FuelCalculator />
  </div>
</template>

<script>

import FuelCalculator from '@/components/FuelCalculator';

export default {
  // init store from local storage
  beforeCreate() {
    this.$store.commit('setInitialState');
  },
  components: {
    FuelCalculator,
  },
};
</script>

<style>
:root {
  --main-text-color: rgba(129, 129, 129, 1);
  --main-text-color-muted: rgba(129, 129, 129, 0.6);
  --main-color: #40c9a2;
  --accent-color: #77cbb9;
  --selected-bg-color: #d6efea;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  font-size: 16px;
  color: var(--main-text-color);
  max-width: 500px;
  margin: 0 auto;
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

.tm_btn-reset {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
