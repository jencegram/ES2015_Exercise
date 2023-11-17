// Importing the fruits array and the helper functions
import fruits from './foods.js';
import { choice, remove } from './helpers.js';

// Randomly drawing a fruit from the array
const randomFruit = choice(fruits);
console.log(`I’d like one ${randomFruit}, please.`); 

console.log(`Here you go: ${randomFruit}`); 
console.log("Delicious! May I have another?"); 

// Remove the fruit from the array of fruits
remove(fruits, randomFruit);

// Log the message about fruits left
console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`); 
