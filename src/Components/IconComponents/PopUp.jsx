import stl from "../../css/PopUp.module.css";
import React from "react";
import CloseIcon from "../IconComponents/CloseIcon";

function PopUp(props) {
  return (
    <>
      <div id={stl.popup}>
        <div id={stl.popupContent}>
          <div onClick={props.closeModal}>
            <CloseIcon />
          </div>
          <h2>{props.content}</h2>
          <img src={props.imgUrl} alt={props.name} />
        </div>
      </div>
    </>
  );
}

export default PopUp;
