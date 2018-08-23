<template>

  <div>

    left {{ fillTanks.left.toFixed(1) }}
    <span :class="{ red: centerOverflow }">center {{ fillTanks.center.toFixed(1) }}</span>
    right {{ fillTanks.right.toFixed(1) }}

  </div>
  
</template>

<script>

import sourceData from '@/data';

export default {
  
  data() {
    return {
      centerOverflow: false
    }
  },
  
  computed: {
    aircraft() {
      return sourceData.aircraftType[this.aircraftType]
    },
    calculateKg() { // ! Duplicate with show total fuel
      const sgAsFactor = Number(this.sg) / 100;
      return this.fuelUplift * sgAsFactor;
    },
    fillTanks() {
      const { left, right, center } = this.aircraft;
      const wingCapacity = left + right;
      const totalCapacity = wingCapacity + center;
      if (this.calculateKg > wingCapacity && this.calculateKg < totalCapacity) {
        this.centerOverflow = false;
        return {
          left: left,
          right: right,
          center: this.calculateKg - wingCapacity
        };
      } else if (this.calculateKg > totalCapacity) {
        this.centerOverflow = true;
        return {
          left,
          right,
          center
        }
      } else {
        this.centerOverflow = false;
        return {
          left: this.calculateKg / 2,
          right: this.calculateKg / 2,
          center: 0
        };
      }
    }
  },

  props: {
    aircraftType: {
      required: true,
      type: String
    },
    fuelUplift: {
      required: true,
      type: Number
    },
    sg: {
      required: true,
      type: String
    }
  }
  
}
</script>

<style scoped>
.red {
  color: red;
}
</style>


