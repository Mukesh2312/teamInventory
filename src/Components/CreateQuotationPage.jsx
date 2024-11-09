import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import stl from "../css/CreateQuotationPage.module.css";

const CreateQuotationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full px-5">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold items-center ">Create</h2>
          <Link onClick={() => navigate(-1)}>
            <button className="text-gray-500 hover:text-gray-800 float-right">
              <AiOutlineClose size={30} />
            </button>
          </Link>
        </div>

        {/* Quotation Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">
              QUOTATION NO:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quotation number"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">
              QUOTATION DATE:
            </label>
            <div className="relative w-2/3">
              <input
                type="date"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineCalendar className="absolute top-3 right-3 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">
              QUOTATION Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quotation name"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">
              Validity of Quotation:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter validity period"
            />
          </div>
        </div>

        {/* From and To Section */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          {/* From Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">From</h3>
            {[
              "Company Name",
              "Address",
              "City, State, (zip code)",
              "E-mail",
              "Mobile",
            ].map((label) => (
              <div key={label} className="flex items-center mb-2">
                <label className="w-1/3 text-sm font-medium text-gray-700">
                  {label}:
                </label>
                <input
                  type="text"
                  className="p-2 w-2/3 border border-gray-300 rounded-md"
                  placeholder="Autofill"
                />
              </div>
            ))}
          </div>

          {/* To Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">To</h3>
            {[
              "Customer Name",
              "Address",
              "City, State, zip code",
              "E-mail",
              "Mobile",
            ].map((label) => (
              <div key={label} className="flex items-center mb-2">
                <label className="w-1/3 text-sm font-medium text-gray-700">
                  {label}:
                </label>
                <input
                  type="text"
                  className="p-2 w-2/3 border border-gray-300 rounded-md"
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">Bank Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Name of the Bank",
              "Location",
              "Name of the Account",
              "Account Type",
              "IFSC Code",
            ].map((label) => (
              <div key={label} className="flex items-center mb-2">
                <label className="w-1/3 text-sm font-medium text-gray-700">
                  {label}:
                </label>
                <input
                  type="text"
                  className="p-2 w-2/3 border border-gray-300 rounded-md"
                  placeholder="Autofill"
                />
              </div>
            ))}
          </div>
        </div>

        <h2>Quotatio Details </h2>
        <table id={stl.qtTable}>
          <thead id={stl.qtTableHead}>
            <tr className={stl.qtTableheadRow}>
              <th rowSpan="2" className={stl.qtTableth}>
                Item No
              </th>
              <th rowSpan="2" className={stl.qtTableth}>
                Quantity
              </th>
              <th rowSpan="2" className={stl.qtTableth}>
                Unit Price
              </th>
              <th rowSpan="2" className={stl.qtTableth}>
                Discount %
              </th>
              <th rowSpan="2" className={stl.qtTableth}>
                Discount AMT
              </th>
              <th colSpan="2" className={stl.qtTableth}>
                SGST
              </th>
              <th colSpan="2" className={stl.qtTableth}>
                CGST
              </th>
              <th rowSpan="2" className={stl.qtTableth}>
                Total
              </th>
            </tr>
            <tr className={stl.qtTableheadRow}>
              <th className={stl.qtTableth}>Rate %</th>
              <th className={stl.qtTableth}>Amt.(Rs)</th>
              <th className={stl.qtTableth}>Rate %</th>
              <th className={stl.qtTableth}>Amt.(Rs)</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateQuotationPage;
