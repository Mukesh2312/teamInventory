import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const VendorForm = () => {
  const [formVisible, setFormVisible] = useState(true); // State to manage form visibility
  const [formData, setFormData] = useState({
    vendorId: "", // Example ID
    vendorName: "",
    contactName: "",
    date: "",
    alternateName: "",
    contactEmail: "",
    alternateEmail: "",
    productService: "",
    category: "",
    productManufacture: "",
    additionalInfo: "",
    bankName: "",
    branchName: "",
    ifscCode: "",
    bankingName: "",
  });

  const navigate = useNavigate();

  // To set current date dynamically
  // useEffect(() => {
  //   const currentDate = new Date().toLocaleDateString();
  //   setFormData((prevData) => ({ ...prevData, currentDate }));
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    // Reset the form and hide it
    setFormVisible(false);
  };

  // Only render the form if it is visible
  if (!formVisible) {
    return null; // Return null if the form is hidden
  }

  const handleFormVendor = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://erp-inventery-node-js.onrender.com/vendor/create",
        formData
      );
      console.log(res.data);
      navigate("/VendorManagement");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      {/* Form Title */}
      <h2 className="text-2xl font-semibold bg-gray-400 p-10 text-gray-800 mb-4">
        Create/ Add Vendor
      </h2>

      {/* Vendor ID and Current Date */}

      {/* Rest of the Form */}
      <form onSubmit={handleFormVendor}>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700">
              Vendor ID:
            </label>
            <input
              type="number"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Vendor Name
          </label>
          <input
            type="text"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Rest of the fields go here... */}
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Contact Name
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Alternate Name
          </label>
          <input
            type="text"
            name="alternateName"
            value={formData.alternateName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Contact Email
          </label>
          <input
            type="text"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Alternate Email
          </label>
          <input
            type="text"
            name="alternateEmail"
            value={formData.alternateEmail}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            htmlFor="productService"
            className="w-1/4 text-sm font-medium text-gray-700"
          >
            Product / Services
          </label>
          {/* <select
            name="productService"
            id="productService"
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Product">Product</option>
            <option value="Service">prd second</option>
          </select> */}
          <input
            type="text"
            name="productService"
            value={formData.productService}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Continue adding other fields... */}

        {/* New Fields Added */}
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Product Manufracturer
          </label>
          <input
            type="text"
            name="productManufacture"
            value={formData.productManufacture}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Additional Information
          </label>
          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Branch Name
          </label>
          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            IFSC Code
          </label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">
            Banking Name
          </label>
          <input
            type="text"
            name="bankingName"
            value={formData.bankingName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
          <Link to="/VendorManagement">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Reset and Close
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
