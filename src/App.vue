<template>
  <div>
    
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currCream" :beverage="currBase" :syrup="currSyrup"/>
    
    <div id="selectorContainer">

      <AppDropdown buttonText="Temperature" class="contentButton">
        <div class="contentBox">
          <div v-for="temp in temps" :key="temp" class="itemBox">
            <label>
              <input
                type="radio"
                name="temperature"
                :value="temp"
                v-model="currentTemp"
              />
              {{ temp }}
            </label>
          </div>
        </div>
          
      </AppDropdown>
     
     
      <AppDropdown buttonText="Creamer" class="contentButton2">
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


     
      <AppDropdown buttonText="Beverage Base" class="contentButton2">
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
    </div>
    
    <div id="saveButton">
      <b></b>
      <input 
        type="text"
        v-model="newRecipeName"
       placeholder="Name"
      />
      <button @click="addNewRecipe">🥛 Make Beverage</button>
    </div>

    <div>
    <ul>
      <h2></h2>
      <li v-for="(recipe, index) in store.recipes" :key="index">
      <button @click="setCurrentValues(recipe)" :class="{ 'recipe-button': true, 'selected': isSelected(recipe) }"></button>
      {{ recipe.name}}
      </li>
    </ul>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import AppDropdown from "./components/AppDropdown.vue";

const temps = ref(["Hot", "Cold"]);
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const baseBevs = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentTemp = ref("Hot");
const currCream = ref("None");
const currSyrup = ref("None");
const currBase = ref("Coffee")

//Pinia Store
import { useStore } from './store.ts';
const store = useStore();
const newRecipeName = ref('');
const selectedRecipe = ref('');
const addNewRecipe = () => {
  if (newRecipeName.value.trim() !== '') {
    store.$patch((state: any) => {
      state.recipes.push({
        name:newRecipeName.value.trim(), 
        temp: currentTemp.value,
        cream: currCream.value,
        syrup: currSyrup.value,
        base: currBase.value,
      });
    });
  }
};
const setCurrentValues = (recipe) => {
  currentTemp.value = recipe.temp;
  currCream.value = recipe.cream;
  currSyrup.value = recipe.syrup;
  currBase.value = recipe.base;
  selectedRecipe.value = recipe;
};
const isSelected = (recipe) => {
  return selectedRecipe.value === recipe;
};

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
  justify-content: center;
  height: 5vh;
  width: 45vw;
  padding-left: 65px
}
// Old content button css
// .contentButton{
//   position: relative;
//   top: 0;
//   margin: 0px 5px 0px 5px;
//   width: 25%;
  
// }
.contentButton, .contentButton2{
  position: relative;
  top: 0;
  margin:  0;
  width: 200px; 
  box-sizing: border-box; 
}



.recipe-button {
  width: 25px;
  height: 25px;
  background-color: gray;
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
  left: -5px;
  padding-top: 17px;
}


.selected {
  background-color: black;
}

#saveButton{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;
  width: 50vw;
  // background-color: whitesmoke;
  justify-content: center;

}

#saveButton input[type="text"]{
  border:1px solid #855c45;
  width: 300px;
  height: 50px;
  padding: 5px;
  margin: 0px;
  margin-bottom: 10px;
  margin-right: 485px;
  background-color: #855c45;
  font-size: 25px;
  outline: none;
}

#saveButton input[type="text"]:focus {
  background-color: white;
}

.contentBox{
  display: flex;
  justify-content:center;
  justify-items: center;
  flex-direction:column;
  margin: 0px, 2px 2px 2px;
  background-color: white;
  border-radius: 3px;
  width:auto;
}

.itemBox{
  display: flex;
  margin: 3px auto 3px auto;
  padding: 2px;
  background-color: white;
  border-radius: 2px;
  width:90%;
  text-align: left;
}

button{
  background-color: #fb8c00;
  border-radius: 3px;
  width:200px;
  height: 45px;
  border: none;
  font-size: 20px;
  font-family: Arial;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
}


button:active {
  background-color: #ffc107; /* Lighter color when clicked */
}


button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  filter: brightness(103%);
}

.contentButton button {
    background-color: #48a9a6;
    font-size: 25pxpx;
}

.contentButton2 button {
    background-color: #4caf50;
    font-size: 25px
}
h2{
  margin-left: 400px;
}

li{
  text-align: center;
  margin-right: 750px;
  margin-bottom: 20px;
  font-size: 23px;
  font-family: arial;
}
</style>
