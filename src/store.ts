import { defineStore } from 'pinia';

//This is an eample based on the website and the professor's notes. Need to do more research into creating the Store
export const useCoffeeStore = defineStore('CoffeeStore', {
    state: () => {
      return {
        category: 'Beverage Base',
        products: [
          "Coffee",
          'Black Tea',
          'Green Tea',
        ],
      };
    },
  });
  