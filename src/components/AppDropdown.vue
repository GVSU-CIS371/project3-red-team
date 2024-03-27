<template>
  <div>
    <slot name="toggler">
      <button @click="toggleDropdown">{{ buttonText }}</button>
    </slot>
    <slot v-if="isOpen"/>
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  props: {
      buttonText: {
          type: String,
          required: true
      }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>