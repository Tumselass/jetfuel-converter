export default {
  methods: {
    setLocalStorage(key, value) {
      if (typeof (Storage) !== 'undefined') {
        if (typeof (key) !== 'string' || typeof (value) !== 'string') {
          throw new Error('Arguments to set local storage needs to be strings');
        }
        localStorage.setItem(key, value);
      }
    }
  }
}