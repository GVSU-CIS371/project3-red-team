<template>
  <div>
    <slot name="toggler">
      <button @click="toggleDropdown" class="button">{{ buttonText }}</button>
    </slot>
    <slot v-if="isOpen" :selected="selectedItem"/>
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
<style>
  .button{
    border-radius: 5px;
    background-color: antiquewhite;
    width: 100%;
  }

</style>