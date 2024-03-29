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

    <!-- Your form to add a new recipe -->
    <form @submit.prevent="addNewRecipe">
      <input type="text" v-model="newRecipeName" placeholder="Enter recipe name" />
      <button type="submit">Add Recipe</button>
    </form>
    
    <!-- <div id="saveButton">
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
    </div> -->
    <div>
    <!-- Display recipes from the store -->
    <ul>
      <h2> HELLO</h2>
      <li v-for="(recipe, index) in store.recipes" :key="index">{{ recipe }}</li>
    </ul>
  </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import AppDropdown from "./components/AppDropdown.vue";
//This is the code for the stores.
import { useStore } from './store.ts';
const store = useStore();
console.log(store.recipes);

interface Recipe{
  Name: String;
  temp: string;
  cream: string;
  syrup: string;
  base: string;
}

const recipe = ref()


// export default{
//   setup() {
//     const store = useStore()

//     return{Beverage}
//   }
// }

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


</style>
