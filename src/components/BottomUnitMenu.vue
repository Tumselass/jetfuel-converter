<template>
  <div>
    <button
      @click="setDisplayUnit('kg')"
      >
      Metric
    </button>
    <button
      @click="setDisplayUnit('lbs')"
      >
      Imperial
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'setDisplayUnit'
    ])
  }
}
</script>

