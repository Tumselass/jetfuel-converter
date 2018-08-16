<template>
  
  <div>
    <select 
      v-model="selectedAircraftKey"
      @change="emitSelectedAircraftKey"
      >

      <option 
        v-for="aircraft in aircraftType"
        :key="aircraft['.key']"
        :value="aircraft['.key']">
        {{ aircraft.name }}
      </option>

    </select>
  </div>

</template>

<script>

import sourceData from '@/data';

export default {
  
  data() {
    return {
      aircraftType: sourceData.aircraftType,
      selectedAircraftKey: ''
    }
  },

  methods: {
    emitSelectedAircraftKey(event) {
      this.$emit('selectedAircraftKey', this.selectedAircraftKey);
    }
  }
}

</script>

<style scoped>
</style>


