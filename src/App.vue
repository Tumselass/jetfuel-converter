<template>
  <div id="app">
    <button
      v-if="updateExists"
      @click="refreshApp"
    >New version available! Click to update</button>
    <FuelCalculator/>
  </div>
</template>

<script>
import FuelCalculator from '@/components/FuelCalculator';

export default {
  components: {
    FuelCalculator
  },

  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false
    };
  },
  // init store from local storage
  beforeCreate() {
    this.$store.commit('setInitialState');
  },
  created() {
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },

  methods: {
    showRefreshUI(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage('skipWaiting');
    }
  }
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

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
