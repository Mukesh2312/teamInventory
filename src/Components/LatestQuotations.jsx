import React, { useState } from "react";

const quotationsData = [
  { id: "TR001", date: "2024-07-01", productName: "Laptop", quantity: 800, location: "warehouse", notes: "Done" },
  { id: "TR002", date: "2024-07-15", productName: "Mobile", quantity: 856, location: "store", notes: "Done" },
  { id: "TR003", date: "2024-07-30", productName: "Headphone", quantity: 258, location: "warehouse", notes: "Pending" },
];

const LatestQuotations = () => {
  const [activeTab, setActiveTab] = useState("quotations");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded-lg ${activeTab === 'tenders' ? 'bg-gray-200 shadow-md' : ''}`}
          onClick={() => setActiveTab("tenders")}
        >
          Latest Tenders
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${activeTab === 'quotations' ? 'bg-gray-200 shadow-md' : ''}`}
          onClick={() => setActiveTab("quotations")}
        >
          Latest Quotations
        </button>
      </div>

      {/* Filter and Table */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Filter & Short</h2>
        <div className="flex items-center space-x-2">
        <button className="flex items-center bg-gray-200 p-2 rounded-md">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586L3.293 6.707A1 1 0 013 6V4z" />
  </svg>
  Filter
</button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full table-auto bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Quotation ID</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Product Name</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          {quotationsData.map((quote) => (
            <tr key={quote.id} className="border-b">
              <td className="p-3">{quote.id}</td>
              <td className="p-3">{quote.date}</td>
              <td className="p-3 font-semibold">{quote.productName}</td>
              <td className="p-3">{quote.quantity}</td>
              <td className="p-3">{quote.location}</td>
              <td className={`p-3 ${quote.notes === 'Done' ? 'text-green-600' : 'text-red-600'}`}>{quote.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg">Prev</button>
          <button className="px-3 py-1 border rounded-lg">Next</button>
        </div>
        <div className="flex items-center space-x-2">
          <span>Page: 1 of 5</span>
          <select className="border p-1 rounded-lg">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LatestQuotations;
