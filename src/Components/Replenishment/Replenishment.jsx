import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import stl from "./Replenishment.module.css";
import ChartRep from "./RepChart/ChartRep";

import InStockIncon from "../IconComponents/InStockIcon";
import BoxIcon from "../IconComponents/BoxIcon";
import ThumbIcon from "../IconComponents/ThumbIcon";
import SearchCom from "../IconComponents/SearchCom";
import FilterIcon from "../IconComponents/FilterIcon";
import DateIcon from "../IconComponents/DateIcon";
import ExportIcon from "../IconComponents/ExportIcon";
import BigEyeIcon from "../IconComponents/BigEyeIcon";
import CartIcon from "../IconComponents/CartIcon";
import CreateReplenishmentOrder from "./CreateReplenishmentOrder/CreateReplenishmentOrder";
import RepOrderSuccessfullPopUp from "./RepOrderSuccessfullPopUp/RepOrderSuccessfullPopUp";

function Replenishment() {
  const [popup, setPopup] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    handleColor();
  }, []);

  const handleColor = (status) => {
    if (status === "In Stock") {
      return stl.instock;
    } else if (status === "Low in Stock") return stl.lowstock;
    else if (status === "Out of Stock") return stl.outofstock;
    return "";
  };

  const openCreateRep = () => {
    setPopup(true);
  };
  const handelSubmitRep = (status) => {
    setPopup(status);
    setSuccess(true);
  };
  const handleCancel = () => {
    setPopup(false);
  };
  const hideSuccess = () => {
    setSuccess(false);
  };
  return (
    <>
      <div id={stl.replenishment}>
        {popup && (
          <CreateReplenishmentOrder
            closePopUp={handelSubmitRep}
            cancel={handleCancel}
          />
        )}

        <div id={stl.repHeader}>
          <h2 id={stl.repHeading}>Replenishment</h2>
        </div>
        <div id={stl.repContentContainer}>
          <div id={stl.leftContent}>
            <div id={stl.repHeadDate}>
              <label htmlFor="repdate" id={stl.rdlbl}>
                Date :
              </label>
              <input type="date" name="repdate" id={stl.repdate} />
            </div>
            <div id={stl.repProduct}>
              <div>Product</div>
              <div className={stl.prdVal}>HP Victus</div>
            </div>
            <div id={stl.repProductId}>
              <div>Product ID</div>
              <div className={stl.prdVal}>54564</div>
            </div>
            <div id={stl.repProductStatus}>
              <div>Status</div>
              <div className={stl.prdVal}>Low In Stock</div>
            </div>
            <div id={stl.inStock}>
              <div className={stl.leftBox}>
                <div className={stl.stockTitle}>In-Stock</div>
                <div className={stl.leftBoxIcon}>
                  <div>
                    <InStockIncon />
                  </div>
                  <div className={stl.stockVal}>3</div>
                </div>
              </div>
            </div>
            <div id={stl.outOfStock}>
              <div className={stl.leftBox}>
                <div className={stl.stockTitle}>Out-Of-Stock</div>
                <div className={stl.leftBoxIcon}>
                  <div>
                    <BoxIcon />
                  </div>
                  <div className={stl.stockVal}>0</div>
                </div>
              </div>
            </div>
            <div id={stl.thumb}>
              <div className={stl.leftBox}>
                <div className={stl.stockTitle}>
                  Required for Fulfill the Stock
                </div>
                <div className={stl.leftBoxIcon}>
                  <div>
                    <ThumbIcon />
                  </div>
                  <div className={stl.stockVal}>30</div>
                </div>
              </div>
            </div>
          </div>
          <div id={stl.rightContent}>
            <div id={stl.rightTopContent}>
              <h3 id={stl.rightHeader}>Top Selling Product</h3>
              <div id={stl.tpSellingActionBtn}>
                <div id={stl.sellingProductSearch}>
                  <SearchCom padding="4px 5px" border="1px solid #00000059" />
                </div>
                <div id={stl.otherActionsBtn}>
                  <button className={stl.repBtn}>
                    Filter <FilterIcon />
                  </button>
                  <button className={stl.repBtn}>
                    {" "}
                    Date <DateIcon />
                  </button>
                  <button
                    type="button"
                    id={stl.exportBtn}
                    className={stl.repBtn}
                  >
                    <ExportIcon /> Export
                  </button>
                </div>
              </div>
              <div id={stl.topSellingTableContianer}>
                <div className={stl.dataContainer}>
                  <div className={stl.tableContainer}>
                    <table className={stl.theding}>
                      <thead>
                        <tr>
                          <th className={stl.theding}>Product Name</th>
                          <th className={stl.theding}>Code</th>
                          <th className={stl.theding}>Item Sold</th>
                          <th className={stl.theding}>Unit Price</th>
                          <th className={stl.theding}>In Stock</th>
                          <th className={stl.theding}>Total Value</th>
                          <th className={stl.theding}>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {products?.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.productName}</td>
                              <td>{item.code}</td>
                              <td>{item.itemSold}</td>
                              <td>{item.unitPrice}</td>
                              <td>{item.inStock}</td>
                              <td>{item.totalValue}</td>
                              <td className={handleColor(item.status)}>
                                {item.status}
                              </td>

                              <td>
                                <Link to="/tender-details">
                                  <button className={stl.actionBtn}>
                                    <BigEyeIcon />
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
            <div id={stl.rightBottomContent}>
              <div id={stl.chartHeader}>
                <h2 className={stl.chartHeading}>
                  Replenishment Forecast Chart
                </h2>
                <button id={stl.repCreateBtn} onClick={openCreateRep}>
                  <CartIcon />
                  Create
                </button>
              </div>
              <div>
                <ChartRep />
              </div>
            </div>
          </div>
        </div>
        {success && <RepOrderSuccessfullPopUp cancel={hideSuccess} />}
      </div>
    </>
  );
}

export default Replenishment;

const products = [
  {
    productName: "Laptop",
    code: "P001",
    itemSold: 150,
    unitPrice: 1000,
    inStock: 50,
    totalValue: 50000,
    status: "In Stock",
  },
  {
    productName: "Smartphone",
    code: "P002",
    itemSold: 300,
    unitPrice: 800,
    inStock: 10,
    totalValue: 8000,
    status: "Low in Stock",
  },
  {
    productName: "Tablet",
    code: "P003",
    itemSold: 120,
    unitPrice: 600,
    inStock: 0,
    totalValue: 0,
    status: "Out of Stock",
  },
  {
    productName: "Headphones",
    code: "P004",
    itemSold: 500,
    unitPrice: 100,
    inStock: 200,
    totalValue: 20000,
    status: "In Stock",
  },
  {
    productName: "Monitor",
    code: "P005",
    itemSold: 80,
    unitPrice: 300,
    inStock: 5,
    totalValue: 1500,
    status: "Low in Stock",
  },
];

// console.log(products);
