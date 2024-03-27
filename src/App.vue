<template>
  <div id="app">
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currCream" :beverage="currBase" :syrup="currSyrup"/>
    
    <div id="selectorContainer">
      <AppDropdown buttonText="Temperature" class="contentButton" :selected="currentTemp" @update:selected="updateValue">
        <AppDropdownContent class="box" :items="temps" :selected="currentTemp" @update:selected="updateValue" />
      </AppDropdown>
      
      <AppDropdown buttonText="Creamer" class="contentButton" :selected="currCream" @update:selected="updateValue">
        <AppDropdownContent class="box" :items="creamers" :selected="currCream" @update:selected="updateValue" />
      </AppDropdown>

      <AppDropdown buttonText="Syrup" class="contentButton" :selected="currSyrup" @update:selected="updateValue">
        <AppDropdownContent class="box" :items="syrups" :selected="currSyrup" @update:selected="updateValue" />
      </AppDropdown>

      <AppDropdown buttonText="Beverage Base" class="contentButton" :selected="currBase" @update:selected="updateValue">
        <AppDropdownContent class="box" :items="baseBevs" :selected="currBase" @update:selected="updateValue" />
      </AppDropdown>
    </div>
    
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import AppDropdown from "./components/AppDropdown.vue";
import AppDropdownContent from "./components/AppDropdownContent.vue";
//This is the code for the stores.
//import { useStore } from './store.ts';
//const store = useStore();

const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const baseBevs = ref(["Coffee", "Green Tea", "Black Tea"]);
const currCream = ref("None");
const currSyrup = ref("None");
const currBase = ref("Coffee")

const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

/* function updateTemp(newValue: string) {
  currentTemp.value = newValue;
}

function updateCream(newValue : string){
  currCream.value = newValue;
} */

function updateValue(newValue:string, type:string){
  switch(type){
    case "cream": currCream.value = newValue;
    break;
    case "syrup": currSyrup.value = newValue;
    break;
    case "base": currBase.value = newValue;
    break;
    case "temp": currentTemp.value = newValue;
    break;
  }
}

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

/* .itemButton{


} */

.box{
  margin: 2px;
  padding: 2px;
  background-color: tan;
  border-radius: 2px;
  width:90%;
}


</style>
