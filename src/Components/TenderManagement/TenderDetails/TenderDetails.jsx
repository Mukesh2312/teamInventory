import { useState, useEffect } from "react";
import stl from "./TenderDetails.module.css";
import LineBreak from "../../IconComponents/LineBreak";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
const TenderDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { tenderDetails } = useUser();
  const navigate = useNavigate();

  console.log(tenderDetails);
  return (
    <>
      <div id={stl.tenderDetailes}>
        <div className={stl.tenderHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Tender Deatils</h2>
        </div>
        <div className={stl.detailContainer}>
          <div className={stl.detailInerContainer}>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Tender Id
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.tenderId : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Tender Name :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.tenderName : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Title :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.title : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Issue Date :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.issueDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Tender Floating Date:
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.tenderFloatingDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Description:
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.description : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Bidder Name :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.bidderName : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Document Download/Sale Start Date :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.documentDownloadStartDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Document Download/Sale End Date :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.documentDownloadEndDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Bid Submission Start Date :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.bidSubmissionStartDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Bid Submission End Date :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.bidSubmissionEndDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Bid Validity :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.bidValidity : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Prebid meeting address Portal :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.prebidMeetingAddressPortal : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Technical Bid Opening Date :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.technicalBidOpeningDate : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Location :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.location : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Pincode :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.pincode : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Bid Opening Place :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.bidOpeningPlace : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Product Category :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.productCategory : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Nature of Work :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.natureOfWork : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Proposals Invited By :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.proposalsInvitedBy : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Date of Opening of Financial Proposals :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails
                  ? tenderDetails.dateOfOpeningFinancialProposals
                  : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Mode of Submitting Proposals :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.modeOfSubmittingProposals : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Tender Website :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.tenderWebsite : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Cost of RPF Document :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.rpf : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Nearest Money Deposit :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.nrm : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Mode Of Payment :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.modeOfPayment : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Bank Name :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.bankName : ""}
              </div>
            </div>
            <div className={stl.item}>
              <div className={`${stl.itemContent} ${stl.itemName}`}>
                Mode Of Selection :
              </div>
              <div className={`${stl.itemContent} ${stl.itemVal}`}>
                {tenderDetails ? tenderDetails.methodOfSelection : ""}
              </div>
            </div>
          </div>
        </div>
        <div className={stl.AuthPersonDetails}>
          <div className={stl.authInnerContainer}>
            <p className={stl.personPost}>Authorised Person :</p>
            <p className={stl.personName}>
              {tenderDetails ? tenderDetails.authorizedPerson : ""}
            </p>
          </div>
          <div className={stl.authInnerContainer}>
            <p className={stl.personPost}>Authorised Manager :</p>
            <p className={stl.personName}>
              {tenderDetails ? tenderDetails.authorizedManager : ""}
            </p>
          </div>
        </div>

        <div className={stl.formBtnContainer}>
          <Link to="/uploaded-document">
            <button>Veiw Documents</button>
          </Link>

          <button onClick={() => navigate(-1)}>OK</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
        <div className={stl.editBtn}>
          <button>Edit</button>
          <button>Pdf</button>
        </div>
      </div>
    </>
  );
};

export default TenderDetails;

const bidData = {
  "Tender Id": "T/2023/01",
  "Tender Name": "Surgisul Healthcare Pvt Ltd",
  Title: "Submission process by contractors to various levels of government",
  "Issue Date": "02/04/23",
  "Tender Floating Date": "02/04/23",
  Description: "N/A",
  "Bidder Name": "Unisol",
  "Document Download/Sale Start Date": "02/04/2023",
  "Document Download/Sale End Date": "02/04/2023",
  "Bid Submission Start Date": "02/04/2023",
  "Bid Submission End Date": "02/04/2023",
  "Bid Validity": "10 Days",
  "Prebid Meeting Address Portal":
    "www.SurgiSul Healthcare Solutions Pvt Ltd.com",
  "Technical Bid Opening Date": "02/04/2023",
  "Period Of Work": "02/04/2023",
  Location: "Nagpur",
  Pincode: "440016",
  "Bid Opening Place": "02/04/2023",
  "Product Category": "Service",
  "Nature Of Work": "Proposals Invited",
  "Proposals Invited By": "Proposals Invited By name",
  "Financial Proposals Opening Date": "03/02/2023",
  "Mode Of Submitting Proposals":
    "www.SurgiSul Healthcare Solutions Pvt Ltd.com",
  "Tender Website": "www.SurgiSul Healthcare Solutions Pvt Ltd.com",
  "Cost Of RPF Document": "Amount",
  "Earnest Money Deposit": "Amount",
  "Mode Of Payment": "Mode of Payment",
  Amount: "Amount",
  Bank: "Bank Name",
  "Performance Security": "Performance Security",
  "Method Of Selection": "Method Of Selection",
  "Objection Charges": "Objection Charge",
};
