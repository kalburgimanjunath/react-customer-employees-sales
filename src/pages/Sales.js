import React from 'react';
export default function Sales() {
  const sales = [
    {
      id: 1,
      productName: 'XYZ',
      customer: 'Manjunath',
      employee: 'Ravi',
      quantity: 20,
      price: 120,
    },
    {
      id: 1,
      productName: 'ABC',
      customer: 'Ravi',
      employee: 'Manjunath',
      quantity: 19,
      price: 2020,
    },
  ];
  return (
    <div>
      <h1>Sales</h1>
      {sales &&
        sales.map((item) => {
          return (
            <>
              <div>Product Name: {item.productName}</div>
              <div>Customer: {item.customer}</div>
              <div>Employee: {item.employee}</div>
              <div>quantity: {item.quantity}</div>
              <div>Total Price: {item.quantity * item.price}</div>
            </>
          );
        })}
      <button type="button">Add New</button>
    </div>
  );
}
