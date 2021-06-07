import { getProducts, getEmployees, getOrders } from "./database.js";

// Get copy of state for use in this module
const products = getProducts();
const employees = getEmployees();
const orders = getOrders();

// Function whose responsibility is to find the product for an order
const findProduct = (order, product) => {
  let orderProduct = null;

  for (const product of products) {
    if (product.id === order.productId) {
      orderProduct = product;
    }
  }

  return orderProduct;
};

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
  let orderEmployee = null;

  for (const employee in allEmployees) {
    if (employee.id === order.employeeId) {
      orderEmployee = employee;
    }
  }

  return orderEmployee;
};

export const Orders = () => {
  let orderHTML = "";
  orderHTML = "<ul>";

  for (const order of orders) {
    const employee = findEmployee(Orders, employees);
    const product = findProduct(order);

    orderHTML += `<li>${product.name} was sold by ${
      employee.name
    } on ${new Date(order.timestamp).toLocaleDateString()}</li>`;
  }

  orderHTML += "</ul>";

  return orderHTML;
};
