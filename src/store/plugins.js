export const setLocalStorage = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    localStorage.setItem('store', JSON.stringify(state));
  })
}