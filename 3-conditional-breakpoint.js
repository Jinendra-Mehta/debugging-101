// conditional-breakpoint.js
function processOrders(orders) {
  for (let order of orders) {
    // Instead of logging thousands of orders,
    // we'll set a conditional breakpoint here:
    //   order.status === 'invalid'

    // Simulate processing
    validateOrder(order);
  }
}

function validateOrder(order) {
  // Fake validation: only fails when status is "invalid"
  if (order.status === "invalid") {
    throw new Error(`Order ${order.id} has an invalid status`);
  }
}

const orders = [];

// Create 9999 valid orders
for (let i = 1; i <= 9999; i++) {
  if (i === 5000) {
    orders.push({ id: i, status: "invalid" });
  } else {
    orders.push({ id: i, status: "pending" });
  }
}

processOrders(orders);
