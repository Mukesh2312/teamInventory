import React, { useState } from "react";

const VendorTesting = () => {
  const [formData, setFormData] = useState({
    vendorName: "hsudfe",
    contactName: "sdfe",
    alternateName: "sdfe",
    contactEmail: "contact@example.com",
    alternateEmail: "alternate@example.com",
    productService: "Product",
    category: "Category Name",
    productManufacture: "Product Manufacture",
    additionalInfo: "Additional information",
    bankName: "Bank Name",
    branchName: "Branch Name",
    ifscCode: "IFSC1234",
    bankingName: "Banking Name",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://erp-inventery-node-js.onrender.com/vendor/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="vendorName"
        value={formData.vendorName}
        onChange={handleChange}
        placeholder="Vendor Name"
      />
      <input
        type="text"
        name="contactName"
        value={formData.contactName}
        onChange={handleChange}
        placeholder="Contact Name"
      />
      <input
        type="text"
        name="alternateName"
        value={formData.alternateName}
        onChange={handleChange}
        placeholder="Alternate Name"
      />
      <input
        type="email"
        name="contactEmail"
        value={formData.contactEmail}
        onChange={handleChange}
        placeholder="Contact Email"
      />
      <input
        type="email"
        name="alternateEmail"
        value={formData.alternateEmail}
        onChange={handleChange}
        placeholder="Alternate Email"
      />
      <input
        type="text"
        name="productService"
        value={formData.productService}
        onChange={handleChange}
        placeholder="Product/Service"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="productManufacture"
        value={formData.productManufacture}
        onChange={handleChange}
        placeholder="Product Manufacture"
      />
      <textarea
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Additional Info"
      ></textarea>
      <input
        type="text"
        name="bankName"
        value={formData.bankName}
        onChange={handleChange}
        placeholder="Bank Name"
      />
      <input
        type="text"
        name="branchName"
        value={formData.branchName}
        onChange={handleChange}
        placeholder="Branch Name"
      />
      <input
        type="text"
        name="ifscCode"
        value={formData.ifscCode}
        onChange={handleChange}
        placeholder="IFSC Code"
      />
      <input
        type="text"
        name="bankingName"
        value={formData.bankingName}
        onChange={handleChange}
        placeholder="Banking Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VendorTesting;
