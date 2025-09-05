// 01-console-debugging.js
// Scenario: A subtle bug in a shopping cart flow - mutation in original cart

function addItemToCart(cart, item) {
  return [...cart, item];
}

function applyCoupon(cart, coupon) {
  // BUG: mutates original cart instead of creating a new one
  cart.forEach((item) => {
    if (coupon.type === "percentage") {
      item.price = item.price - (item.price * coupon.value) / 100;
    }
  });
  return cart;
}

function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function checkout(cart) {
  // Developer tries to debug with console logs
  console.log("Cart at checkout:", cart);
  const total = calculateTotal(cart);
  console.log("Total amount:", total);
  return total;
}

// --- FLOW ---
let cart = [];
cart = addItemToCart(cart, { name: "Shoes", price: 1000, qty: 1 });
cart = addItemToCart(cart, { name: "T-shirt", price: 500, qty: 2 });

// Apply coupon (mutates items)
cart = applyCoupon(cart, { type: "percentage", value: 10 });

// Now add another item AFTER applying coupon
cart = addItemToCart(cart, { name: "Cap", price: 300, qty: 1 });

cart = applyCoupon(cart, { type: "percentage", value: 10 });

checkout(cart);
