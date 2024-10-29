import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';

const CreateQuotationPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg relative">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold items-center ">Create</h2>
          <button className="text-gray-500 hover:text-gray-800 float-right">
            <AiOutlineClose size={30} />
          </button>
        </div>

        {/* Quotation Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">QUOTATION NO:</label>
            <input
              type="text"
              className="mt-1 p-2 w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quotation number"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">QUOTATION DATE:</label>
            <div className="relative w-2/3">
              <input
                type="date"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineCalendar className="absolute top-3 right-3 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">QUOTATION Name:</label>
            <input
              type="text"
              className="mt-1 p-2 w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quotation name"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">Validity of Quotation:</label>
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
            {['Company Name', 'Address', 'City, State, (zip code)', 'E-mail', 'Mobile'].map((label) => (
              <div key={label} className="flex items-center mb-2">
                <label className="w-1/3 text-sm font-medium text-gray-700">{label}:</label>
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
            {['Customer Name', 'Address', 'City, State, zip code', 'E-mail', 'Mobile'].map((label) => (
              <div key={label} className="flex items-center mb-2">
                <label className="w-1/3 text-sm font-medium text-gray-700">{label}:</label>
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
            {['Name of the Bank', 'Location', 'Name of the Account', 'Account Type', 'IFSC Code'].map((label) => (
              <div key={label} className="flex items-center mb-2">
                <label className="w-1/3 text-sm font-medium text-gray-700">{label}:</label>
                <input
                  type="text"
                  className="p-2 w-2/3 border border-gray-300 rounded-md"
                  placeholder="Autofill"
                />
              </div>
            ))}
          </div>
        </div>
         
       
       <h2 className='font-extrabold mb-5 fon- '>Quotatio Details </h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Item No</th>
              <th className="px-4 py-2 border border-gray-300">Quantity</th>
              <th className="px-4 py-2 border border-gray-300">Unit Price</th>
              <th className="px-4 py-2 border border-gray-300">Discount %</th>
              <th className="px-4 py-2 border border-gray-300">Discount AMT</th>
              <th className="px-4 py-2 border border-gray-300">SGST <br /> Rate (%) | Amt (Rs)</th>
              <th className="px-4 py-2 border border-gray-300">CGST <br /> Rate (%) | Amt (Rs)</th>
              <th className="px-4 py-2 border border-gray-300">IGST <br /> Rate (%) | Amt (Rs)</th>
              <th className="px-4 py-2 border border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border border-gray-300">
                  <select className="w-full p-1 border border-gray-300 rounded-md focus:outline-none">
                  </select>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="number" className="w-full p-1 border border-gray-300 rounded-md focus:outline-none" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="number" className="w-full p-1 border border-gray-300 rounded-md focus:outline-none" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="number" className="w-full p-1 border border-gray-300 rounded-md focus:outline-none" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="text" className="w-full p-1 border border-gray-300 rounded-md focus:outline-none" readOnly value="0.00" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex flex-col">
                    <input type="number" className="w-full p-1 border-b border-gray-300 focus:outline-none" placeholder="Rate (%)" />
                    <input type="number" className="w-full p-1 border-t border-gray-300 focus:outline-none" placeholder="Amt (Rs)" />
                  </div>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex flex-col">
                    <input type="number" className="w-full p-1 border-b border-gray-300 focus:outline-none" placeholder="Rate (%)" />
                    <input type="number" className="w-full p-1 border-t border-gray-300 focus:outline-none" placeholder="Amt (Rs)" />
                  </div>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex flex-col">
                    <input type="number" className="w-full p-1 border-b border-gray-300 focus:outline-none" placeholder="Rate (%)" />
                    <input type="number" className="w-full p-1 border-t border-gray-300 focus:outline-none" placeholder="Amt (Rs)" />
                  </div>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="number" className="w-full p-1 border border-gray-300 rounded-md focus:outline-none" readOnly />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     
  );
};

export default CreateQuotationPage;
