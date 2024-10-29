import React from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";

const InventoryTrackingPage = () => {
  // Function to close the page
  const handleClosePage = () => {
    window.close(); // This will try to close the current window or tab
  };

  return (
    <div className="relative p-6 bg-gray-100 min-h-screen flex flex-col space-y-6">
      {/* Close Icon */}
      <button
        onClick={handleClosePage}
        className="absolute top-4 right-4  "
      >
        <AiFillCloseCircle size={40} />
      </button>

      {/* Top Section */}
      <div className="flex space-x-6">
        {/* Product Information */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Lantus (100 Units)</h2>
            <div className="flex space-x-2">
              <button className="text-blue-500">
                <AiFillEdit size={20} />
              </button>
              <button className="text-red-500">
                <AiFillCloseCircle size={20} />
              </button>
            </div>
          </div>
          <p className="text-lg">Id: 50012</p>
          <div className="flex mt-4 space-x-4">
            <p className="text-sm">
              Load Quantity <span className="text-blue-500">100 Items</span>
            </p>
            <p className="text-sm">
              Load Weight <span className="text-blue-500">100 g</span>
            </p>
            <p className="text-sm">
              Load Volume <span className="text-blue-500">10/40*100</span>
            </p>
          </div>
          <img
            className="m-5"
            src="https://thumbs.dreamstime.com/b/lantus-insulin-glargine-injection-units-cartridge-diabetic-patients-cairo-egypt-may-lantus-insulin-glargine-injection-units-219911731.jpg"
            alt="Lantus"
          />
        </div>

        {/* Live Tracking Of Order */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-4">Live Tracking Of Order</h2>
            <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              <AiFillEdit className="mr-2" />
              Edit
            </button>
          </div>
          <div className="flex items-center justify-between mt-5">
            {/* Order tracking steps */}
            {["Order Placement", "Pick Inventory", "Sorting", "Packing", "Shipping"].map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-xs">{step}</p>
                </div>
                {index < 4 && <div className="flex-1 h-1 bg-blue-500 mx-2"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex space-x-6">
        {/* Warehouse Inventory */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
          <h2 className="text-lg font-semibold mb-4">Warehouse Inventory</h2>
          <div className="mb-4 flex space-x-4">
            <div className="border-r-2 border-gray-500 pr-4">
              <p>Inventory Turnover Rate:</p>
              <div className="flex items-center mt-4">
                <h1 className="mr-4 font-extrabold">3,57</h1>
                <button className="px-2 py-1 bg-green-200 text-green-800 rounded-lg">
                  <span className="inline-block transform rotate-[55deg]">⇧</span> &nbsp; 2.5%
                </button>
              </div>
              <h2 className="mt-4">Day/Week/ <span className="text-blue-500">Month</span></h2>
            </div>
            <div className="pl-4">
              <p>Sale-Through Rate:</p>
              <div className="flex items-center mt-4">
                <h1 className="mr-4 font-extrabold">95%</h1>
                <button className="px-2 py-1 bg-green-200 text-green-800 rounded-lg">
                  <span className="inline-block transform rotate-[55deg]">⇧</span> &nbsp; 3.7%
                </button>
              </div>
              <h2 className="mt-4">Day/Week/ <span className="text-blue-500">Month</span></h2>
            </div>
          </div>
          <p className="font-semibold">Replenishment Recommendation</p>
          <div className="flex justify-around mt-5">
            <p className="font-semibold text-lg">₹ 15,569.00 <br /><span className="font-thin">IN Pharmacis</span></p>
            <button className="px-1 py-0 bg-red-100 text-red-800 rounded-xl">
              <span className="inline-block transform rotate-[155deg]">⇧</span> &nbsp; 3.7%
            </button>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-red-500">11 Out of Stock</p>
            <p className="text-yellow-500">0 Under Stock</p>
          </div>
        </div>

        {/* Product Order History */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
          <h2 className="text-lg font-semibold mb-4">Product Order History</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr>
                <th className="border-b p-2">ID</th>
                <th className="border-b p-2">Last Order Date</th>
                <th className="border-b p-2">Ordered Amount</th>
                <th className="border-b p-2">Warehouse</th>
                <th className="border-b p-2">Delivery Date</th>
                <th className="border-b p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[89622, 89623, 89624, 87654, 87655, 87659].map((id) => (
                <tr key={id}>
                  <td className="border-b p-2">{id}</td>
                  <td className="border-b p-2">21.06.2024</td>
                  <td className="border-b p-2">256</td>
                  <td className="border-b p-2">Warehouse {id}</td>
                  <td className="border-b p-2">30.07.2024</td>
                  <td className="border-b p-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <AiFillEdit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryTrackingPage;
