import { defineStore } from 'pinia';

interface Recipe{
  name: string;
  temp: string;
  cream: string;
  syrup: string;
  base: string;
}


//This is an eample based on the website and the professor's notes. Need to do more research into creating the Store
// export const useStore = defineStore('CoffeeStore', {
//     state: () => {
//       return {
//         category: 'Beverage Base',
//         products: [
//           "Coffee",
//           'Black Tea',
//           'Green Tea',
//         ],
//       };
//     },
//   });


// // Test 2
// export const useStore = defineStore({
//   id: 'beverage',
//   state: () => ({
//     recipes: [] as Recipe[] // Array to store user's beverage selections
//   }),
//   actions: {
//     // Action to add a new recipe
//     addRecipe(recipe: Recipe) {
//       this.recipes.push(recipe);
//     },
//     // Action to remove a recipe by index
//     removeRecipe(index: number) {
//       this.recipes.splice(index, 1);
//     }
//   }
// });

export const useStore = defineStore('beverageStore',{
  state: () => ({
    recipes: [] as Recipe[] // Array to store user's beverage selections
  }),
  actions: {
    // Action to add a new recipe
    addRecipe(name: string, temp: string, cream: string, syrup: string, base: string) {
      const recipe: Recipe = {
        name: name,
        temp: temp, 
        cream: cream,
        syrup: syrup,
        base: base
      }
      this.recipes.push(recipe);
    },
  }
});
  
