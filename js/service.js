import { data } from "./data.js";

function getProductsTotal(products) {
  return products.reduce(
    (accumulated, product) =>
      accumulated + product.quantity * product.unitPrice,
    0
  );
}

function printInvoiceLines(products) {
  const table = document.querySelector("#lines");

  products.forEach((product) => {
    table.innerHTML += `
    <tr>
      <td>${product.quantity}</td>
      <td>${product.product}</td>
      <td>${product.type}</td>
      <td>${product.unitPrice}</td>
      <td>${product.quantity * product.unitPrice}</td>
    </tr>
    `;
  });

  document.querySelector("#total").innerHTML = `Total ${getProductsTotal(
    products
  )}`;
}

printInvoiceLines(data);
