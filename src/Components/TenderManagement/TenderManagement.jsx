import { useState, useEffect } from "react";
import SearchCom from "../IconComponents/SearchCom";
import NewFilterIcon from "../IconComponents/NewFilterIcon";
import stl from "./TenderManagement.module.css";
import TenderTable from "./TenderTable/TenderTable";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import axios from "axios";

const TenderManagement = () => {
  const [status, setStatus] = useState("all");
  const [spinner, setSpinner] = useState(false);
  const [tenderData, setTenderData] = useState({
    tenderName: "",
    title: "",
    issueDate: "",
    tenderFloatingDate: "",
    description: "",
    bidderName: "",
    documentDownloadStartDate: "",
    documentDownloadEndDate: "",
    bidSubmissionStartDate: "",
    bidSubmissionEndDate: "",
    prebidMeetingAddressPortal: "",
    technicalBidOpeningDate: "",
    periodOfWork: "",
    location: "",
    pincode: "",
    bidOpeningPlace: "",
    productCategory: "",
    natureOfWork: "",
    proposalsInvitedBy: "",
    dateOfOpeningFinancialProposals: "",
    modeOfSubmittingProposals: "",
    tenderWebsite: "",
    modeOfPayment: "",
    bankName: "",
    methodOfSelection: "",
    authorizedManager: "",
    documents: [],
  });

  useEffect(() => {
    setSpinner(true);
    fetchingTenderData();
  }, []);
  const navigate = useNavigate();
  const con = (e) => {
    setStatus(e.target.value);
  };

  const fetchingTenderData = async () => {
    try {
      const res = await axios.get(
        "https://erp-inventery-node-js.onrender.com/tenders"
      );
      const data = res.data.data;
      console.log(data);
      setTenderData(data);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <div id={stl.tenderMng}>
          <div className={stl.tenderHeading}>
            <h2 id={stl.tenderHeadingTxt}>Tender Management</h2>
            <div className={stl.createTenderBtnContainer}>
              <button onClick={() => navigate("/create-tender")}>Create</button>
            </div>
          </div>

          <div className={stl.tenderMngHeader}>
            <div className={stl.searchInputecontainer}>
              <SearchCom />
              <div>
                <NewFilterIcon />
              </div>
            </div>
            <div className={stl.selectStatusContainer}>
              <label htmlFor="status">Status</label>
              <select name="status" id="status" onChange={con}>
                <option value="all">Select Status</option>
                <option value="submitted">Submitted</option>
                <option value="ongoing">On Going</option>
                <option value="proposed">Proposed</option>
              </select>
            </div>
          </div>

          <div className="tenderTableContainer">
            <TenderTable status={status} tender={tenderData} />
          </div>
        </div>
      )}
    </>
  );
};

export default TenderManagement;
