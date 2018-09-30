<template>

  <div class="tm_tank-container">

    <div class="tm_tank tm_tank-lr">
      <span class="tm_tank-total">
        {{ fillTanks.left }}
        <span class="tm_tank-unit">kg</span> 
      </span>
      <div class="tm_tank-content" :style="{ height: tankFillPercent.left }"></div>
    </div>

    <div class="tm_tank tm_tank-center">
      <span class="tm_tank-total" :class="{ 'red-text': centerOverflow }">
        {{ fillTanks.center }}
        <span class="tm_tank-unit">kg</span>
      </span>
      <div class="tm_tank-content" :class="{ 'red-fill': centerOverflow }" :style="{ height: tankFillPercent.center }"></div>
    </div>

    <div class="tm_tank tm_tank-lr">
      <span class="tm_tank-total">
        {{ fillTanks.right }}
        <span class="tm_tank-unit">kg</span>
      </span>
      <div class="tm_tank-content" :style="{ height: tankFillPercent.right }"></div>
    </div>
  </div>

</template>

<script>

import sourceData from '@/data';
import { mapState, mapGetters } from 'vuex';

export default {

  data() {
    return {
      centerOverflow: false,
    };
  },

  computed: {
    ...mapState([
      'selectedAircraft'
    ]),
    ...mapGetters({
      sg: 'getSgAsFactor',
      selectedUplift: 'getUpliftAsKg'
    }),
    aircraft() {
      return sourceData.aircraftType[this.selectedAircraft];
    },
    fuelCapacityAsKg() {
      const { left, right, center } = this.aircraft;
      
      return {
        left: Math.round(left * this.sg),
        right: Math.round(right * this.sg),
        center: Math.round(center * this.sg)
      }
    },
    fillTanks() {
      const { left, right, center } = this.fuelCapacityAsKg;
      const wingCapacity = left + right;
      const totalCapacity = wingCapacity + center;
      
      if (this.selectedUplift > wingCapacity && this.selectedUplift < totalCapacity) {
        this.centerOverflow = false;
        return {
          left,
          right,
          center: this.selectedUplift - wingCapacity,
        };
      } else if (this.selectedUplift >= totalCapacity) {
        this.centerOverflow = true;
        return {
          left,
          right,
          center,
        };
      }
      this.centerOverflow = false;
      return {
        left: this.selectedUplift / 2,
        right: this.selectedUplift / 2,
        center: 0,
      };
    },
    tankFillPercent() {
      return {
        left: this.calculatePercent('left'),
        right: this.calculatePercent('right'),
        center: this.calculatePercent('center'),
      };
    },
  },

  methods: {
    calculatePercent(tank) {
      return `${(this.fillTanks[tank] / this.fuelCapacityAsKg[tank] * 100).toFixed(0)}%`;
    },
  },
};
</script>

<style scoped>
.tm_tank-container {
  display: flex;
  justify-content: center;
  height: 93px;
  margin-bottom: 1rem;
}

.tm_tank {
  position: relative;
  border-bottom: 1px solid var(--accent-color);
  border-left: 1px solid var(--accent-color);
  border-right: 1px solid var(--accent-color);
  flex: 0 1 91px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tm_tank-center {
  height: 93px;
  margin: 0 4px;
  align-self: flex-end;
}

.tm_tank-lr {
  align-self: flex-end;
  height: 74px;
}

.tm_tank-content {
  position: absolute;
  bottom: 0;
  left: 1px;
  width: calc(100% - 2px);
  background-color: var(--selected-bg-color);
}

.tm_tank-unit {
  font-size: 0.8rem;
}

.tm_tank-total {
  z-index: 999;
}

.red-text {
  color: red;
}

.red-fill {
  background-color: rgba(255, 232, 232, 1);
}
</style>

