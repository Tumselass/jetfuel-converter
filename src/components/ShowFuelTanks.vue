<template>

  <div class="tm-tank-container">

    <div class="tm-tank tm-tank-lr">
      <span class="tm-tank-total">
        {{ fillTanks.left.toFixed(1) }}
      </span>
      <div class="tm-tank-content" :style="{ height: tankFillPercent.left }"></div>
    </div>

    <div class="tm-tank tm-tank-center">
      <span class="tm-tank-total" :class="{ 'red-text': centerOverflow }">
        {{ fillTanks.center.toFixed(1) }}
      </span>
      <div class="tm-tank-content" :class="{ 'red-fill': centerOverflow }" :style="{ height: tankFillPercent.center }"></div>
    </div>

    <div class="tm-tank tm-tank-lr">
      <span class="tm-tank-total">
        {{ fillTanks.right.toFixed(1) }}
      </span>
      <div class="tm-tank-content" :style="{ height: tankFillPercent.right }"></div>
    </div>
  </div>

</template>

<script>

import sourceData from '@/data';

export default {

  data() {
    return {
      centerOverflow: false,
    };
  },

  computed: {
    aircraft() {
      return sourceData.aircraftType[this.aircraftType];
    },
    calculateKg() { // ! Duplicate with show total fuel
      if (this.convertionUnit === 'kg') return this.fuelUplift;
      const sgAsFactor = Number(this.sg) / 1000;
      return this.fuelUplift * sgAsFactor;
    },
    fillTanks() {
      const { left, right, center } = this.aircraft;
      const wingCapacity = left + right;
      const totalCapacity = wingCapacity + center;
      if (this.calculateKg > wingCapacity && this.calculateKg < totalCapacity) {
        this.centerOverflow = false;
        return {
          left,
          right,
          center: this.calculateKg - wingCapacity,
        };
      } else if (this.calculateKg > totalCapacity) {
        this.centerOverflow = true;
        return {
          left,
          right,
          center,
        };
      }
      this.centerOverflow = false;
      return {
        left: this.calculateKg / 2,
        right: this.calculateKg / 2,
        center: 0,
      };
    },
    tankFillPercent() {
      return {
        left: this.calculatePercent('left'),
        right: this.calculatePercent('right'),
        center: this.calculatePercent('center')
      }
    }
  },

  methods: {
    calculatePercent(tank) {
      return (this.fillTanks[tank] / this.aircraft[tank] * 100).toFixed(0) + '%'
    }
  },

  props: {
    aircraftType: {
      required: true,
      type: String,
    },
    fuelUplift: {
      required: true,
      type: Number,
    },
    sg: {
      required: true,
      type: String,
    },
    convertionUnit: {
      required: true,
      type: String
    }
  },

};
</script>

<style scoped>
.tm-tank-container {
  display: flex;
  justify-content: center;
  height: 93px;
  margin-bottom: 1rem;
}

.tm-tank {
  position: relative;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  border-left: 1px solid rgba(216, 216, 216, 1);
  border-right: 1px solid rgba(216, 216, 216, 1);
  flex: 0 1 91px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tm-tank-center {
  height: 93px;
  margin: 0 4px;
  align-self: flex-end;
}

.tm-tank-lr {
  align-self: flex-end;
  height: 74px;
}

.tm-tank-content {
  position: absolute;
  bottom: 0;
  left: 1px;
  width: calc(100% - 2px);
  background-color: rgba(243, 243, 243, 1);
}

.tm-tank-total {
  z-index: 999;
}

.red-text {
  color: red;
}

.red-fill {
  background-color: rgba(255, 232, 232, 1);
}
</style>

