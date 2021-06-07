import { getProducts } from "./database.js";
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("product")) {
    const [, productId] = itemClicked.id.split("--");

    for (const product of products) {
      if (product.id === parseInt(productId)) {
        window.alert(`${product.name} costs $${product.price}.`);
      }
    }
  }
});

const products = getProducts();

export const Products = () => {
  let productHTML = "<ul>";

  for (const product of products) {
    productHTML += `<li id="product--${product.id}">${product.name}</li>`;
  }

  productHTML += "</ul>";

  return productHTML;
};
