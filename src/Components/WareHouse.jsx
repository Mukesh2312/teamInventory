import { useState } from "react";
import Chart from "./Chart";
import BarChartComponent from "./BarChat";
import PieChartComponents from "./PieChart";
import InventoryTable from "./InventoryTable";
import NewWarehouseComponents from "./NewWarehouseComponents";

function WareHouse() {
  const [open, setOpen] = useState(false);
  const [isCreate, setCreate] = useState(false);

  return (
    <div className="p-6 bg-gray-50">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <div className="flex justify-between items-center space-x-4">
          <h1 className="text-3xl font-semibold">Warehouse Management</h1>
          <button className=" text-black-400 font-semibold py-1 px-1 rounded-md  bg-transparent border border-gray-500">
            <select>
              <option>Warehouse</option>
              <option></option>
              <option></option>
            </select>
          </button>
        </div>

        <button
          onClick={() => setCreate(!isCreate)}
          className="text-blue-500 py-2 px-4 rounded-lg  bg-transparent border border-gray-500"
        >
          New Warehouse
        </button>
      </header>
      {isCreate && <NewWarehouseComponents />}

      {/* Main Content Section */}
      <section className="grid grid-cols-3 gap-6 mt-8">
        {/* Inventory Levels */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">Current Inventory Levels:</h2>
          <p className="mt-2 text-sm">
            <div className="flex justify-between rounded-lg">
              <div>
                Total Items - 1,500 Items <br />
                Low Stock - 800 Items
              </div>
              <div>
                High Stock - 800 Items
                <br /> Out of Stock - 55 Items
              </div>
            </div>
          </p>
          <div className="mt-4">
            <label>Inventory Distribution by Stock Level</label>
            <select className="border ml-2 rounded">
              <option>Today</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
          {/* Bar Chart Simulation */}
          <div className="w-full mt-4 bg-gray-100 h-52 rounded-lg">
            {/* Placeholder for Line Chart */}

            <div className="h-full w-full">
              <BarChartComponent />
            </div>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">Order Status:</h2>
          <p className="mt-2 text-sm">
            <div className="flex justify-between rounded-lg">
              <div>Pending Orders - 15 </div>
              <div>Progress Orders - 30</div>
            </div>
            Completed Orders - 85
          </p>
          <div className="mt-4">
            <label>Daily Order Trends for the Month</label>
            <select className="border ml-2 rounded">
              <option>Today</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
          {/* Line Chart Simulation */}
          <div className="w-full mt-4 bg-gray-100 h-52 rounded-lg">
            {/* Placeholder for Line Chart */}

            <div className="h-full w-full">
              <Chart />
            </div>
          </div>
        </div>

        {/* Tracking Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">Tracking Item Status:</h2>
          <p className="mt-2 text-sm">
            <div className="flex justify-between rounded-lg">
              <div> Pending Shipments - 5 </div>
              <div>In-Transit Shipments - 12</div>
            </div>
            Delivered Shipments - 45
          </p>
          <div className="mt-4">
            <label>Distribution of Shipment Status</label>
            <select className="border ml-2 rounded">
              <option>Today</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
          {/* Pie Chart Simulation */}
          <div className="w-full mt-4 bg-gray-100 h-52 rounded-lg">
            {/* Placeholder for Pie Chart */}
            <div className="h-full w-full">
              <PieChartComponents />
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management Table */}
      <section className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold float-left">
          Inventory Management
        </h2>
        <table className=" bg-blue-50 table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Item Name</th>
              <th className="px-4 py-2">Barcode/RFID</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">
                <button onClick={() => setOpen(!open)}>See All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Widget A</td>
              <td className="border px-4 py-2">123456789012</td>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">Zone A</td>
              <td className="border px-4 py-2">In Stock</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Widget B</td>
              <td className="border px-4 py-2">987654321098</td>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">Zone B</td>
              <td className="border px-4 py-2">Low Stock</td>
            </tr>
          </tbody>
        </table>
      </section>

      {open && <InventoryTable />}

      {/* Orders and Shipments Table */}
      <section className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="float-left text-xl font-semibold">
          Orders and Shipments Table
        </h2>
        <table className=" bg-blue-50 table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Total Items</th>
              <th className="px-4 py-2">
                <button>See All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1001</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">2024-08-10</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2">20</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1002</td>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">2024-08-11</td>
              <td className="border px-4 py-2">Completed</td>
              <td className="border px-4 py-2">50</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Shipment List Table */}
      <section className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="float-left text-xl font-semibold">Shipment List</h2>
        <table className="bg-blue-50 table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Tracking ID</th>
              <th className="px-4 py-2">Destination</th>
              <th className="px-4 py-2">Shipment Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Total Items</th>
              <th className="px-4 py-2">
                <button>See All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">S001</td>
              <td className="border px-4 py-2">Warehouse A</td>
              <td className="border px-4 py-2">2024-08-10</td>
              <td className="border px-4 py-2">In-Transit</td>
              <td className="border px-4 py-2">20</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">S002</td>
              <td className="border px-4 py-2">Warehouse B</td>
              <td className="border px-4 py-2">2024-08-11</td>
              <td className="border px-4 py-2">Delivered</td>
              <td className="border px-4 py-2">35</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default WareHouse;
