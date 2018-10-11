<template>
  <div>
    <transition name="fade"> 
      <div 
        v-show="toggleMenuPanel" 
        class="tm_bottom-nav--panel tm_bottom-nav-panel-small"
        >
        <BottomThemeMenu v-show="activeElement.one" />
        <BottomUnitMenu v-show="activeElement.two" />
        <span v-show="activeElement.three">Nothing here yet</span> 
      </div>
    </transition>

    <nav id="tm_bottom-nav">
    
      <button
        class="tm_bottom-nav-element"
        :class="{'tm_bottom-nav-element--active': activeElement.one}"
        @click="toggleActiveMenu('one')"
        >
        <ThemeIcon />
        <span>Theme</span>
      </button>
      <button 
        class="tm_bottom-nav-element"
        :class="{'tm_bottom-nav-element--active': activeElement.two}"
        @click="toggleActiveMenu('two')"
      >
        <UnitIcon />
        <span>Unit</span>
      </button>
      <button
        disabled 
        class="tm_bottom-nav-element"
        :class="{'tm_bottom-nav-element--active': activeElement.three}"
        @click="toggleActiveMenu('three')"
      >
        
        <UserIcon />
        <span>Login</span>
      </button>
    </nav>
  </div>
</template>

<script>
import ThemeIcon from './icons/ThemeIcon';
import UnitIcon from './icons/UnitIcon';
import UserIcon from './icons/UserIcon';
import BottomThemeMenu from './BottomThemeMenu';
import BottomUnitMenu from './BottomUnitMenu';

export default {
  components: {
    ThemeIcon,
    UnitIcon,
    UserIcon,
    BottomThemeMenu,
    BottomUnitMenu
  },

  data() {
    return {
      activeElement: {
        one: false,
        two: false,
        three: false
      }
    };
  },

  methods: {
    toggleActiveMenu(id) {
      const button = this.activeElement;
      if (button[id]) {
        return (button[id] = false);
      }
      for (let el in button) {
        button[el] = false;
      }
      button[id] = true;
    }
  },

  computed: {
    toggleMenuPanel() {
      return Object.values(this.activeElement).some(v => {
        return v === true;
      });
    }
  }
};
</script>

<style scoped>
#tm_bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: var(--main-color);
  color: var(--selected-bg-color);
  font-size: 0.8rem;
  line-height: 1rem;
  position: fixed;
  top: calc(100vh - 54px);
  left: 0;
  height: 54px;
  width: 100vw;
  z-index: 1000;
}

.tm_bottom-nav--panel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  color: var(--main-text-color);
  background-color: var(--selected-bg-color);
  box-shadow: inset 0px -2px 6px 0px rgba(0, 0, 0, 0.15);
  z-index: 999;
}

.tm_bottom-nav-panel-small {
  height: 54px;
  margin-top: calc(100vh - 108px);
}

.tm_bottom-nav--panel-full {
  height: calc(100vh - 54px);
  margin-top: 0;
  transition: margin 0.2s linear;
}

.tm_bottom-nav-element {
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-items: center;
  color: inherit;
  position: relative;
  flex: 0 0 33%;
  display: flex;
  flex-direction: column;
}

.tm_bottom-nav-element--active::before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--main-color);
  top: -15px;
  left: calc(50% - 10px);
}

.tm_bottom-nav-element > svg {
  fill: var(--selected-bg-color);
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.2s linear;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(100%);
  will-change: transform;
}
</style>

