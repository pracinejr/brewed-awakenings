import { getEmployees, getOrders } from "./database.js";
const orders = getOrders();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");

    for (const employee of employees) {
      if (employee.id === parseInt(employeeId)) {
        window.alert(`${employee.name} sold ${orders.employeeId} products.`);
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
