import React, { useState } from "react";
import { useUser } from "./UserContext";

const Details = () => {
  // State to manage input values
  const [formData, setFormData] = useState({
    srNo: "50012",
    productName: "HP Victus",
    model: "HP",
    productType: "Electronics",
    availableModelNos: "35",
    skuCode: "35245534",
    hsnCode: "32455545",
    amcValidFrom: "30 Apr 2023",
    description:
      "The Victus by HP Laptop is made for peak PC gaming. This sleek machine touts a 14th Gen Intel® Core™ processor and modern NVIDIA® graphics card. This laptop also has new optimization features to push performance even further, updated thermals, and an upgraded keyboard.",
    companyPrice: "23,000.00",
    ratings: "⭐⭐⭐⭐⭐",
  });

  const [errors, setErrors] = useState({});

  const { product } = useUser();
  console.log(product);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value); // Validate the field on change
  };

  // Validate fields
  const validateField = (name, value) => {
    let tempErrors = { ...errors };
    if (!value) {
      tempErrors[name] = "This field is required.";
    } else {
      delete tempErrors[name];
    }
    setErrors(tempErrors);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Title Section */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Product Details
      </h2>

      {/* Main Flex Container */}
      <div>
        <label htmlFor="srNO">SR No.</label>
        <input
          type="text"
          className={"rounded border p-1"}
          value={product.srNo}
          readOnly
        />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Product Image and Description */}
        <div className="md:flex-1 pr-4">
          {/* Product Image Section */}
          <div className="mb-6 flex justify-center">
            <img
              src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=480&h=480&dpr=1" // Resized image URL
              alt="Product"
              className="h-64 w-64 object-cover rounded-md shadow-md" // Adjust size as needed
            />
          </div>

          {/* Product Description Section */}
          <div className="mb-6">
            <h3 className="font-semibold">Product Description :</h3>
            <textarea
              name="description"
              className="text-gray-600 border p-4 rounded-md bg-gray-100 w-full"
              value={product.productDescription}
              onChange={handleChange}
              rows={4}
            />
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="md:flex-1">
          <div className="grid grid-cols-1 gap-6">
            {/* Input Fields Group */}

            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">Product Name :</label>
              <input
                type="text"
                name="productName"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.productName}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">Model :</label>
              <input
                type="text"
                name="model"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.model}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">Product Type :</label>
              <input
                type="text"
                name="productType"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.productType}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">
                Available Model nos :
              </label>
              <input
                type="text"
                name="availableModelNos"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.availableModelNos}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">SKU Code :</label>
              <input
                type="text"
                name="skuCode"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.skuCode}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">
                HSN / SAC Code :
              </label>
              <input
                type="text"
                name="hsnSacCode"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.hsnSacCode}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">
                AMC Valid From :
              </label>
              <input
                type="text"
                name="amcValidityStartDate"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.amcValidityStartDate}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">AMC Valid To :</label>
              <input
                type="text"
                name="amcValidityEndDate"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.amcValidityEndDate}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">Warranty :</label>
              <input
                type="text"
                name="warranty"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.warranty}
              />
            </div>
            <div className="flex items-center mb-1">
              <label className="font-semibold mr-2 w-1/3">Expiry Date :</label>
              <input
                type="text"
                name="expiryDate"
                className={`border rounded-md p-2 w-2/3 border-gray-300`}
                value={product.expiryDate}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product & Pricing Section */}
      <div className="mb-6 mt-6">
        <h3 className="font-semibold">Product & Pricing</h3>
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Company Price Section */}
          <div className="flex-1 mb-4 md:mb-0">
            <label className="font-semibold">Company Price :</label>
            <input
              type="text"
              name="price"
              className={`border rounded-2xl p-2 w-full border-gray-300`}
              value={product.companyPrice}
            />
          </div>

          {/* Ratings Section */}
          <div className="flex-1 mb-4 md:mb-0">
            <label className="font-semibold">Ratings :</label>
            <input
              type="text"
              name="ratings"
              className={`border rounded-2xl p-2 w-full ${
                errors.ratings ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.ratings}
              onChange={handleChange}
            />
            {errors.ratings && (
              <span className="text-red-500 text-sm">{errors.ratings}</span>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Documentation Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold">Product Brochure :</h3>
              <img
                src={product.productBrochure}
                alt="brochure"
                className="h-40 w-40 object-cover rounded-md mx-auto shadow-md"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold">PPT Available :</h3>
              <img
                src={product.pptAvailable}
                alt="pptAvailable"
                className="h-40 w-40 object-cover rounded-md mx-auto shadow-md"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold">Covering Latter :</h3>
              <img
                src={product.coveringLetter}
                alt="coveringLetter"
                className="h-40 w-40 object-cover rounded-md mx-auto shadow-md"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold">ISO Certificate :</h3>
              <img
                src={product.coveringLetter}
                alt="coveringLetter"
                className="h-40 w-40 object-cover rounded-md mx-auto shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Technical Specification Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Technical Specification
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <span className="font-semibold">Processor:</span> Up to Intel®
                Core™ i7-14700HX (up to 5.5 GHz with Intel® Turbo Boost
                Technology).
              </li>
              <li>
                <span className="font-semibold">Graphics:</span> Up to 120W TGP
                with NVIDIA® GeForce RTX™ 4070 Laptop GPU (8 GB GDDR6
                dedicated).
              </li>
              <li>
                <span className="font-semibold">Memory:</span> Up to 32 GB
                DDR5-5200 MHz RAM (2 × 16 GB).
              </li>
              <li>
                <span className="font-semibold">Memory Slots:</span> Supports
                two memory slots for upgrade.
              </li>
              <li>
                <span className="font-semibold">Storage:</span> Up to 1 TB PCIe®
                NVMe™ SSD.
              </li>
              <li>
                <span className="font-semibold">Display:</span> 15.6" Full HD
                (1920 x 1080) IPS, 144Hz refresh rate.
              </li>
              <li>
                <span className="font-semibold">Battery Life:</span> Up to 10
                hours of usage on a single charge.
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-3xl shadow-sm text-center">
            <h3 className="font-semibold">Dimension :</h3>
            <p>Height (23.5 mm); Width (357.9 mm); Depth(255 mm)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-3xl shadow-sm text-center">
            <h3 className="font-semibold">Materials :</h3>
            <p>Entirely plastic</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-3xl shadow-sm text-center">
            <h3 className="font-semibold">Performance :</h3>
            <p>Very good budget gaming laptop</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
