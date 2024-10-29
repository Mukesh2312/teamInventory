import React, { useState, useEffect } from "react";
import stl from "./Createclient.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Createclient = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [formData, setFormData] = useState({
    SrNo: "",
    applicableGst: "",
    buyingPrice: "",
    companyPrice: "",
    createdAt: currentDate,
    dealerName: "",
    description: "",
    hsnCode: "",
    manufacturerName: "",
    mouValidity: "",
    productCode: "",
    productName: "",
    sellingPrice: "",
    technicalSpecification: "",
  });

  const [files, setFiles] = useState({
    tertAuthFile: null,
    pptFile: null,
    coverLetterFile: null,
    productCertFile: null,
    isoCertFile: null,
    brochureFile: null,
  });

  useEffect(() => {
    const getCurrentDate = () => new Date().toISOString().split("T")[0];
    setCurrentDate(getCurrentDate);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // files handling
  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target; // use 'files' in destructuring
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: fileList[0], // update only the specific file key
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // append files
    for (const key in files) {
      if (files[key]) {
        data.append(key, files[key]);
        // console.log(`Appending file: ${key}`, files[key]); //consol current append file
      }
    }

    for (const [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }
    // sending data to backend
    try {
      console.log([...data]);
      const res = await axios.post(
        "https://erp-inventery-node-js.onrender.com/client/registerClient",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Form successfully submitted:", res.data);
      navigate("/client");
    } catch (error) {
      console.log([...data]);

      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      {/* <center><h1>Create Client</h1></center> */}
      <div id={stl.createClient}>
        <div className={stl.clientHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Create/Add Client</h2>
        </div>

        <div className={stl.formContainer}>
          <div className={stl.formInnercontainer}>
            <form onSubmit={handleSubmit}>
              <div className={stl.srnoFild}>
                <div>
                  <label htmlFor="SrNo">Sr No.</label>
                  <input
                    type="text"
                    id="SrNo"
                    name="SrNo"
                    value={formData.SrNo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="createdAt">Date.</label>
                  <input
                    type="date"
                    id="createdAt"
                    name="createdAt"
                    // value={formData.createdAt}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className={stl.businessDetails}>
                <div>
                  <label htmlFor="dealerName">dealer Name</label>
                  <input
                    type="text"
                    name="dealerName"
                    id="dealerName"
                    value={formData.dealerName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="manufacturerName">Manufacturer Name</label>

                  <select
                    name="manufacturerName"
                    id="manufacturerName"
                    value={formData.manufacturerName}
                    onChange={handleChange}
                  >
                    <option value="Select">Select</option>
                    {mfName.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="productName">Name Of Product</label>
                  <select
                    name="productName"
                    id="productName"
                    value={formData.productName}
                    onChange={handleChange}
                  >
                    {product.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="productCode">Product Code</label>
                  <input
                    type="text"
                    name="productCode"
                    id="productCode"
                    value={formData.productCode}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    rows="10"
                    cols="80"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className={stl.hsnContainer}>
                  <div className={stl.hsnInnerContainer}>
                    <div>
                      <label htmlFor="hsnCode">HSN Code</label>
                      <input
                        type="text"
                        id="hsnCode"
                        name="hsnCode"
                        value={formData.hsnCode}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="companyPrice">Company Price</label>
                      <input
                        type="number"
                        id="companyPrice"
                        name="companyPrice"
                        value={formData.companyPrice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="applicableGst">Applicable GST</label>
                  {/* <input type="text" name="gst" id="gst" /> */}
                  <select
                    name="applicableGst"
                    id="applicableGst"
                    value={formData.applicableGst}
                    onChange={handleChange}
                  >
                    {gst.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={stl.hsnContainer}>
                  <div className={stl.hsnInnerContainer}>
                    <div>
                      <label htmlFor="buyingPrice">Buying Price</label>
                      <input
                        type="text"
                        id="buyingPrice"
                        name="buyingPrice"
                        value={formData.buyingPrice}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="sellingPrice">Selling Price</label>
                      <input
                        type="text"
                        id="sellingPrice"
                        name="sellingPrice"
                        value={formData.sellingPrice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="mouValidity">MOU Validity</label>
                  <select
                    name="mouValidity"
                    id="mouValidity"
                    value={formData.mouValidity}
                    onChange={handleChange}
                  >
                    {mou.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  {/* <input type="text" name="mouVal" id="mouVal" /> */}
                </div>
              </div>

              <div className={stl.inputFilesContainer}>
                <div className={stl.innerInputFilecontainer}>
                  <div>
                    <label htmlFor="tertAuthFile">
                      Teritary Authorization :
                    </label>
                    <input
                      type="file"
                      id="tertAuthFile"
                      name="tertAuthFile"
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
                    <label htmlFor="pptFile">PPT Available :</label>
                    <input
                      type="file"
                      id="pptFile"
                      name="pptFile"
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
                    <label htmlFor="coverLetterFile">Covering Letter :</label>
                    <input
                      type="file"
                      id="coverLetterFile"
                      name="coverLetterFile"
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
                </div>
              </div>
              <br />
              <br />
              <div className={stl.inputFilesContainer}>
                <div className={stl.innerInputFilecontainer}>
                  <div>
                    <label htmlFor="productCertFile">
                      Product Certificate :
                    </label>
                    <input
                      type="file"
                      id="productCertFile"
                      name="productCertFile"
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
                    <label htmlFor="isoCertFile">ISO Certificate :</label>
                    <input
                      type="file"
                      id="isoCertFile"
                      name="isoCertFile"
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
                    <label htmlFor="brochureFile">Brochure Available :</label>
                    <input
                      type="file"
                      id="brochureFile"
                      name="brochureFile"
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
                </div>
              </div>

              <div className={stl.techSpec}>
                <div>
                  <div>
                    <label htmlFor="technicalSpecification">
                      Technical Specification
                    </label>
                  </div>
                  <div id={stl.techText}>
                    <textarea
                      name="technicalSpecification"
                      id="technicalSpecification"
                      rows="10"
                      cols="120"
                      value={formData.technicalSpecification}
                      onChange={handleChange}
                    ></textarea>
                    {/* <input type="file" name="techSpecFile" id="techSpecFile" /> */}
                  </div>
                </div>
              </div>

              <div className={stl.formBtnContainer}>
                <button type="submit">Submit</button>
                <button type="button">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createclient;

const mfName = ["Tata", " Honda", "sukesh", " Dell"];
const product = ["Dell", "Asus", " Lava", " Lenovo", " HP"];
const gst = [5, 6, 8];
const mou = ["mou1", "mou3", "mou4"];
