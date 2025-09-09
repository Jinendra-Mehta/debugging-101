function processCheckout(cart, user) {
  if (!cart.length) throw new Error("Cart empty");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (user.balance < total) throw new Error("Insufficient funds");

  if (user.country !== "India") return false;

  return true;
}

const cart = [{ name: "Laptop", price: 50000, qty: 1 }];
const user = { name: "John", balance: 60000, country: "USA" };

console.log(processCheckout(cart, user));
