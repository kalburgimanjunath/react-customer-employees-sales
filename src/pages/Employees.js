import React from 'react';
export default function Employees() {
  const employees = [
    {
      id: 1,
      name: 'Manjunath',
      address: '@189,Ravi nagar hubli',
    },
    {
      id: 2,
      name: 'Ravi',
      address: '@189,Ravi nagar hubli',
    },
  ];
  return (
    <div>
      <h1>Employees</h1>
      {employees &&
        employees.map((item) => {
          return (
            <>
              <div>{item.name}</div>
              <div>{item.address}</div>
            </>
          );
        })}
      <button type="button">Add New</button>
    </div>
  );
}
