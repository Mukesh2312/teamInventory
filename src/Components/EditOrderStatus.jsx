import React, { useState } from 'react';

const EditOrderStatus = () => {
  const [statuses, setStatuses] = useState({
    orderPlaced: true,
    inventoryPicked: true,
    sorting: true,
    packing: true,
    shipped: false,
  });

  const handleStatusChange = (status) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [status]: !prevStatuses[status],
    }));
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-center mb-4 bg-sky-500 p-4">Edit</h2>
      <div className="space-y-4">
        {Object.entries(statuses).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleStatusChange(key)}
              className="w-6 h-6 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update</button>
        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">Cancel</button>
      </div>
    </div>
  );
};

export default EditOrderStatus;
