export default {
  validateString(string) {
    if (typeof string === 'string') {
      return true;
    }
    throw new Error('argument must be string');
  },

  validateNumber(number) {
    if (typeof number === 'number') {
      return true;
    }
    throw new Error('argument must be number');
  },
};
