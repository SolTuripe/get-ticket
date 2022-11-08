import { data } from "./data/data.js";

function getProductsTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.quantity * product.unitPrice;
  });
  return total;
}

function printInvoiceLines(products) {
  const table = document.querySelector("#lines");
  products.map((product) => {
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
  table.innerHTML += `<tr><td>Total: ${getProductsTotal(products)}</td></tr>`;
}

printInvoiceLines(data);
