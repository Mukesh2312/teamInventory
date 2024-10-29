import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import stl from "./CreateReplenishmentOrder.module.css";

function CreateReplenishmentOrder({ closePopUp, cancel }) {
  const navigate = useNavigate();

  return (
    <div style={outPopContainer}>
      <div style={outPopContainer}>
        <div style={popupStyles}>
          <div id={stl.bgImageContainer}>
            <img src="/assets/formHeadbg.jpeg" alt="bg" />
          </div>
          <h2 id={stl.popupHeading}>Creating New Replenishment </h2>

          <div>
            <form>
              <div id={stl.repId}>ID - 50012</div>
              <div className={stl.frmDataContainer}>
                <div className={stl.repLabel}>
                  <div className={stl.lblcontainer}>
                    <label htmlFor="productId">Product ID</label>
                  </div>
                  <input type="text" name="productId" id={stl.productId} />
                </div>
              </div>
              <div className={stl.frmDataContainer}>
                <div className={stl.repLabel}>
                  <div className={stl.lblcontainer}>
                    <label htmlFor="product">Product</label>
                  </div>
                  <input type="text" name="product" id={stl.product} />
                </div>
              </div>
              <div className={stl.frmDataContainer}>
                <div className={stl.repLabel}>
                  <div className={stl.lblcontainer}>
                    <label htmlFor="quantity">Quantity</label>
                  </div>
                  <input type="text" name="quantity" id={stl.quantity} />
                </div>
              </div>
              <div id={stl.repAmount}>
                <div id={stl.repAmtInnerContainer}>
                  <label htmlFor="repamount">Amount</label>
                  <input type="text" name="repamount" id={stl.repamount} />
                </div>
              </div>
              <div id={stl.repOrderBtn}>
                <button
                  onClick={() => {
                    closePopUp(false);
                  }}
                >
                  Proceed
                </button>

                <button type="button" onClick={() => cancel()}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={blurStyle}></div>
    </div>
  );
}

export default CreateReplenishmentOrder;

const outPopContainer = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "1000px",
  background: "#0002",
  // filter: "blur(4px)",
};
const blurStyle = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  fitler: "blur(2px)",
};
const popupStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: "35rem",
  height: "25rem",
  // border: "1px solid black",
  borderRadius: "15px",
  background: "aliceblue",
  zIndex: 550,
  // Ensures the popup is on top of other content
};
