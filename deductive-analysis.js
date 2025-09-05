function processCheckout(cart, user) {
  // Stage 1: Validate cart
  if (!cart.length) throw new Error("Cart empty");

  // Stage 2: Compute total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Stage 3: Verify balance
  if (user.balance < total) throw new Error("Insufficient funds");

  // Stage 4: Process payment (bug here)
  if (user.country !== "India") return false; // Fails for international users

  return true;
}

const cart = [{ name: "Laptop", price: 50000, qty: 1 }];
const user = { name: "John", balance: 60000, country: "USA" };

console.log(processCheckout(cart, user));
