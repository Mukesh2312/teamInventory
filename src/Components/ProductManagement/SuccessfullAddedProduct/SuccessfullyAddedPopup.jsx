import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import stl from "./SuccessfullyAddedPopup.module.css";
import CloseIcon from "../../IconComponents/CloseIcon";

const AddProductButton = ({ setPopUp }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setPopUp(false); // hide the popup
  };

  const navigate = useNavigate();

  return (
    <div style={popupStyles}>
      <div id={stl.bgImageContainer}>
        <img src="/assets/formHeadbg.jpeg" alt="bg" />
      </div>
      <h2 id={stl.popupHeading}>Product Added</h2>

      <div id={stl.popupContent}>
        <div id={stl.popupInnner}>
          <p id={stl.msg1}>Product Added Successfully</p>
          <p id={stl.msg2}>
            <img src="./assets/rightIcon.png" alt="right Symbol" />
          </p>
          <p id={stl.msg2}>The Product has been added Successfully</p>
          <button id={stl.canbtn} onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
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
  // Ensures the popup is on top of other content
};

export default AddProductButton;

{
  /* {showPopup && <div style={popupStyles}>
                Product added successfully!
            </div>
            } */
}
