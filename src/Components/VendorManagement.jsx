import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "./UserContext";
import Spinner from "./Spinner/Spinner";

const VendorManagement = () => {
  const [open, setOpen] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);

  const { setUpdateVendor } = useUser();

  useEffect(() => {
    setIsSpinner(true);
    handleSubmit();
  }, []);
  const handleSubmit = async (e) => {
    try {
      const res = await axios.get(
        "https://erp-inventery-node-js.onrender.com/vendor/getAllVendors"
      );
      const data = await res.data;
      console.log(data);
      setVendorData(data);
      setIsSpinner(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  // update the vendor data start

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
  // update the vendor data end

  if (isSpinner) {
    return <Spinner />;
  } else {
    return (
      <div className="p-6 bg-white px-6 py-3 mt-4" style={style}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Vendors Management</h1>
          <Link to="/create-vendor">
            <button className="bg-[#56AAC5] w-[132px] h-[32px] font-medium text-black rounded-[10px]">
              Create
            </button>
          </Link>
        </div>
        <div className="flex items-center mb-8 gap-4 border-b border-b-black pb-[5px]">
          <div className="relative">
            <input
              type="text"
              className="border-2 border-gray-400 p-2 pl-6 w-80 rounded-[25px]"
              placeholder="Search"
            />
            <span className="absolute top-2/4 translate-y-[-50%] right-4 cursor-pointer">
              <svg
                className="h-[25px] w-[25px] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>
          <button className="flex items-center p-2 rounded-md font-medium">
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

        <div className="block w-full overflow-auto">
          <table className="min-w-full bg-white border border-none text-center">
            <thead className="border-b-[2.98px] border-solid border-[#D5D9DD] h-14">
              <tr className="leading-[14.04px] opacity-50 whitespace-nowrap">
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
              {vendorData?.map((vendor) => (
                <tr key={vendor._id}>
                  <td className="py-2 px-4 border-b">{vendor.vendorId}</td>
                  <td className="py-2 px-4 border-b">{vendor.vendorName}</td>
                  <td className="py-2 px-4 border-b">{vendor.contactName}</td>
                  <td className="py-2 px-4 border-b">{vendor.alternateName}</td>
                  <td className="py-2 px-4 border-b">{vendor.contactEmail}</td>
                  <td className="py-2 px-4 border-b">
                    {vendor.alternateEmail}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {vendor.productService}
                  </td>
                  <td className="py-2 px-4 border-b">{vendor.category}</td>
                  <td className="py-2 px-4 border-b">
                    {vendor.productManufacture}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {vendor.additionalInfo}
                  </td>
                  <td className="py-2 px-4 border-b">{vendor.bankName}</td>
                  <td className="py-2 px-4 border-b">{vendor.branchName}</td>
                  <td className="py-2 px-4 border-b">{vendor.ifscCode}</td>
                  <td className="py-2 px-4 border-b">{vendor.bankingName}</td>
                  <td>
                    <Link to="/update-vendor">
                      <button onClick={() => onClickHandler(vendor._id)}>
                        edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end mt-4 gap-3">
          <div className="bg-[#D9D9D933] border rounded-lg h-[33px] w-[36px] flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-[#D9D9D933] border rounded-lg">
              Prev
            </button>
            <button className="px-3 py-1 bg-[#D9D9D933] border rounded-lg">
              Next
            </button>
          </div>
          <div className="flex items-center gap-1 space-x-2">
            <span>Page:</span>
            <select className="border p-1 rounded-lg cursor-pointer">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <span className="whitespace-nowrap">of 5</span>
          </div>
        </div>
      </div>
    );
  }
};

export default VendorManagement;
const style = {
  width: "1197px",
  maxWidth: "100%",
  margin: "auto",
};
// {
//   id: 50012,
//   name: "Vendor Name",
//   contact: "Contact Name",
//   altName: "Alternate Name",
//   contactEmail: "Contact Email",
//   altEmail: "Alternate Email",
//   service: "Product/Service",
//   Category: "Category",
//   product: "Product management",
//   AditionalInfo: "Additional Information",
//   BankName: "Bank Name",
//   BranchName: "Branch Name",
//   IFSC: "IFCS Code",
//   BankingName: "Banking Name",
// },

// {
//   id: 50013,
//   name: "Vendor Name",
//   contact: "Contact Name",
//   altName: "Alternate Name",
//   contactEmail: "Contact Email",
//   altEmail: "Alternate Email",
//   service: "Product/Service",
//   Category: "Category",
//   product: "Product management",
//   AditionalInfo: "Additional Information",
//   BankName: "Bank Name",
//   BranchName: "Branch Name",
//   IFSC: "IFCS Code",
//   BankingName: "Banking Name",
// },

// {
//   id: 50014,
//   name: "Vendor Name",
//   contact: "Contact Name",
//   altName: "Alternate Name",
//   contactEmail: "Contact Email",
//   altEmail: "Alternate Email",
//   service: "Product/Service",
//   Category: "Category",
//   product: "Product management",
//   AditionalInfo: "Additional Information",
//   BankName: "Bank Name",
//   BranchName: "Branch Name",
//   IFSC: "IFCS Code",
//   BankingName: "Banking Name",
// },

// {
//   id: 50015,
//   name: "Vendor Name",
//   contact: "Contact Name",
//   altName: "Alternate Name",
//   contactEmail: "Contact Email",
//   altEmail: "Alternate Email",
//   service: "Product/Service",
//   Category: "Category",
//   product: "Product management",
//   AditionalInfo: "Additional Information",
//   BankName: "Bank Name",
//   BranchName: "Branch Name",
//   IFSC: "IFCS Code",
//   BankingName: "Banking Name",
// },

// {
//   id: 50016,
//   name: "Vendor Name",
//   contact: "Contact Name",
//   altName: "Alternate Name",
//   contactEmail: "Contact Email",
//   altEmail: "Alternate Email",
//   service: "Product/Service",
//   Category: "Category",
//   product: "Product management",
//   AditionalInfo: "Additional Information",
//   BankName: "Bank Name",
//   BranchName: "Branch Name",
//   IFSC: "IFCS Code",
//   BankingName: "Banking Name",
// },

// {
//   id: 50017,
//   name: "Vendor Name",
//   contact: "Contact Name",
//   altName: "Alternate Name",
//   contactEmail: "Contact Email",
//   altEmail: "Alternate Email",
//   service: "Product/Service",
//   Category: "Category",
//   product: "Product management",
//   AditionalInfo: "Additional Information",
//   BankName: "Bank Name",
//   BranchName: "Branch Name",
//   IFSC: "IFCS Code",
//   BankingName: "Banking Name",
// },
