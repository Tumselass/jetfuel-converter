<template>
  <div class="tm_display-unit-wrapper">
    <button
      :class="[displayUnit === 'kg' ? 'tm_display-unit-btn--active' : null]"
      class="tm_btn-reset tm_display-unit-btn"
      @click="setDisplayUnit('kg')"
      >
      Metric
    </button>
    <button
      :class="[displayUnit === 'lbs' ? 'tm_display-unit-btn--active' : null]"
      class="tm_btn-reset tm_display-unit-btn"
      @click="setDisplayUnit('lbs')"
      >
      Imperial
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setDisplayUnit'])
  },

  computed: {
    ...mapState(['displayUnit'])
  }
};
</script>

<style scoped>
.tm_display-unit-wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.tm_display-unit-btn {
  color: var(--main-text-color-muted);
  font-size: 1.2rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.tm_display-unit-btn--active {
  color: var(--main-color);
}
</style>


