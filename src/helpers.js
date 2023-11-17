// Returns a randomly selected item from array of items
function choice(items) {
  // Calculate a random index based on the length of the items array.
  let randomIndex = Math.floor(Math.random() * items.length);
  // Return the item at the calculated random index.
  return items[randomIndex]
}

// Function to remove a specified item from an array.
function remove(items, item) {
  // Find the index of the item to be removed.
  let index = items.indexOf(item);
  // If the item is found, remove it from the array and return it.
  if (index > -1) {
    return items.splice(index, 1)[0];
  }
  return undefined;
}

export { choice, remove };