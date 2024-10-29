import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import Spinner from "./Spinner/Spinner";

const VendorManagement = () => {
  const [vendorData, setVendorData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);
  const [ival, setIval] = useState("");

  const { setUpdateVendor } = useUser();

  useEffect(() => {
    setIsSpinner(true);
    getAllVendorsData();
  }, []);

  // fetching all the data from the api
  const getAllVendorsData = async (e) => {
    try {
      const res = await axios.get(
        "https://erp-inventery-node-js.onrender.com/vendor/getByQuery"
      );
      const data = await res.data;
      // console.log(data);
      setVendorData(data);
      setIsSpinner(false);
    } catch (error) {
      console.error(error);
    }
  };

  // fetching specific vendor data by id
  const onClickHandler = async (id) => {
    try {
      const res = await axios.get(
        `https://erp-inventery-node-js.onrender.com/vendor/getVendorById/${id}`
      );
      const data = await res.data.vendor;
      // console.log(data);
      setUpdateVendor(data);
    } catch (error) {
      console.log(error);
    }
  };

  //  on input search code start
  let val = "";
  const inputHandler = (e) => {
    val = e.target.value;
    // setIval(val);

    clearTimeout(debouncingTimeout);

    debouncingTimeout = setTimeout(() => {
      if (val) {
        searchHandler(val);
      }
    }, 500);

    // if (val === "") {
    //   setSearchData([]);
    // }
  };
  const searchHandler = async (value) => {
    // console.log("search clicked");
    try {
      const res = await axios.get(
        `https://erp-inventery-node-js.onrender.com/vendor/getByQuery?vendorName=${value}`
      );
      const data = await res.data;
      console.log(data);
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderVendorRows = (data) => {
    return data.map((vendor) => (
      <tr key={vendor._id}>
        <td className="py-2 px-4 border-b">{vendor.vendorId}</td>
        <td className="py-2 px-4 border-b">{vendor.vendorName}</td>
        <td className="py-2 px-4 border-b">{vendor.contactName}</td>
        <td className="py-2 px-4 border-b">{vendor.alternateName}</td>
        <td className="py-2 px-4 border-b">{vendor.contactEmail}</td>
        <td className="py-2 px-4 border-b">{vendor.alternateEmail}</td>
        <td className="py-2 px-4 border-b">{vendor.productService}</td>
        <td className="py-2 px-4 border-b">{vendor.category}</td>
        <td className="py-2 px-4 border-b">{vendor.productManufacture}</td>
        <td className="py-2 px-4 border-b">{vendor.additionalInfo}</td>
        <td className="py-2 px-4 border-b">{vendor.bankName}</td>
        <td className="py-2 px-4 border-b">{vendor.branchName}</td>
        <td className="py-2 px-4 border-b">{vendor.ifscCode}</td>
        <td className="py-2 px-4 border-b">{vendor.bankingName}</td>
        <td>
          <Link to="/update-vendor">
            <button onClick={() => onClickHandler(vendor._id)}>edit</button>
          </Link>
        </td>
      </tr>
    ));
  };

  let debouncingTimeout;

  //  on input search code start

  if (isSpinner) {
    return <Spinner />;
  } else {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Vendors Management</h1>
          <Link to="/create-vendor">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Create
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <input
              type="search"
              className="border border-gray-300 rounded-md p-2 pl-10 w-80"
              placeholder="Search"
              onChange={inputHandler}
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.9-5.4A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 017.05 7.05z"
                />
              </svg>
            </span>
          </div>
          <button className="flex items-center bg-gray-100 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            Filter
          </button>
        </div>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Vendor ID</th>
              <th className="py-2 px-4 border-b">Vendor Name</th>
              <th className="py-2 px-4 border-b">Contact Name</th>
              <th className="py-2 px-4 border-b">Alternate Name</th>
              <th className="py-2 px-4 border-b">Contact Email</th>
              <th className="py-2 px-4 border-b">Alternate Email</th>
              <th className="py-2 px-4 border-b">Product/Service</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Product Manufracturer</th>
              <th className="py-2 px-4 border-b">Additional Information</th>
              <th className="py-2 px-4 border-b">Bank Name</th>
              <th className="py-2 px-4 border-b">Baranch Name</th>
              <th className="py-2 px-4 border-b">IFSC Code</th>
              <th className="py-2 px-4 border-b">Banking Name</th>
            </tr>
          </thead>
          <tbody>
            {searchData.length > 0
              ? renderVendorRows(searchData)
              : renderVendorRows(vendorData)}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-lg">Prev</button>
            <button className="px-3 py-1 border rounded-lg">Next</button>
          </div>
          <div className="flex items-center space-x-2">
            <span>Page: 1 of 5</span>
            <select className="border p-1 rounded-lg">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

export default VendorManagement;
