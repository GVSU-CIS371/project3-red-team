<template>
  <div>
    
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currCream" :beverage="currBase" :syrup="currSyrup"/>
<<<<<<< Updated upstream
    <ul>
      <li>
          <b>Temperature: </b>
          <template v-for="temp in temps" :key="temp">
=======
    
    <div id="selectorContainer">

      <AppDropdown buttonText="Temperature" class="contentButton">
        <div class="contentBox">
          <div v-for="temp in temps" :key="temp" class="itemBox">
>>>>>>> Stashed changes
            <label>
              <input
                type="radio"
                name="temperature"
<<<<<<< Updated upstream
                :id="`r${temp}`"
=======
>>>>>>> Stashed changes
                :value="temp"
                v-model="currentTemp"
              />
              {{ temp }}
            </label>
<<<<<<< Updated upstream
          </template>
      </li>
      <li>
        <b>Creamer: </b>
        <template v-for="x in creamers" :key="x">
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
        <template v-for="x in syrups" :key="x">
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
        <template v-for="x in baseBevs" :key="x">
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
      <li>
        <b>Save Drink: </b>
        <input 
          type="text"
          name="saveTxt"
          id="saveTxt"
        />
        <input 
          type="button"
          name="saveBtn"
          id="saveBtn"
          value="Save!"

        />
      </li>
    </ul>
=======
          </div>
        </div>
          
      </AppDropdown>

      <AppDropdown buttonText="Beverage Base" class="contentButton">
        <div class="contentBox">
          <div v-for="base in baseBevs" :key="base" class="itemBox">
            <label>
              <input
                type="radio"
                name="beverage_base"
                :value="base"
                v-model="currBase"
              />
              {{ base }}
            </label>
          </div>
        </div>
          
      </AppDropdown>

      <AppDropdown buttonText="Syrup" class="contentButton">
        <div class="contentBox">
          <div v-for="syrup in syrups" :key="syrup" class="itemBox">
            <label>
              <input
                type="radio"
                name="syrup"
                :value="syrup"
                v-model="currSyrup"
              />
              {{ syrup }}
            </label>
          </div>
        </div>
          
      </AppDropdown>

      <AppDropdown buttonText="Creamer" class="contentButton">
        <div class="contentBox">
          <div v-for="cream in creamers" :key="cream" class="itemBox">
            <label>
              <input
                type="radio"
                name="cream"
                :value="cream"
                v-model="currCream"
              />
              {{ cream }}
            </label>
          </div>
        </div>
      </AppDropdown>
    </div>
    <div id="saveButton">
      <b>Save Drink: </b>
      <input 
        type="text"
        name="saveTxt"
        id="saveTxt"
      />
      <input 
        type="button"
        name="saveBtn"
        id="saveBtn"
        value="Save!"/>
    </div>
    
>>>>>>> Stashed changes
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
<<<<<<< Updated upstream
=======
import AppDropdown from "./components/AppDropdown.vue";
>>>>>>> Stashed changes
//This is the code for the stores.
//import { useStore } from './store.ts';
//const store = useStore();

const temps = ref(["Hot", "Cold"]);
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const baseBevs = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentTemp = ref("Hot");
const currCream = ref("None");
const currSyrup = ref("None");
const currBase = ref("Coffee")
<<<<<<< Updated upstream
=======

const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

#selectorContainer{
  display:flex;
  justify-content: space-evenly;
  background-color: white;
  height: 20vh;
  width: 50vw;
}

.contentButton{
  position: relative;
  top: 0;
  margin: 0px 5px 0px 5px;
  width: 25%;
  
}

#saveButton{
  display: flex;
  margin: 10px 0 0 0;
  width: 50vw;
  background-color: whitesmoke;
  justify-content: center;
}

.contentBox{
  display: flex;
  justify-content:center;
  justify-items: center;
  flex-direction:column;
  margin: 0px, 2px 2px 2px;
  background-color: tan;
  border-radius: 3px;
  width:100%;
}

.itemBox{
  display: flex;
  margin: 3px auto 3px auto;
  padding: 2px;
  background-color: antiquewhite;
  border-radius: 2px;
  width:90%;
  text-align: left;
}


>>>>>>> Stashed changes
</style>
