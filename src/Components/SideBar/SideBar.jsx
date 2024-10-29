import React, { useState } from "react";
import { Link } from "react-router-dom";
import stl from "./Sidebar.module.css"; // Add your sidebar styles here
// import DashboardMIcon from "../IconComponents/DashboardMIcon";

const SideBar = () => {
  const [inventorySub, setInventorySub] = useState(false);
  const [productSub, setProductSub] = useState(false);

  const toggleSubmenu = () => {
    setInventorySub(!inventorySub);
  };
  const toggleProductMenu = () => {
    setProductSub(!productSub);
  };

  return (
    <div className={stl.sidebar}>
      <div className={stl.sidebarHeader}>
        <div id={stl.logo}>
          <div className={stl.logoContainer}>
            <Link to="/">
              <img src="./assets/logo.png" alt="logo" />
            </Link>
          </div>
          <div className={stl.logoContainer}>
            <Link to="/">
              <img src="./assets/inventoryLogo.png" alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <div onClick={toggleSubmenu} className={stl.menuItem}>
            <Link to="/inventory">Inventory</Link>

            <span className={`submenu-icon ${inventorySub ? "open" : ""}`}>
              {inventorySub ? "▲" : "▼"}
            </span>
          </div>
          {inventorySub && (
            <ul className={stl.submenu}>
              <li>
                <Link to="/inventory">All Inventory</Link>
              </li>
              <li>
                <Link to="/InventoryTrackingPage">Inventory Tracking</Link>
              </li>
              <li>
                <Link to="/QuotationPage">Quotation</Link>
              </li>
              <li>
                <Link to="/">Proposals</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/WareHouse">Warehouse Management</Link>
        </li>
        <li>
          <div onClick={toggleProductMenu} className={stl.menuItem}>
            <Link to="/product">Product</Link>

            <span className={`submenu-icon ${productSub ? "open" : ""}`}>
              {productSub ? "▲" : "▼"}
            </span>
          </div>
          {productSub && (
            <ul className={stl.submenu}>
              <li>
                <Link to="/Product">Product Management</Link>
              </li>
              <li>
                <Link to="/purchase-order">Purchase Order</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/replenishment">Replenishment</Link>
        </li>
        <li>
          <Link to="/VendorManagement">Vendor Management</Link>
        </li>
        <li>
          <Link to="/client">Client Management</Link>
        </li>
        <li>
          <Link to="/tender">Tender Management</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
