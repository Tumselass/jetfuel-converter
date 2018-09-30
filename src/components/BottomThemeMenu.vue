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
import setLocalStorage from '../mixins/setLocalStorage';
import setCSSThemeColor from '../mixins/setCSSThemeColor';

export default {

  mixins: [
    setLocalStorage,
    setCSSThemeColor
  ],
  
  data() {
    return {
      themeColors: sourceData.theme.colors,
      selectedTheme: JSON.parse(localStorage.getItem('themeColor')) || sourceData.theme.colors[0]
    }
  },

  methods: {
    changeTheme(theme) {
      this.setCSSThemeColor(theme);
      this.setLocalStorage('themeColor', JSON.stringify(theme));
      this.selectedTheme = theme;
    },
    activeTheme(color) {
      if (this.selectedTheme[0] === color[0]) {
        return true;
      }
      return false;
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
  box-shadow: 0 0 0 4px #ccc;
}
</style>

