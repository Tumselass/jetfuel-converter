<template>
  <div>
    {{ calculateTotal }}
  </div>
</template>

<script>
export default {

  props: {
    totalUplift: {
      required: true,
      type: Number
    },
    factor: {
      required: true,
      type: Number
    }
  },

  computed: {
    calculateTotal: function() {
      return this.totalUplift * this.factor;
    }
  }
}
</script>

