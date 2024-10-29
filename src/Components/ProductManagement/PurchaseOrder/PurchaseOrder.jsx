import React from "react";
import stl from "./PurchaseOrder.module.css";
import PlusCirleIcon from "../../IconComponents/PlusCircleIcon";
import SearchIcon from "../../IconComponents/SearchIcon";
import FilterIcon from "../../IconComponents/FilterIcon";
import SortIcon from "../../IconComponents/SortIcon";
import ThreeDot from "../../IconComponents/ThreeDot";
import { Link } from "react-router-dom";

function PurchaseOrder() {
  return (
    <>
      <div id={stl.purchaseOrder}>
        <div id={stl.headerContainer}>
          <h2 id={stl.purchaseHeading}>Purchase Order</h2>
          <div id={stl.headerBtns}>
            <button id={stl.allBtn}>All</button>
            <div id={stl.rightBtns}>
              <Link
                to="/create-purchase-order"
                style={{ textDecoration: "none" }}
              >
                <button id={stl.createPbtn}>
                  <PlusCirleIcon />
                  Create Purchase Order
                </button>
              </Link>
              <button className={stl.quickBtn}>
                <SearchIcon />
              </button>
              <button className={stl.quickBtn}>
                <FilterIcon />
              </button>
              <button className={stl.quickBtn}>
                <SortIcon />
              </button>
              <button className={stl.quickBtn}>
                <ThreeDot />
              </button>
            </div>
          </div>
        </div>
        <div id={stl.purchaseOrderTable}>
          <div className={stl.dataContainer}>
            <div className={stl.tableContainer}>
              <table className={stl.theding}>
                <thead>
                  <tr>
                    <th className={stl.theding}>Purchase Order</th>
                    <th className={stl.theding}>Supplier</th>
                    <th className={stl.theding}>Destination</th>
                    <th className={stl.theding}>QTY</th>
                    <th className={stl.theding}>Received</th>
                    <th className={stl.theding}>Total</th>
                    <th className={stl.theding}>Ordered Date</th>
                    <th className={stl.theding}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {orders?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td id={stl.firstTD}>{item.purchaseOrder}</td>
                        <td>{item.supplier}</td>
                        <td>{item.destination}</td>
                        <td>{item.quantity}</td>
                        <td>{item.received}</td>
                        <td>{item.total}</td>
                        <td>{item.orderedDate}</td>

                        <td>
                          <Link to="/purchase-bill">
                            <button className={stl.actionBtn}>
                              View Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseOrder;

const orders = [
  {
    purchaseOrder: "PO12345",
    supplier: "ABC Suppliers",
    destination: "Warehouse 1",
    quantity: 100,
    received: 80,
    total: 5000,
    orderedDate: "2024-10-01",
  },
  {
    purchaseOrder: "PO12346",
    supplier: "XYZ Distributors",
    destination: "Warehouse 2",
    quantity: 150,
    received: 150,
    total: 7500,
    orderedDate: "2024-10-02",
  },
  {
    purchaseOrder: "PO12347",
    supplier: "Global Supplies",
    destination: "Warehouse 3",
    quantity: 200,
    received: 180,
    total: 10000,
    orderedDate: "2024-10-03",
  },
  {
    purchaseOrder: "PO12348",
    supplier: "Prime Wholesale",
    destination: "Warehouse 1",
    quantity: 120,
    received: 120,
    total: 6000,
    orderedDate: "2024-10-04",
  },
  {
    purchaseOrder: "PO12349",
    supplier: "Best Traders",
    destination: "Warehouse 4",
    quantity: 90,
    received: 70,
    total: 4500,
    orderedDate: "2024-10-05",
  },
  {
    purchaseOrder: "PO12350",
    supplier: "Alpha Corp",
    destination: "Warehouse 2",
    quantity: 160,
    received: 160,
    total: 8000,
    orderedDate: "2024-10-06",
  },
  {
    purchaseOrder: "PO12351",
    supplier: "Omega Enterprises",
    destination: "Warehouse 3",
    quantity: 130,
    received: 110,
    total: 6500,
    orderedDate: "2024-10-07",
  },
  {
    purchaseOrder: "PO12352",
    supplier: "Delta Logistics",
    destination: "Warehouse 1",
    quantity: 180,
    received: 180,
    total: 9000,
    orderedDate: "2024-10-08",
  },
  {
    purchaseOrder: "PO12353",
    supplier: "Supply Chain Inc.",
    destination: "Warehouse 2",
    quantity: 140,
    received: 100,
    total: 7000,
    orderedDate: "2024-10-09",
  },
  {
    purchaseOrder: "PO12354",
    supplier: "Global Traders",
    destination: "Warehouse 3",
    quantity: 170,
    received: 150,
    total: 8500,
    orderedDate: "2024-10-10",
  },
];
