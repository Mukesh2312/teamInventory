import React from "react";
import { Link } from "react-router-dom";
import stl from "../../ProductManagement/SuccessfullAddedProduct/SuccessfullyAddedPopup.module.css";

function RepOrderSuccessfullPopUp({ cancel }) {
  return (
    <div style={outPopContainer}>
      <div style={outPopContainer}>
        <div style={popupStyles}>
          <div id={stl.bgImageContainer}>
            <img src="/assets/formHeadbg.jpeg" alt="bg" />
          </div>
          <h2 id={stl.popupHeading}>Order Added</h2>

          <div id={stl.popupContent}>
            <div id={stl.popupInnner}>
              <p id={stl.msg1}>Order Added Successfully</p>
              <p
                id={stl.msg2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src="./assets/rightIcon.png" alt="right Symbol" />
              </p>
              <p id={stl.msg2}>The Order has been added Successfully</p>
              <Link to="/replenishment">
                <button
                  id={stl.canbtn}
                  onClick={() => cancel()}
                  style={{ backgroundColor: "#709EB18C", padding: "1px 20px" }}
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={blurStyle}></div>
    </div>
  );
}

export default RepOrderSuccessfullPopUp;

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
  borderRadius: "5px",
  zIndex: 1000,
  width: "30rem",
  height: "20rem",
  border: "1px solid black",
  background: "aliceblue",
  zIndex: 550,
  // Ensures the popup is on top of other content
};
