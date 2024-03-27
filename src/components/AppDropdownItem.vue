<template>
  <div @click="selectItem">
    <input type="button" :value="item">
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    selectItem() {
      this.$emit('select', this.item);
    }
  }
};
</script>