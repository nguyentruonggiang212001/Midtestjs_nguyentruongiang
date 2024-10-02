const products = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Galaxy S21",
    price: 900,
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Xperia 1",
    price: 800,
    brand: "Sony",
  },
];

for (value of products) {
  const table = `<table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Brand</th>
      </tr>
    </thead>
    <tbody  >
      <tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.price}</td>
        <td>${value.brand}</td>
      </tr>
    </tbody>
  </table>`;
  document.write(`${table}`);
}
