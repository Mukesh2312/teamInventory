import React from "react";
import stl from "./ProductManagement.module.css";
import FilterIcon from "../IconComponents/FilterIcon";
import { Link, Outlet } from "react-router-dom";

function ProductManagement() {
  return (
    <>
      <Outlet />
      {/* <h2>Product Management</h2> */}
      <div id={stl.productMng}>
        <div className={stl.headContent}>
          <h2>Product Management</h2>
          <Link to="/add-product">
            <button>+ Add Product</button>
          </Link>
        </div>
        <div className={stl.productPage}>
          <div className={stl.productStatus}>
            <div className={`${stl.productStockDetails}, ${stl.prdItem}`}>
              <h3 className={stl.prHeading}>Product Details</h3>
              <div className={stl.stockList}>
                <div>
                  <p>Out Of Stock Item</p>
                  <p>3</p>
                </div>
                <div>
                  <p>Total Item Group</p>
                  <p>15</p>
                </div>
                <div>
                  <p>Total Items</p>
                  <p>1450</p>
                </div>
              </div>
            </div>
            <div className={`${stl.topSellingItems}`}>
              <h3 className={stl.prHeading}>Top Selling Items</h3>
              <div className={stl.topSelingItemList}>
                <div>
                  <div className={stl.tsImg}>
                    <img src="./assets/laptop.png" alt="#" />
                    <p>Product Name</p>
                  </div>
                  <div className={stl.tsImg}>
                    <img src="./assets/laptop.png" alt="#" />
                    <p>Product Name</p>
                  </div>
                  <div className={stl.tsImg}>
                    <img src="./assets/laptop.png" alt="#" />
                    <p>Product Name</p>
                  </div>
                  <div className={stl.tsImg}>
                    <img src="./assets/laptop.png" alt="#" />
                    <p>Product Name</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${stl.topSellingItems}, ${stl.prdItem}`}>
              <h3 className={stl.prHeading}>Emergency Required Items</h3>
              <div className={stl.emrItem}>
                <div className={stl.requiredItem}>
                  <div className={stl.rqrdItm}>
                    <img src="./assets/laptop.png" alt="laptop" />
                    <p>Product Name</p>
                  </div>
                  <p>Out Of Stock</p>
                </div>
                <div className={stl.requiredItem}>
                  <div className={stl.rqrdItm}>
                    <img src="./assets/laptop.png" alt="laptop" />
                    <p>Product Name</p>
                  </div>
                  <p>Out Of Stock</p>
                </div>
                <div className={stl.requiredItem}>
                  <div className={stl.rqrdItm}>
                    <img src="./assets/laptop.png" alt="laptop" />
                    <p>Product Name</p>
                  </div>
                  <p>Out Of Stock</p>
                </div>
              </div>
            </div>
          </div>
          <div className={stl.searchContainer}>
            <input
              type="search"
              id={stl.prSearch}
              placeholder="Search Product"
            />
            <div className={stl.filContainer}>
              <FilterIcon />
            </div>
          </div>
          <div className={stl.productHistory}>
            <div className={stl.tableContainer}>
              <table className={stl.theding}>
                <thead>
                  <tr>
                    <th className={stl.theding}>Product Name</th>
                    <th className={stl.theding}>Code</th>
                    <th className={stl.theding}>Item Group</th>
                    <th className={stl.theding}>Last Purchase</th>
                    <th className={stl.theding}>Quantity Unit</th>
                    <th className={stl.theding}>Price</th>
                    <th className={stl.theding}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {products?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.productName}</td>
                        <td>{item.code}</td>
                        <td>{item.itemGroup}</td>
                        <td>{item.lastPurchase}</td>
                        <td>{item.quantityUnit}</td>
                        <td>{item.price}</td>

                        <td>
                          <Link>
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

export default ProductManagement;

let products = [
  {
    productName: "Laptop",
    code: "LP1001",
    itemGroup: "Electronics",
    lastPurchase: "2024-09-15",
    quantityUnit: "pcs",
    price: 1500,
  },
  {
    productName: "Office Chair",
    code: "OC2001",
    itemGroup: "Furniture",
    lastPurchase: "2024-08-20",
    quantityUnit: "pcs",
    price: 300,
  },
  {
    productName: "Printer Paper",
    code: "PP3001",
    itemGroup: "Stationery",
    lastPurchase: "2024-09-01",
    quantityUnit: "reams",
    price: 25,
  },
  {
    productName: "Mouse",
    code: "MS4001",
    itemGroup: "Electronics",
    lastPurchase: "2024-10-05",
    quantityUnit: "pcs",
    price: 50,
  },
  {
    productName: "Desk Lamp",
    code: "DL5001",
    itemGroup: "Furniture",
    lastPurchase: "2024-07-10",
    quantityUnit: "pcs",
    price: 75,
  },
  {
    productName: "Notebook",
    code: "NB6001",
    itemGroup: "Stationery",
    lastPurchase: "2024-09-25",
    quantityUnit: "pcs",
    price: 5,
  },
  {
    productName: "Keyboard",
    code: "KB7001",
    itemGroup: "Electronics",
    lastPurchase: "2024-09-05",
    quantityUnit: "pcs",
    price: 80,
  },
  {
    productName: "Desk Organizer",
    code: "DO8001",
    itemGroup: "Furniture",
    lastPurchase: "2024-08-18",
    quantityUnit: "pcs",
    price: 20,
  },
  {
    productName: "Pen",
    code: "PN9001",
    itemGroup: "Stationery",
    lastPurchase: "2024-10-01",
    quantityUnit: "packs",
    price: 12,
  },
  {
    productName: "Headphones",
    code: "HP1001",
    itemGroup: "Electronics",
    lastPurchase: "2024-09-29",
    quantityUnit: "pcs",
    price: 120,
  },
];
