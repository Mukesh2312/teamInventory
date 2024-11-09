import React, { useState } from "react";
import axios from "axios";
import stl from "./AddProduct.module.css";
import CloseIcon from "../../IconComponents/CloseIcon";
import { Link, useNavigate } from "react-router-dom";
import SuccessfullyAddedPopup from "../SuccessfullAddedProduct/SuccessfullyAddedPopup";

const AddProduct = () => {
  const [popUP, setPopUp] = useState(false);
  const [formData, setFormData] = useState({
    srNo: "",
    productName: "",
    model: "",
    productType: "",
    skuCode: "",
    amcCmc: "",
    companyName: "",
    availableModelNos: "",
    proposedCompany: "",
    hsnSacCode: "",
    warranty: "",
    expiryDate: "",
    amcValidityStartDate: "",
    amcValidityEndDate: "",
    productDescription: "",
    price: "",
    companyPrice: "",
    applicableTaxes: "",
    quantityUnit: "",
    lastPurchase: "",
    itemGroup: "",
    code: "",
    name: "",
    productImage: "",
    productBrochure: "",
    pptAvailable: "",
    coveringLetter: "",
    isoCertificate: "",
  });

  const [totalBillAmount, setTotalBillAmount] = useState(null);
  const [amount, setAmount] = useState(null);
  const [taxAmount, setTextAmout] = useState(null);
  const [applicableGST, setApplicableGST] = useState([12, 15, 18]);

  const navigate = useNavigate();

  // tax and amount calculation
  const calculateTaxAmount = (e) => {
    const taxRate = e.target.value;

    console.log("Unit Price:", formData.companyPrice);
    console.log("Quantity:", formData.quantityUnit);

    const totalTaxAmount = Math.floor(
      formData.companyPrice * formData.quantityUnit * (taxRate / 100)
    );
    console.log("Total Tax Amount:", totalTaxAmount);

    const netAmount =
      formData.companyPrice * formData.quantityUnit + totalTaxAmount;
    setTextAmout(totalTaxAmount);

    setAmount(netAmount);
    setTotalBillAmount(netAmount); // Assumes you want to store only the tax amount
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  const handlerclick = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false); //popup will hide automatically after 5 seconds
      navigate("/product");
    }, 5000); // 5000 milliseconds = 5 seconds
    console.log("pop up triggered");
  };

  // sending product to api

  const handleProduct = () => {
    const formData = new FormData();
  };
  return (
    <>
      {popUP && <SuccessfullyAddedPopup setPopUp={setPopUp} />}
      <div id={stl.addProduct}>
        <div className={stl.clientHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Add Product</h2>
          <div id={stl.closeIcon}>
            <Link onClick={() => navigate(-1)}>
              <CloseIcon />
            </Link>
          </div>
        </div>
        <div id={stl.pFormContainer}>
          <div id={stl.pFormInnerContainer}>
            <form>
              <div id={stl.headRow}>
                <div className={stl.formItems}>
                  <label htmlfor="srNo">SR No. :</label>
                  <input type="text" name="srNo" id={stl.srNo} />
                </div>
                <div className={stl.formItems}>
                  <label htmlfor="pdate">Date :</label>
                  <input type="date" name="pdate" id={stl.pdate} />
                </div>
              </div>
              <div id={stl.belowHeadRow}>
                <div id={stl.firstcol}>
                  <div className={stl.formItems}>
                    <label htmlfor="productName" className={stl.lbl}>
                      Product Name:
                    </label>
                    <select name="pname" id={stl.productName}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="model" className={stl.lbl}>
                      Model :
                    </label>
                    <select name="pmodal" id={stl.model}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="productType" className={stl.lbl}>
                      Product Type :
                    </label>
                    <select name="productType" id={stl.productType}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="skuCode" className={stl.lbl}>
                      SKU Code :
                    </label>
                    <input type="text" name="skuCode" id={stl.skuCode} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="amcCmc" className={stl.lbl}>
                      AMC/CMC :
                    </label>
                    <select name="amcCmc" id={stl.amcCmc}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems} id={stl.amcDuration}>
                    <div>
                      <label htmlfor="amcValidityStartDate" className={stl.lbl}>
                        Start Date :
                      </label>
                      <input
                        type="date"
                        name="amcValidityStartDate"
                        id={stl.amcValidityStartDate}
                      />
                    </div>
                    <div>
                      <label htmlfor="amcValidityEndDate" className={stl.lbl}>
                        End Date :
                      </label>
                      <input
                        type="date"
                        name="amcValidityEndDate"
                        id={stl.amcValidityEndDate}
                      />
                    </div>
                  </div>
                </div>
                <div id={stl.secondCol}>
                  <div className={stl.formItems}>
                    <label htmlfor="companyName" className={stl.lbl}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id={stl.companyName}
                    />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="availableModelNos" className={stl.lbl}>
                      Available Model nos :
                    </label>
                    <input
                      type="text"
                      name="availableModelNos"
                      id={stl.availableModelNos}
                    />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="proposedCompany" className={stl.lbl}>
                      Proposed Company:
                    </label>
                    <select name="proposedCompany" id={stl.proposedCompany}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="hsnSacCode" className={stl.lbl}>
                      HSN/SAC Code :
                    </label>
                    <input type="text" name="hsnSacCode" id={stl.hsnSacCode} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="warranty" className={stl.lbl}>
                      Warranty :
                    </label>
                    <input type="text" name="warranty" id={stl.warranty} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="expiryDate" className={stl.lbl}>
                      Expiry Date :
                    </label>
                    <input type="text" name="expiryDate" id={stl.expiryDate} />
                  </div>
                </div>
              </div>
              <div id={stl.descRow}>
                <div>
                  <div className={stl.descLbl}>
                    <label htmlFor="productDescription" className={stl.lbl}>
                      Product Description :
                    </label>
                  </div>
                  <textarea
                    name="productDescription"
                    id={stl.productDescription}
                    rows={5}
                    cols={80}
                  ></textarea>
                </div>
                <div id={stl.descFileContianer}>
                  <div className={stl.descLbl}>
                    <label htmlFor="productImage" className={stl.lbl}>
                      Product Image :
                    </label>
                  </div>
                  <input
                    type="file"
                    name="productImage"
                    id={stl.productImage}
                  />
                  <div className={stl.fileSpecs}>
                    <small>Max File Size: 5 MB</small>
                    <br />
                    <small>Allowed file types: doc, docx, jpeg, pdf, csv</small>
                  </div>
                </div>
              </div>
              <div id={stl.productPricingContainer}>
                <p>Product And Pricing</p>
                <div id={stl.productPricing}>
                  <div>
                    <div>
                      <label htmlfor="quantityUnit" className={stl.lbl}>
                        Quantity :
                      </label>
                    </div>
                    <input
                      type="number"
                      name="quantityUnit"
                      id={stl.quantityUnit}
                      className={stl.pnp}
                      placeholder="Qautity"
                      onChange={handleChange}
                      value={formData.quantityUnit}
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlfor="companyPrice" className={stl.lbl}>
                        Company Price :
                      </label>
                    </div>
                    <input
                      type="number"
                      name="companyPrice"
                      id={stl.companyPrice}
                      className={stl.pnp}
                      onChange={handleChange}
                      value={formData.companyPrice}
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlfor="gst" className={stl.lbl}>
                        Applicable GST :
                      </label>
                    </div>
                    <select
                      name="gst"
                      id="gst"
                      className={stl.pnp}
                      onChange={calculateTaxAmount}
                    >
                      {applicableGST.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div id={stl.documentation}>
                <p>Documentation</p>
                <div className={stl.docContainer}>
                  <div className={stl.itemDoc}>
                    <label htmlFor="productBrochure" className={stl.lbl}>
                      Product Brochure :
                    </label>
                    <input
                      type="file"
                      id={stl.productBrochure}
                      name="productBrochure"
                    />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div className={stl.itemDoc}>
                    <label htmlFor="pptAvailable" className={stl.lbl}>
                      PPT Available :
                    </label>
                    <input
                      type="file"
                      id={stl.pptAvailable}
                      name="pptAvailable"
                    />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div className={stl.itemDoc}>
                    <label htmlFor="coveringLetter" className={stl.lbl}>
                      Covering Latter :
                    </label>
                    <input
                      type="file"
                      id={stl.coveringLetter}
                      name="coveringLetter"
                    />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div className={stl.itemDoc}>
                    <label htmlFor="isoCertificate" className={stl.lbl}>
                      ISO Certificate :
                    </label>
                    <input
                      type="file"
                      id={stl.isoCertificate}
                      name="isoCertificate"
                    />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div id={stl.technical}>
                <p>Technical Specification</p>
                <div id={stl.techTextArea}>
                  <textarea
                    name="technical"
                    rows={5}
                    cols={50}
                    id=" technical"
                    placeholder="Write here..."
                  ></textarea>
                  <input type="file" id={stl.techfile} name="techfile" />
                </div>
                <div id={stl.techInfo}>
                  <div>
                    <div>
                      <label htmlFor="dimension" className={stl.lbl}>
                        Dimension :
                      </label>
                    </div>
                    <input type="text" name="dimension" id={stl.dimension} />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="material" className={stl.lbl}>
                        Materials :
                      </label>
                    </div>
                    <input type="text" name="material" id={stl.material} />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="performance" className={stl.lbl}>
                        Performance :
                      </label>
                    </div>
                    <input
                      type="text"
                      name="performance"
                      id={stl.performance}
                    />
                  </div>
                </div>
              </div>
              <div id={stl.costEstimation}>
                <p id={stl.constHeading}>Cost Estimation</p>
                <div id={stl.costSummary}>
                  <div id={stl.billRow}>
                    <table id={stl.addProductBillTable}>
                      <thead id={stl.addProductTblHead}>
                        <tr>
                          <th rowSpan="2" className={stl.addProductTblth}>
                            Quantity
                          </th>
                          <th rowSpan="2" className={stl.addProductTblth}>
                            MRP
                          </th>
                          <th colSpan="2" className={stl.addProductTblth}>
                            Applicable Taxes
                          </th>
                          <th rowSpan="2" className={stl.addProductTblth}>
                            Amount
                          </th>
                        </tr>
                        <tr id={stl.txPartition}>
                          <th>
                            <small>Rate(%)</small>
                          </th>
                          <th>
                            <small>Amt(%)</small>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={stl.addProductTbltd}>
                            {formData.quantityUnit}
                          </td>
                          <td className={stl.addProductTbltd}>
                            {formData.companyPrice}
                          </td>
                          <td id={stl.txAmtPartition}>
                            <td className={stl.addProductTbltd}>
                              {formData.companyPrice}
                            </td>
                            <td className={stl.addProductTbltd}>{taxAmount}</td>
                          </td>
                          <td colSpan="2" className={stl.addProductTbltd}>
                            {amount}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div id={stl.approvedBy}>
                <div id={stl.approveInner}>
                  <p>Approved By :</p>
                  <p>
                    <strong>Mayur Bansal</strong>
                  </p>
                  <p>
                    <strong>Purchased Manager Unisol</strong>
                  </p>
                </div>
                <div id={stl.netamount}>
                  <div id={stl.netamountInner}>
                    <div className={stl.netItem}>
                      <p>Subtotal</p>
                      <p>{amount}</p>
                    </div>
                    <div className={stl.netItem}>
                      <p>Freight</p>
                      <p>000</p>
                    </div>
                    <div className={stl.netItem}>
                      <p>Tasex</p>
                      <p>000</p>
                    </div>
                    <div className={stl.netItem}>
                      <p>
                        <strong> Net Amount</strong>
                      </p>
                      <p>{totalBillAmount}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={stl.formBtnContainer}>
                {/* <Link onClick={() => (navigate(-1))}> */}
                <button type="submit" onClick={handlerclick}>
                  Update
                </button>

                {/* </Link> */}
                <Link onClick={() => navigate(-1)}>
                  <button>Cancel</button>
                </Link>
              </div>
            </form>
          </div>

          <div className={stl.editBtn}>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
