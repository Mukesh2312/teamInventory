import React, { useState } from "react";
import stl from "./CreateTender.module.css";
import { Link, useNavigate } from "react-router-dom";

const CreateTender = () => {
  const [formData, setFormData] = useState({
    tenderID: "",
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
    costOfRPFDocument: "",
    earnestMoneyDeposit: "",
    modeOfPayment: "",
    amount: "",
    bankName: "",
    performanceSecurity: "",
    methodOfSelection: "",
    objectionCharges: "",
    authorizedManager: "mk",
    authorizedPerson: "abc",
    documents: [],
  });

  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    console.log(e);
    const { name, files: fileList } = e.target; // use 'files' in destructuring
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: fileList[0], // update only the specific file key
    }));
  };
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    navigate("/tender");
  };
  return (
    <>
      <div id={stl.createClient}>
        <div className={stl.clientHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Create Tender</h2>
        </div>

        <div className={stl.formContainer}>
          <div className={stl.formInnercontainer}>
            <form>
              <div className={stl.businessDetails}>
                <div>
                  <label htmlFor="tid">Tender ID :</label>
                  <input type="text" id="tid" name="tid" />
                </div>

                <div>
                  <label htmlFor="tenderName">Tender Name</label>
                  <input
                    type="text"
                    name="tenderName"
                    id="tenderName"
                    value={formData.tenderName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="title">Title</label>

                  <input
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    id="title"
                  />
                </div>
                <div>
                  <label htmlFor="issueDate">Issue Date :</label>
                  <input
                    type="date"
                    value={formData.issueDate}
                    onChange={handleChange}
                    id="issueDate"
                    name="issueDate"
                  />
                </div>
                <div>
                  <label htmlFor="tenderFloatingDate">
                    Tender Floating Date :
                  </label>
                  <input
                    type="date"
                    value={formData.tenderFloatingDate}
                    onChange={handleChange}
                    id="tenderFloatingDate"
                    name="tenderFloatingDate"
                  />
                </div>
                <div>
                  <label htmlFor="description">Description :</label>
                  <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    cols="50"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="bidderName">Bidder Name :</label>
                  <input
                    type="text"
                    value={formData.bidderName}
                    onChange={handleChange}
                    name="bidderName"
                    id="bidderName"
                  />
                </div>
                <div>
                  <label htmlFor="documentDownloadStartDate">
                    Document Download/Sale Start Date :
                  </label>
                  <input
                    type="date"
                    value={formData.documentDownloadStartDate}
                    onChange={handleChange}
                    id="documentDownloadStartDate"
                    name="documentDownloadStartDate"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="documentDownloadEndDate">
                    Document Download/Sale End Date :
                  </label>
                  <input
                    type="date"
                    value={formData.documentDownloadEndDate}
                    onChange={handleChange}
                    id="documentDownloadEndDate"
                    name="documentDownloadEndDate"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="bidSubmissionStartDate">
                    Bid Subbmission Start Date :
                  </label>
                  <input
                    type="date"
                    value={formData.bidSubmissionStartDate}
                    onChange={handleChange}
                    id="bidSubmissionStartDate"
                    name="bidSubmissionStartDate"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="bidSubmissionEndDate">
                    Bid Subbmission End Date :
                  </label>
                  <input
                    type="date"
                    value={formData.bidSubmissionEndDate}
                    onChange={handleChange}
                    id="bidSubmissionEndDate"
                    name="bidSubmissionEndDate"
                  />
                </div>

                <div className={stl.hsnContainer}>
                  <label htmlFor="bidValidity">Bid Validity :</label>
                  <input
                    type="text"
                    value={formData.bidValidity}
                    onChange={handleChange}
                    id="bidValidity"
                    name="bidValidity"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="prebidMeetingAddressPortal">
                    Prebid Meeting Address Portal :
                  </label>
                  <input
                    type="text"
                    value={formData.prebidMeetingAddressPortal}
                    onChange={handleChange}
                    id="prebidMeetingAddressPortal"
                    name="prebidMeetingAddressPortal"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="technicalBidOpeningDate">
                    Technical Bid Opening Date :
                  </label>
                  <input
                    type="date"
                    value={formData.technicalBidOpeningDate}
                    onChange={handleChange}
                    id="technicalBidOpeningDate"
                    name="technicalBidOpeningDate"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="periodOfWork">Period Of Work :</label>
                  <input
                    type="text"
                    value={formData.periodOfWork}
                    onChange={handleChange}
                    id="periodOfWork"
                    name="periodOfWork"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="location">Location :</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    id="location"
                    name="location"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="pincode">Pincode :</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={handleChange}
                    id="pincode"
                    name="pincode"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="bidOpeningPlace">Bid Opening Place :</label>
                  <input
                    type="text"
                    value={formData.bidOpeningPlace}
                    onChange={handleChange}
                    id="bidOpeningPlace"
                    name="bidOpeningPlace"
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="productCategory">Product Category :</label>
                  <input
                    type="text"
                    value={formData.productCategory}
                    onChange={handleChange}
                    id="productCategory"
                    name="productCategory"
                  />
                </div>

                <div className={stl.hsnContainer}>
                  <label htmlFor="natureOfWork">Nature Of Work :</label>
                  <input
                    type="text"
                    id="natureOfWork"
                    name="natureOfWork"
                    value={formData.natureOfWork}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="proposalsInvitedBy">
                    Proposals Invited By :
                  </label>
                  <input
                    type="text"
                    id="proposalsInvitedBy"
                    name="proposalsInvitedBy"
                    value={formData.proposalsInvitedBy}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="dateOfOpeningFinancialProposals">
                    Date Of Opening Of Financial Proposals :
                  </label>
                  <input
                    type="date"
                    id="dateOfOpeningFinancialProposals"
                    name="dateOfOpeningFinancialProposals"
                    value={formData.dateOfOpeningFinancialProposals}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="modeOfSubmittingProposals">
                    Mode Of Submitting Proposals :
                  </label>
                  <input
                    type="text"
                    id="modeOfSubmittingProposals"
                    name="modeOfSubmittingProposals"
                    value={formData.modeOfSubmittingProposals}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="tenderWebsite">Tender Website :</label>
                  <input
                    type="text"
                    id="tenderWebsite"
                    name="tenderWebsite"
                    value={formData.tenderWebsite}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="costOfRPFDocument">
                    Cost Of RPF document :
                  </label>
                  <input
                    type="text"
                    id="costOfRPFDocument"
                    name="costOfRPFDocument"
                    value={formData.costOfRPFDocument}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="earnestMoneyDeposit">
                    Earnest Money Deposite :
                  </label>
                  <input
                    type="text"
                    id="earnestMoneyDeposit"
                    name="earnestMoneyDeposit"
                    value={formData.earnestMoneyDeposit}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="modeOfPayment">Mode Of Payment :</label>
                  <input
                    type="text"
                    id="modeOfPayment"
                    name="modeOfPayment"
                    value={formData.modeOfPayment}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="amount">Amount :</label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="bankName">Bank :</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="performanceSecurity">
                    Performance Security :
                  </label>
                  <input
                    type="text"
                    id="performanceSecurity"
                    name="performanceSecurity"
                    value={formData.performanceSecurity}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="methodOfSelection">
                    Method Of Selection :
                  </label>
                  <input
                    type="text"
                    id="methodOfSelection"
                    name="methodOfSelection"
                    value={formData.methodOfSelection}
                    onChange={handleChange}
                  />
                </div>
                <div className={stl.hsnContainer}>
                  <label htmlFor="objectionCharges">Objecting Charges :</label>
                  <textarea
                    name="objectionCharges"
                    id="objectionCharges"
                    rows="3"
                    cols="50"
                    value={formData.objectionCharges}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className={stl.productDetailsContainer}>
                  <h3>Tender Product List</h3>
                  <div className={stl.tenderProductDetails}>
                    <div>
                      <label htmlFor="sn">Stock Name :</label>
                      <input type="text" id="sn" name="sn" />
                    </div>
                    <div>
                      <label htmlFor="pdesc">Description :</label>
                      <input type="text" id="pdesc" name="pdesc" />
                    </div>
                    <div>
                      <label htmlFor="prdtq">Quantity :</label>
                      <input type="text" id="prdtq" name="prdtq" />
                    </div>
                    <div>
                      <label htmlFor="punit">Unit :</label>
                      <input type="text" id="punit" name="punit" />
                    </div>
                    <div>
                      <label htmlFor="prate">Rate :</label>
                      <input type="text" id="prate" name="prate" />
                    </div>
                    <div>
                      <label htmlFor="pbt">Project Bid Total :</label>
                      <input type="text" id="pbt" name="pbt" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={stl.inputFilesContainer}>
                <h3 style={{ marginBottom: "1.5rem" }}>Required Documents</h3>

                <div className={stl.innerInputFilecontainer}>
                  <div>
                    <label htmlFor="ttAthorization">Tendor Copy :</label>
                    <input
                      type="file"
                      id="ttAthorization"
                      name="ttAthorization"
                    />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ppt">Technical Document :</label>
                    <input type="file" id="ppt" name="ppt" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverLetter">
                      tender Fees (Screenshot) :
                    </label>
                    <input type="file" id="coverLetter" name="coverLetter" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className={stl.inputFilesContainer}>
                <div className={stl.innerInputFilecontainer}>
                  <div>
                    <label htmlFor="ttAthorization">EMD Copy :</label>
                    <input
                      type="file"
                      id="ttAthorization"
                      name="ttAthorization"
                      onChange={handleFileChange}
                    />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ppt">BOQ :</label>
                    <input type="file" id="ppt" name="ppt" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverLetter">Pricing :</label>
                    <input type="file" id="coverLetter" name="coverLetter" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className={stl.inputFilesContainer}>
                <div className={stl.innerInputFilecontainer}>
                  <div>
                    <label htmlFor="ttAthorization">
                      Perfomance Guarentee :
                    </label>
                    <input
                      type="file"
                      id="ttAthorization"
                      name="ttAthorization"
                    />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ppt">MOU :</label>
                    <input type="file" id="ppt" name="ppt" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverLetter">Other :</label>
                    <input type="file" id="coverLetter" name="coverLetter" />
                    <div>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Athorised person  */}
              <div className={stl.personContainer}>
                <div>
                  <label htmlFor="authmanager">Authorised Manager :</label>
                  <input type="text" name="authmanager" id="authmanager" />
                </div>
                <div>
                  <label htmlFor="authperson">Authorised Person :</label>
                  <input type="text" name="authperson" id="authperson" />
                </div>
              </div>
              {/* Athorised person  */}

              <div className={stl.formBtnContainer}>
                <button type="submit" onClick={formHandler}>
                  OK
                </button>
                <Link to="/tender">
                  <button>Cancel</button>
                </Link>
              </div>
              <div className={stl.editBtn}>
                <button>Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateTender;

const mfName = ["Tata", " Honda", "sukesh", " Dell"];
const product = ["Dell", "Asus", " Lava", " Lenovo", " HP"];
const gst = ["5%", "6%", "8%"];
const mou = ["mou1", "mou3", "mou4"];
