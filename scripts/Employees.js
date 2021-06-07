import { getEmployees, getOrders } from "./database.js";
const orders = getOrders();

document.addEventListener("click", (clickEvent) => {
  // debugger;
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");

    const employeeIdNumber = parseInt(employeeId);

    let counter = 0;
    for (const order of orders) {
      if (order.employeeId === employeeIdNumber) {
        counter++;
      }
    }

    for (const employee of employees) {
      if (employee.id === employeeIdNumber) {
        window.alert(`${employee.name} sold ${counter} products.`);
      }
    }
  }
});

const employees = getEmployees();

export const Employees = () => {
  let employeeHTML = "<ul>";

  for (const employee of employees) {
    employeeHTML += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  employeeHTML += "</ul>";

  return employeeHTML;
};
