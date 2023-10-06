const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeDuplicates(cart) {
  const newCart = [];

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    // Check if the item is not already in the new cart
    if (!newCart.includes(item)) {
      newCart.push(item);
    }
  }

  return newCart;
}

function getUserCart() {
  const cart = [];
  
  console.log("Enter your cart items one by one (type 'done' when finished):");

  function collectItem() {
    rl.question("Enter an item: ", (userInput) => {
      if (userInput.toLowerCase() === "done") {
        rl.close();
      } else {
        cart.push(userInput);
        collectItem();
      }
    });
  }

  collectItem();

  rl.on('close', () => {
    const cleanedCart = removeDuplicates(cart);

    console.log("Original Cart:", cart);
    console.log("Cleaned Cart:", cleanedCart);
  });
}

getUserCart(); // Start collecting cart items
