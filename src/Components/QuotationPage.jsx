import React from 'react';
import { AiFillDelete, AiFillStar, AiOutlineSearch, AiFillFilter } from 'react-icons/ai';

const QuotationPage = () => {
  const products = [
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 198, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 68, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 265, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 354, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 451, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 235, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
    { name: 'Quantum Laptop X100', category: 'Electronics', quantity: 235, unitPrice: 65000, taxRate: '5.00%', ratings: 5 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quotation</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Create
          </button>
          <div className="relative">
            <input
              type="text"
              className="bg-white border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
            <AiOutlineSearch className="absolute top-2.5 left-3 text-gray-500" />
          </div>
          <button className="text-gray-600">
            <AiFillFilter size={24} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full leading-normal m-5">
          <thead>
            <tr>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Product Name</th>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Category</th>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Quantity</th>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Unit Price</th>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Tax Rate</th>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Ratings</th>
              <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">{product.name}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">{product.category}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">{product.quantity}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">₹ {product.unitPrice.toFixed(2)}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">{product.taxRate}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">
                  {Array.from({ length: product.ratings }, (_, i) => (
                    <AiFillStar key={i} className="text-yellow-500 inline-block" />
                  ))}
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-200 mr-2">
                    View Details
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition duration-200">
                    <AiFillDelete size={27} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm">Page 1 of 100</p>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 text-gray-600 py-1 px-3 rounded-lg hover:bg-gray-300">Prev</button>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuotationPage;
