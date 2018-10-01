<template>
  <div> 
    <button 
      class="tm_btn-reset tm_color-picker"
      :class="{'tm_active-theme': activeTheme(color)}"
      :style="{'background-color': color[0]}" 
      v-for="(color, index) in themeColors"
      :key="index"
      @click="changeTheme(color)"
      >
      
    </button>
  </div>
</template>

<script>
import sourceData from '@/data';
import setCSSThemeColor from '../mixins/setCSSThemeColor';

export default {

  mixins: [
    setCSSThemeColor
  ],
  
  data() {
    return {
      themeColors: sourceData.theme.colors,
      selectedTheme: this.$store.state.selectedTheme || sourceData.theme.colors[0]
    }
  },

  methods: {
    changeTheme(theme) {
      this.setCSSThemeColor(theme);
      this.$store.commit('setSelectedTheme', theme);
      this.selectedTheme = theme;
    },
    activeTheme(color) {
      if (this.selectedTheme[0] === color[0]) {
        return true;
      }
      return false;
    },
    defaultTheme() {

    } 
  },

  computed: {
    
  }
}
</script>

<style scoped>
.tm_color-picker {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-left: 28px;
  cursor: pointer;
}

.tm_active-theme {
  transform: scale(1.2);
  transition: all 0.2s ease-in;
}

.tm_active-theme::after {
  content: "";
  display: block;
  height: 8px;
  width: 4px;
  transform: rotate(45deg);
  border: solid var(--selected-bg-color);
  border-width: 0 2px 2px 0;
  margin: -6px auto;
}
</style>

