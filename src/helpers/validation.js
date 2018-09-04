export default {
  validateString(string) {
    if (typeof string === 'string') {
      return true;
    } else {
      throw new Error('argument must be string');
    }
  },

  validateNumber(number) {
    if (typeof number === 'number') {
      return true;
    } else {
      throw new Error('argument must be number');
    }
  }
}