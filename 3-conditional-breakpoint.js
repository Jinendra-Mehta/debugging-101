function processOrders(orders) {
  for (let order of orders) {
    validateOrder(order);
  }
}

function validateOrder(order) {
  if (order.status === "invalid") {
    throw new Error(`Order ${order.id} has an invalid status`);
  }
}

const orders = [];

for (let i = 1; i <= 9999; i++) {
  if (i === 5000) {
    orders.push({ id: i, status: "invalid" });
  } else {
    orders.push({ id: i, status: "pending" });
  }
}

processOrders(orders);
