import { data } from "./data/data";

function getProductsTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total = total + product.quantity * product.unitPrice;
  });
  return total;
}

function printInvoiceLines(products) {
  const table = document.querySelector("#lines");
  products.forEach((product) => {
    table.innerHTML += `
            <tr>
                <td>${product.quantity}</td>
                <td>${product.product}</td>
                <td>${product.unitPrice}</td>
                <td>${product.unitPrice * product.quantity}</td>
            </tr>
        `;
  });
  table.innerHTML += `<tr><td>Total: ${getProductsTotal(products)}</td></tr>`;
}

printInvoiceLines(data);
console.log(data);
