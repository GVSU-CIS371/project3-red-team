<template>
  <div>
    <AppDropdownItem
      v-for="item in items"
      :key="item"
      :item="item"
      :selectedValue="item === selectedValue"
      @select="updateSelectedValue"
    />
  </div>
</template>

<script>
import AppDropdownItem from './AppDropdownItem.vue';

export default {
  components: {
    AppDropdownItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    },
    typeOfItem:{
      type: String,
      required: true
    }
  },
  methods: {
    updateSelectedValue(newValue, type) {
      if (newValue === this.selectedValue){
        this.$emit('update:selected', '', '');
      }
      else {
        this.$emit('update:selected', newValue, type);
      }
      
    }
  }
};
</script>