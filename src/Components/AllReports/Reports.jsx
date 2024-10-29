import React from "react";
import { Link } from "react-router-dom";
import stl from "./Reports.module.css";

function Reports() {
  return (
    <>
      <div id={stl.reports}>
        <div id={stl.reportHeader}>
          <div id={stl.reportInnerHder}>
            <h2 id={stl.reportTitle}>All Reports</h2>
            <div id={stl.graphBtn}>
              <Link to="/graph">
                <button>Veiw in Graph</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={stl.dataContainer}>
          <div className={stl.tableContainer}>
            <table className={stl.theding}>
              <thead>
                <tr>
                  <th className={stl.theding}>Sells Person</th>
                  <th className={stl.theding}>Distributer</th>
                  <th className={stl.theding}>Product</th>
                  <th className={stl.theding}>Date</th>
                  <th className={stl.theding}>No of product sold</th>
                  <th className={stl.theding}>Region</th>
                  <th className={stl.theding}>Company</th>
                </tr>
              </thead>

              <tbody>
                {dataObjects?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.sellsPerson}</td>
                      <td>{item.distributer}</td>
                      <td>{item.product}</td>
                      <td>{item.date}</td>
                      <td id={stl.centerTxt}>{item.noOfProductSold}</td>
                      <td>{item.region}</td>
                      <td>{item.company}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;

const dataObjects = [
  {
    sellsPerson: "John Doe",
    distributer: "ABC Distributors",
    product: "Laptop",
    date: "2024-10-20",
    noOfProductSold: 20,
    region: "North",
    company: "TechCorp",
  },
  {
    sellsPerson: "Jane Smith",
    distributer: "XYZ Distributors",
    product: "Smartphone",
    date: "2024-10-19",
    noOfProductSold: 50,
    region: "South",
    company: "MobileWorld",
  },
  {
    sellsPerson: "Michael Johnson",
    distributer: "LMN Distributors",
    product: "Tablet",
    date: "2024-10-18",
    noOfProductSold: 30,
    region: "East",
    company: "GadgetPro",
  },
  {
    sellsPerson: "Emily Davis",
    distributer: "OPQ Distributors",
    product: "Smartwatch",
    date: "2024-10-17",
    noOfProductSold: 25,
    region: "West",
    company: "WearableTech",
  },
  {
    sellsPerson: "Chris Wilson",
    distributer: "DEF Distributors",
    product: "Headphones",
    date: "2024-10-16",
    noOfProductSold: 60,
    region: "North",
    company: "AudioGear",
  },
  {
    sellsPerson: "Jessica Lee",
    distributer: "GHI Distributors",
    product: "Monitor",
    date: "2024-10-15",
    noOfProductSold: 15,
    region: "South",
    company: "VisionTech",
  },
  {
    sellsPerson: "David Brown",
    distributer: "JKL Distributors",
    product: "Keyboard",
    date: "2024-10-14",
    noOfProductSold: 40,
    region: "East",
    company: "InputDevicesInc",
  },
  {
    sellsPerson: "Sophia Martinez",
    distributer: "UVW Distributors",
    product: "Mouse",
    date: "2024-10-13",
    noOfProductSold: 35,
    region: "West",
    company: "PointingTech",
  },
];
