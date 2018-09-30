export default {
  methods: {
    setCSSThemeColor(theme) {
      if (!theme.length) {
        throw new Error('Theme argument must be an array');
      }
      document.documentElement.style.setProperty(`--main-color`, theme[0]);
      document.documentElement.style.setProperty(`--accent-color`, theme[1]);
      document.documentElement.style.setProperty(`--selected-bg-color`, theme[2]);
    }
  }
}