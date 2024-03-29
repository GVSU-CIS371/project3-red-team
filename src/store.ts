import { defineStore } from 'pinia';

interface Recipe{
  name: string;
  temp: string;
  cream: string;
  syrup: string;
  base: string;
}

export const useStore = defineStore('beverageStore',{
  state: () => ({
    recipes: [] as Recipe[] // Array to store user's beverage selections
  }),
});
  
