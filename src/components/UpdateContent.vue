<template>
  <transition name="fade">
    <div
      v-if="updateExists"
      class="tm_container"
    >
      <p class="tm_text">A new version is available!</p>
      <button
        @click="refreshApp"
        class="tm_refresh-button"
      >Refresh</button>
      <button
        @click="dismiss"
        class="tm_dismiss-button"
      >Dismiss</button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false
    };
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
    },
    dismiss() {
      this.updateExists = false;
    }
  }
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-200px);
}

.tm_container {
  margin: 20px auto;
  width: 95%;
}

.tm_text {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.tm_refresh-button,
.tm_dismiss-button {
  display: block;
  margin: 0.5rem auto;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

.tm_refresh-button {
  border: none;
  background-color: var(--main-color);
  color: var(--selected-bg-color);
  box-shadow: 0 14px 34px -10px rgba(0, 0, 0, 0.15),
    0 14px 34px -10px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
}

.tm_dismiss-button {
  background-color: inherit;
  border: none;
  color: inherit;
}
</style>


