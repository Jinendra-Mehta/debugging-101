function addItemToCart(cart, item) {
  return [...cart, item];
}

function applyCoupon(cart, coupon) {
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
  console.log("Cart at checkout:", cart);
  const total = calculateTotal(cart);
  console.log("Total amount:", total);
  return total;
}

let cart = [];
cart = addItemToCart(cart, { name: "Shoes", price: 1000, qty: 1 });
cart = addItemToCart(cart, { name: "T-shirt", price: 500, qty: 2 });

cart = applyCoupon(cart, { type: "percentage", value: 10 });

cart = addItemToCart(cart, { name: "Cap", price: 300, qty: 1 });

cart = applyCoupon(cart, { type: "percentage", value: 10 });

checkout(cart);
