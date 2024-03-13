<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />
    <ul>
      <li>
          <b>Temperature: </b>
          <template v-for="temp in temps" :key="temp">
            <label>
              <input
                type="radio"
                name="temperature"
                :id="`r${temp}`"
                :value="temp"
                v-model="currentTemp"
              />
              {{ temp }}
            </label>
          </template>
      </li>
      <li>
        <b>Creamer: </b>
        <template v-for="x in creamers" :key="creamer">
          <label>
              <input
                type="radio"
                name="creamer"
                :id="`r${x}`"
                :value="x"
                v-model="currCream"
              />
              {{ x }}
            </label>
        </template>
      </li>
      <li>
        <b>Syrup: </b>
        <template v-for="x in syrups" :key="syrup">
          <label>
              <input
                type="radio"
                name="Syrup"
                :id="`r${x}`"
                :value="x"
                v-model="currSyrup"
              />
              {{ x }}
            </label>
        </template>
      </li>
      <li>
        <b>Beverage Base: </b>
        <template v-for="x in baseBevs" :key="baseBev">
          <label>
              <input
                type="radio"
                name="Beverage Base"
                :id="`r${x}`"
                :value="x"
                v-model="currBase"
              />
              {{ x }}
            </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import Creamer from "./components/Creamer.vue";
import Syrup from "./components/Syrup.vue";
import Base from "./components/Base.vue";
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const baseBevs = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentTemp = ref("Hot");
const currCream = ref("None");
const currSyrup = ref("None");
const currBase = ref("Coffee")
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
