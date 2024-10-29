import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../IconComponents/BackIcon";
import stl from "./UploadeDocuments.module.css";
import EyeIcon from "../../IconComponents/EyeIcon";
import DownloadIcon from "../../IconComponents/DownloadIcon";
import PopUp from "../../IconComponents/PopUp";

const UploadedDocuments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState({ url: "", name: "" });

  const popUpHandler = (imgUrl, imgName) => {
    setIsModalOpen(true); // Open modal when a specific image is clicked
    setSelectedImg({ url: imgUrl, name: imgName });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when action is done
    setSelectedImg({ url: "", name: "" });
  };

  // Use `useEffect` to toggle body scroll based on modal state

  const navigate = useNavigate();

  return (
    <>
      <div id={stl.uploadedDocument}>
        <div className={stl.backBtnContainer}>
          <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
            <BackIcon />
          </div>
          <h2>Uploaded Documents</h2>
        </div>
        <div className={stl.documentsContainer}>
          {imges.map((item, index) => {
            return (
              <div className={stl.documentInnerContainer} key={index}>
                <strong>{item.name}</strong>
                <div className={stl.imgContainer}>
                  <img src={item.url} alt={item.name} />
                  <div className={stl.documentActionBtn}>
                    <div onClick={() => popUpHandler(item.url, item.name)}>
                      <EyeIcon />
                    </div>
                    <div>
                      <a href={item.url} download>
                        <DownloadIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PopUp modal outside of the loop to prevent multiple modals opening */}
      {isModalOpen && (
        <PopUp
          name={selectedImg.name}
          imgUrl={selectedImg.url}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default UploadedDocuments;

const imges = [
  { url: "./assets/doc1.png", name: "Tender Copy" },
  { url: "./assets/tenderCoduments.png", name: "Technical Document" },
  { url: "./assets/payment.png", name: "Tender Fees" },
  { url: "./assets/medical.png", name: "EMD Copy" },
  { url: "./assets/boq.png", name: "BOQ" },
  { url: "./assets/pricing.png", name: "Pricing" },
  { url: "./assets/performance.png", name: "Performance Guarantee" },
  { url: "./assets/MOU.png", name: "MOU" },
];
