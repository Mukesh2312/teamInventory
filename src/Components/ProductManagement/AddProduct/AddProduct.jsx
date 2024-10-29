import React, { useState } from "react";
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
    availableModelNos: "Autofill",
    proposedCompany: "",
    hsnSacCode: "",
    warranty: "",
    expiryDate: "",
    amcStartDate: "",
    amcEndDate: "",
    productDescription: "",
    productImage: null,
  });
  const navigate = useNavigate();

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
                  <label htmlfor="srno">SR No. :</label>
                  <input type="text" name="srno" id={stl.srno} />
                </div>
                <div className={stl.formItems}>
                  <label htmlfor="pdate">Date :</label>
                  <input type="date" name="pdate" id={stl.pdate} />
                </div>
              </div>
              <div id={stl.belowHeadRow}>
                <div id={stl.firstcol}>
                  <div className={stl.formItems}>
                    <label htmlfor="pname" className={stl.lbl}>
                      Product Name:
                    </label>
                    <select name="pname" id="pname">
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="pmodal" className={stl.lbl}>
                      Modal :
                    </label>
                    <select name="pmodal" id="pmodal">
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="ptype" className={stl.lbl}>
                      Product Type :
                    </label>
                    <select name="ptype" id="ptype">
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="pcode" className={stl.lbl}>
                      SKU Code :
                    </label>
                    <input type="text" name="pcode" id={stl.pcode} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="pmc" className={stl.lbl}>
                      AMC/CMC :
                    </label>
                    <select name="pmc" id={stl.pmc}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems} id={stl.amcDuration}>
                    <div>
                      <label htmlfor="amcstart" className={stl.lbl}>
                        Start Date :
                      </label>
                      <input type="date" name="amcstart" id={stl.amcstart} />
                    </div>
                    <div>
                      <label htmlfor="amcend" className={stl.lbl}>
                        End Date :
                      </label>
                      <input type="date" name="amcend" id={stl.amcend} />
                    </div>
                  </div>
                </div>
                <div id={stl.secondCol}>
                  <div className={stl.formItems}>
                    <label htmlfor="cname" className={stl.lbl}>
                      Company Name
                    </label>
                    <input type="text" name="cname" id={stl.cname} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="nos" className={stl.lbl}>
                      Available Model nos :
                    </label>
                    <input type="text" name="nos" id={stl.nos} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="prscmnpy" className={stl.lbl}>
                      Proposed Company:
                    </label>
                    <select name="prscmnpy" id={stl.prscmnpy}>
                      <option value="dell">Dell</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="sac" className={stl.lbl}>
                      HSN/SAC Code :
                    </label>
                    <input type="text" name="sac" id={stl.sac} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="warranty" className={stl.lbl}>
                      Warranty :
                    </label>
                    <input type="text" name="warranty" id={stl.sac} />
                  </div>
                  <div className={stl.formItems}>
                    <label htmlfor="expiry" className={stl.lbl}>
                      Expiry Date :
                    </label>
                    <input type="text" name="expiry" id={stl.expiry} />
                  </div>
                </div>
              </div>
              <div id={stl.descRow}>
                <div>
                  <div className={stl.descLbl}>
                    <label htmlFor="pdesc" className={stl.lbl}>
                      Product Description :
                    </label>
                  </div>
                  <textarea
                    name="pdesc"
                    id={stl.pdesc}
                    rows={5}
                    cols={80}
                  ></textarea>
                </div>
                <div id={stl.descFileContianer}>
                  <div className={stl.descLbl}>
                    <label htmlFor="pimg" className={stl.lbl}>
                      Product Image :
                    </label>
                  </div>
                  <input type="file" name="pimg" id={stl.pimg} />
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
                      <label htmlfor="quant" className={stl.lbl}>
                        Quantity :
                      </label>
                    </div>
                    <input
                      type="text"
                      name="quant"
                      id={stl.quant}
                      className={stl.pnp}
                      placeholder="Qautity"
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlfor="cprice" className={stl.lbl}>
                        Company Price :
                      </label>
                    </div>
                    <input
                      type="text"
                      name="cprice"
                      id={stl.cprice}
                      className={stl.pnp}
                      placeholder="Price"
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlfor="gst" className={stl.lbl}>
                        Applicable GST :
                      </label>
                    </div>
                    <select name="gst" id="gst" className={stl.pnp}>
                      <option value="">None</option>
                      <option value="hp">HP</option>
                      <option value="lenovo">Lenovo</option>
                      <option value="acer">Acer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div id={stl.documentation}>
                <p>Documentation</p>
                <div className={stl.docContainer}>
                  <div>
                    <label htmlFor="brochure" className={stl.lbl}>
                      Product Brochure :
                    </label>
                    <input type="file" id={stl.brochure} name="brochure" />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ppt" className={stl.lbl}>
                      PPT Available :
                    </label>
                    <input type="file" id={stl.ppt} name="ppt" />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cletter" className={stl.lbl}>
                      Covering Latter :
                    </label>
                    <input type="file" id={stl.cletter} name="cletter" />
                    <div className={stl.fileSpecs}>
                      <small>Max File Size: 5 MB</small>
                      <br />
                      <small>
                        Allowed file types: doc, docx, jpeg, pdf, csv
                      </small>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="isocertificate" className={stl.lbl}>
                      ISO Certificate :
                    </label>
                    <input type="file" id={stl.isocertificate} name="cletter" />
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
                      <thead>
                        <tr>
                          <th>Quantity</th>
                          <th>MRP</th>
                          <th>
                            Applicable Taxes
                            <tr id={stl.txPartition}>
                              <th>
                                <small>Rate(%)</small>
                              </th>
                              <th>
                                <small>Amt(%)</small>
                              </th>
                            </tr>
                          </th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>245</td>
                          <td>10</td>
                          <td id={stl.txAmtPartition}>
                            <td>5</td>
                            <td>50</td>
                          </td>
                          <td>456</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
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
                  <p>000</p>
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
                  <p>000</p>
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
          <div className={stl.editBtn}>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
