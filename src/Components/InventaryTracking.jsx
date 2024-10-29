import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import {Link} from 'react-router-dom'

const InventoryTracking = () => {
  const [filter, setFilter] = useState('');

  const inventoryData = [
    { orderId: '50012', type: 'Electronics', items: 1, service: 'Priority', trackingCode: '5000000012123456', orderDate: '20 Jan 2023', receivedDate: '---------' },
    { orderId: '50013', type: 'Clothes', items: 3, service: 'Standard', trackingCode: '5000000031123456', orderDate: '22 Jan 2023', receivedDate: '---------' },
    { orderId: '50012', type: 'Electronics', items: 1, service: 'Priority', trackingCode: '5000000012123456', orderDate: '20 Jan 2023', receivedDate: '---------' },
    { orderId: '50012', type: 'Furniture', items: 6, service: 'Priority', trackingCode: '5000000012123456', orderDate: '25 Jan 2023', receivedDate: '30 jan 2023' },
    { orderId: '50012', type: 'Electronics', items: 1, service: 'Priority', trackingCode: '5000000012123456', orderDate: '27 Jan 2023', receivedDate: '---------' },
    { orderId: '50012', type: 'Electronics', items: 1, service: 'Priority', trackingCode: '5000000012123456', orderDate: '25 Jan 2023', receivedDate: '---------' },
    { orderId: '50012', type: 'Electronics', items: 1, service: 'Priority', trackingCode: '5000000012123456', orderDate: '30 Jan 2023', receivedDate: '---------' },
    { orderId: '50012', type: 'Electronics', items: 1, service: 'Priority', trackingCode: '5000000012123456', orderDate: '22 Jan 2023', receivedDate: '---------' },
    // Add more rows as needed
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Inventory Tracking</h1>

      {/* Filter Section */}
      <div className="flex items-center justify-between mb-6">
       

      <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 pl-10 w-80"
            placeholder="Search"
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
        <select
          className="bg-white border border-gray-300 p-2 rounded-lg"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">Sell</option>
          <option value="sell">Sell</option>
          <option value="buy">Buy</option>
        </select>

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

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border-b">ORDER ID</th>
              <th className="text-left p-3 border-b">Type Of Product</th>
              <th className="text-left p-3 border-b">ITEM</th>
              <th className="text-left p-3 border-b">SHIPPING SERVICE</th>
              <th className="text-left p-3 border-b">TRACKING CODE</th>
              <th className="text-left p-3 border-b">Ordered DATE</th>
              <th className="text-left p-3 border-b">Received DATE</th>
              <th className="text-left p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{item.orderId}</td>
                <td className="p-3 text-blue-500">{item.type}</td>
                <td className="p-3">{item.items}</td>
                <td className="p-3">
                  <span className={`inline-block w-2 h-2 rounded-full ${item.service === 'Priority' ? 'bg-blue-500' : 'bg-pink-500'} mr-2`}></span>
                  {item.service}
                </td>
                <td className="p-3">{item.trackingCode}</td>
                <td className="p-3">{item.orderDate}</td>
                <td className="p-3">{item.receivedDate}</td>
                <td className="p-3 flex items-center gap-2">
                 <Link to="/InventoryTrackingPage"> <button className="bg-blue-500 text-white px-4 py-1 rounded-full">View Details</button></Link>
                  <button className="text-red-500">
                  <AiFillDelete size={24} />
                           </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm">Page 1 of 100</p>
        <div className="flex items-center gap-2">
          <button className="bg-gray-200 px-3 py-1 rounded">Prev</button>
          <button className="bg-gray-200 px-3 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryTracking;
