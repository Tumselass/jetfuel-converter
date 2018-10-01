<template>

  <div>

    <div class="tm_card">
      <SelectAircraft />
    </div>

    <div class="tm_card">
      <SelectUplift />

    <hr>

      <SelectUnit />
    </div>

    <div class="tm_card">
      <ShowTotalFuel />
    </div>

    <div class="tm_card">
      <SelectSG />
    </div>

    <p class="tm_disclamer">
      <span class="tm_disclamer-heading">Disclamer</span>
      This is a hobby project made for personal use and not suitable for real life usage. I do not guarantee the quality of outputs or that the aircraft data being used is correct.
      <br>
      v.{{ version }}
      </p>
    
    <BottomMenu />

  </div>

</template>

<script>

import setCSSThemeColor from '../mixins/setCSSThemeColor';
import SelectAircraft from './SelectAircraft';
import SelectUplift from './SelectUplift';
import SelectUnit from './SelectUnit';
import ShowTotalFuel from './ShowTotalFuel';
import SelectSG from './SelectSG';
import BottomMenu from './BottomMenu';

export default {

  components: {
    SelectAircraft,
    SelectUplift,
    SelectUnit,
    ShowTotalFuel,
    SelectSG,
    BottomMenu
  },

  mixins: [
    setCSSThemeColor
  ],

  data() {
    return {
      version: this.$store.state.version
    };
  },
  
  // change theme according to localstorage retreeved through the store
  created() {
    const { selectedTheme } = this.$store.state;
    if (selectedTheme !== null) {
      this.setCSSThemeColor(selectedTheme);
    }
  },
};
</script>

<style scoped>
.tm_card {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 2px;
  padding: 20px 0;
  margin: 15px auto;
  width: 95%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.12);
}

.tm_disclamer {
  color: var(--main-text-color-muted);
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin-top: 2rem;
  padding-bottom: 75px;
}

.tm_disclamer-heading {
  display: block;
  font-weight: 600;
}
</style>

