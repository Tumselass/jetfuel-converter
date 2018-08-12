<template>
<div>
  <button 
    v-for="(value, key, index) in values" 
    :key="index"
    @click="selectUnit(value.factor, index)"
    :class="[index === selected ? 'selected' : null]"
    >
    {{ value.name }}
  </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0
    }
  },

  methods: {
    selectUnit: function(factor, index) {
      this.$emit('selectedValue', factor);
      this.selected = index;
    }
  },

  props: {
    values: {
      requirded: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: aqua;
}
</style>


