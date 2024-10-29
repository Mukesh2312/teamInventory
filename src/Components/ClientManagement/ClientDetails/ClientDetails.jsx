import React, { useState, useEffect } from "react";
import stl from "./ClientDetails.module.css";
import { useUser } from "../../UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ClientDetails = () => {
  const [val, setVal] = useState(true);
  const [formData, setFormData] = useState({});

  const { client } = useUser();

  // console.log(client);

  useEffect(() => {
    const formattedDate = client.createdAt
      ? client.createdAt.split("T")[0]
      : "";

    if (client) {
      setFormData({
        applicableGst: client.applicableGst || "",
        buyingPrice: client.buyingPrice || "",
        companyPrice: client.companyPrice || "",
        createdAt: formattedDate || "",
        dealerName: client.dealerName || "",
        description: client.description || "",
        hsnCode: client.hsnCode || "",
        manufacturerName: client.manufacturerName || "",
        mouValidity: client.mouValidity || "",
        productCode: client.productCode || "",
        productName: client.productName || "",
        sellingPrice: client.sellingPrice || "",
        technicalSpecification: client.technicalSpecification || "",
      });
    }
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  // update the client data
  const updateHandel = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://erp-inventery-node-js.onrender.com/client/updateClient/${client._id}`,
        formData
      );
      console.log(res.data);
      navigate("/client");
    } catch (error) {
      console.log(error);
    }
  };
  const editHandle = () => {
    setVal(!val);
  };
  return (
    <>
      <div id={stl.clientDetails}>
        <div className={stl.clientHead}>
          <div className={stl.detailHeadImg}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.deatailHead}>Details</h2>
        </div>
        <div className={stl.formContainer}>
          <div className={stl.formInnercontainer}>
            <div className={stl.srnoFild}>
              <div>
                <label htmlFor="srno">Sr No.</label>
                <input
                  type="text"
                  id="srno"
                  value={formData.srno}
                  name="srno"
                  disabled={val}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="date">Date.</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  defaultValue={formData.createdAt}
                  onChange={onChangeHandler}
                  disabled={val}
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
                  onChange={onChangeHandler}
                  disabled={val}
                />
              </div>
              <div>
                <label htmlFor="manufacturerName">Manufacturer Name</label>

                <input
                  type="text"
                  name="manufacturerName"
                  id="manufacturerName"
                  value={formData.manufacturerName}
                  onChange={onChangeHandler}
                  disabled={val}
                />
              </div>
              <div>
                <label htmlFor="productName">Name Of Product</label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  value={formData.productName}
                  onChange={onChangeHandler}
                  disabled={val}
                />
              </div>
              <div>
                <label htmlFor="productCode">Product Code</label>
                <input
                  type="text"
                  name="productCode"
                  id="productCode"
                  value={formData.productCode}
                  onChange={onChangeHandler}
                  disabled={val}
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
                  onChange={onChangeHandler}
                  disabled={val}
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
                      onChange={onChangeHandler}
                      disabled={val}
                    />
                  </div>
                  <div>
                    <label htmlFor="companyPrice">Company Price</label>
                    <input
                      type="text"
                      id="companyPrice"
                      name="companyPrice"
                      value={formData.companyPrice}
                      onChange={onChangeHandler}
                      disabled={val}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="applicableGst">Applicable GST</label>
                <input
                  type="text"
                  name="applicableGst"
                  id="applicableGst"
                  value={formData.applicableGst}
                  onChange={onChangeHandler}
                  disabled={val}
                />
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
                      onChange={onChangeHandler}
                      disabled={val}
                    />
                  </div>
                  <div>
                    <label htmlFor="sellingPrice">Selling Price</label>
                    <input
                      type="text"
                      id="sellingPrice"
                      name="sellingPrice"
                      value={formData.sellingPrice}
                      onChange={onChangeHandler}
                      disabled={val}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="mouValidity">MOU Validity</label>

                <input
                  type="text"
                  name="mouValidity"
                  id="mouValidity"
                  value={formData.mouValidity}
                  onChange={onChangeHandler}
                  disabled={val}
                />
              </div>
            </div>

            <div className={stl.inputFilesContainer}>
              <div className={stl.innerInputFilecontainer}>
                <div>
                  <label htmlFor="ttAthorization">
                    Teritary Authorization :
                  </label>
                </div>
                <div>
                  <label htmlFor="ppt">PPT Available :</label>
                </div>
                <div>
                  <label htmlFor="coverLetter">Covering Letter :</label>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={stl.inputFilesContainer}>
              <div className={stl.innerInputFilecontainer}>
                <div>
                  <label htmlFor="ttAthorization">
                    Teritary Authorization :
                  </label>
                </div>
                <div>
                  <label htmlFor="ppt">PPT Available :</label>
                </div>
                <div>
                  <label htmlFor="coverLetter">Covering Letter :</label>
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
                    onChange={onChangeHandler}
                    disabled={val}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={stl.actionBtn}>
          <div>
            <button onClick={editHandle}>Edit</button>
            <button>PDF</button>
            <center>
              <button type="submit" onClick={updateHandel}>
                Update
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientDetails;

const mfName = ["Tata", " Honda", "sukesh", " Dell"];
const product = ["Dell", "Asus", " Lava", " Lenovo", " HP"];
const gst = ["5%", "6%", "8%"];
const mou = ["mou1", "mou3", "mou4"];
