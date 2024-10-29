import React from "react";
import {
  FaDollarSign,
  FaShoppingCart,
  FaHourglassHalf,
  FaBoxOpen,
  FaBell,
  FaSyncAlt,
} from "react-icons/fa"; // Importing relevant icons
import ChartComponents from "./ChartComponents";
import PieChartComponents from "./PieChartComponents";
import LatestQuotations from "./LatestQuotations";

const Dashboard = () => {
  return (
    <div
      className="bg-gray-50 p-8 min-h-screen"
      style={{ background: "#E5E4E0" }}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Inventory Dashboard</h1>
        <h3>Hii Welcome!</h3>
        <select className="border p-2 rounded">
          <option>Select Company</option>
          <option>Unisol</option>
          <option>surisol</option>
          <option>Enviro Solutions</option>
          <option>Ignite Sphere</option>
        </select>
      </div>

      <div className="grid grid-cols-6 gap-6 mb-8">
        {/* Total Inventory Value */}
        <Card
          title="Total Inventory Value"
          value="1,234,567"
          icon={<FaDollarSign />}
        />

        {/* Total Orders */}
        <Card title="Total Orders" value="432" icon={<FaShoppingCart />} />

        {/* Pending Orders */}
        <Card title="Pending Orders" value="432" icon={<FaHourglassHalf />} />

        {/* Recent Orders */}
        <Card title="Recent Orders" value="12" icon={<FaBoxOpen />} />

        {/* Low Stock Alerts */}
        <Card title="Low Stock Alerts" value="12" icon={<FaBell />} />

        {/* Replenishment Actions */}
        <Card title="Replenishment Actions" value="14" icon={<FaSyncAlt />} />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Data Visualizations</h3>
          <div className="flex justify-between mb-4">
            <button className="p-2 border-b-2 border-gray-800">
              Inventory Levels
            </button>
            <button className="p-2">Order Trends</button>
          </div>
          <ChartComponents />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="flex mb-4">
            <button className="mr-2 p-2 bg-blue-500 text-white rounded">
              Add New Product
            </button>
            <button className="mr-2 p-2 bg-green-500 text-white rounded">
              Create New Order
            </button>
            <button className="p-2 bg-gray-500 text-white rounded">
              Generate Report
            </button>
          </div>
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="border px-4 py-2">Product ID</th>
                <th className="border px-4 py-2">Product Name</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                id="PR001"
                name="Laptop"
                quantity="15"
                date="2024-07-01"
                price="25000"
                location="USA"
              />
              <TableRow
                id="PR002"
                name="Headphone"
                quantity="65"
                date="2024-07-10"
                price="8500"
                location="IND"
              />
              <TableRow
                id="PR003"
                name="Mobile"
                quantity="20"
                date="2024-07-15"
                price="60000"
                location="GER"
              />
              {/* Add more rows as needed */}
            </tbody>
          </table>

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
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Activities</h3>
          <LatestQuotations />
        </div>

        <div className="bg-white p-4 rounded shadow ">
          <div className="flex justify-between">
            <div>
              {" "}
              <h3 className="text-lg font-bold mb-4">Warehouse Utilization</h3>
            </div>
            <div class="relative inline-block text-left">
              <button
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black  bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Warehouse
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-full h-48">
            <PieChartComponents />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
    {" "}
    {/* Flex column and center all content */}
    <div className="text-3xl mb-2">{icon}</div> {/* Icon centered */}
    <div>
      <h2 className="text-sm font-serif mb-1">{title}</h2>{" "}
      {/* Title centered */}
      <p className="text-xl">{value}</p> {/* Value centered */}
    </div>
  </div>
);

const TableRow = ({ id, name, quantity, date, price, location }) => (
  <tr>
    <td className="border px-4 py-2">{id}</td>
    <td className="border px-4 py-2">{name}</td>
    <td className="border px-4 py-2">{quantity}</td>
    <td className="border px-4 py-2">{date}</td>
    <td className="border px-4 py-2">{price}</td>
    <td className="border px-4 py-2">{location}</td>
  </tr>
);

export default Dashboard;
