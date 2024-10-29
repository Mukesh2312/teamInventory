import React from 'react';
import Details from './Details';
import {Link} from 'react-router-dom'

const Inventory = () => {
  const products = [
    { name: 'Quantum Laptop X100', code: '1230', group: 'Electronics', addedOn: 'Today', quantity: '12 pcs', price: '65,000.00' },
    { name: 'Quantum Laptop X100', code: '452', group: 'Electronics', addedOn: 'Yesterday', quantity: '52 pcs', price: '62,000.00' },
    { name: 'Quantum Laptop X100', code: '2596', group: 'Electronics', addedOn: '21 March', quantity: '96 pcs', price: '94,000.00' },
    { name: 'Quantum Laptop X100', code: '3254', group: 'Electronics', addedOn: 'Today', quantity: '54 pcs', price: '85,000.00' },
    { name: 'Quantum Laptop X100', code: '2103', group: 'Electronics', addedOn: 'Yesterday', quantity: '52 pcs', price: '75,000.00' },
    { name: 'Quantum Laptop X100', code: '1111', group: 'Electronics', addedOn: '21 January', quantity: '96 pcs', price: '40,000.00' },
    { name: 'Quantum Laptop X100', code: '1341', group: 'Electronics', addedOn: '30 January', quantity: '54 pcs', price: '85,000.00' },
    { name: 'Quantum Laptop X100', code: '2222', group: 'Electronics', addedOn: '20 January', quantity: '03 pcs', price: '705,000.00' },
    { name: 'Quantum Laptop X100', code: '1111', group: 'Electronics', addedOn: '1 January', quantity: '111 pcs', price: '40,000.00' },
    { name: 'Quantum Laptop X100', code: '1198', group: 'Electronics', addedOn: '1 January', quantity: '11 pcs', price: '40,000.00' },
  ];

  return (
    
    <div className="container mx-auto p-4">

<div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">All Inventory</h1>
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 pl-10 w-80"
            placeholder="Search product"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.9-5.4A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 017.05 7.05z"
              />
            </svg>
          </span>
        </div>

        <button className="flex items-center bg-gray-100 p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          Filter
        </button>
        
        
      </div>      
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Name</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Code</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Item Group</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Added On</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity Unit</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b text-left break-words whitespace-normal">{product.name}</td>
                <td className="py-4 px-6 border-b text-left">{product.code}</td>
                <td className="py-4 px-6 border-b text-left text-blue-500">{product.group}</td>
                <td className="py-4 px-6 border-b text-left">{product.addedOn}</td>
                <td className="py-4 px-6 border-b text-left">{product.quantity}</td>
                <td className="py-4 px-6 border-b text-left">{product.price}</td>
                <td className="py-4 px-6 border-b text-left">
                  <Link to="/ProductDetails"><button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300">View Details</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       
    </div>
  );
};

export default Inventory;
