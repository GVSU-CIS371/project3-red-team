<template>
  <div class="syrup" v-if="selectedSyrup.name !== 'None'" :style="{backgroundColor: selectedSyrup.color}"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Prop = {
  name: string;
};
type Syrup = {
  name: string;
  color: string;
};
const Syrups: Syrup[] = [
  {
    name: "Vanilla",
    color: "#FFEFD5",
  },
  {
    name: "Caramel",
    color: "#DAA520",
  },
  {
    name: "Hazelnut",
    color: "#6B4423",
  },
];

const props = withDefaults(defineProps<Prop>(), {
  name: "Vanilla",
});

const selectedSyrup = computed(() => {
    const selected = Syrups.find(syrup => syrup.name === props.name);
    return selected ? selected : { name: 'None', color: 'white' };
  });
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  background-color: #FFEFD5;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, #DAA520 10px, #DAA520 20px),
  
}
</style>
