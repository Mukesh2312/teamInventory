import React, { useState } from "react";

const Testing = () => {
  const [formData, setFormData] = useState({
    tenderName: "",
    title: "",
    issueDate: "",
    tenderFloatingDate: "",
    description: "",
    bidderName: "",
    documentDownloadStartDate: "",
    documentDownloadEndDate: "",
    bidSubmissionStartDate: "",
    bidSubmissionEndDate: "",
    bidValidity: "",
    prebidMeetingAddressPortal: "",
    technicalBidOpeningDate: "",
    periodOfWork: "",
    location: "",
    pincode: "",
    bidOpeningPlace: "",
    productCategory: "",
    natureOfWork: "",
    documents: [], // To store 6 different files
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handling file input for 6 different files
  const handleFileChange = (e, index) => {
    const updatedFiles = [...formData.documents];
    updatedFiles[index] = e.target.files[0]; // Get the selected file
    setFormData({ ...formData, documents: updatedFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      if (key === "documents") {
        formData.documents.forEach((file) => {
          if (file) {
            data.append("documents", file); // Append each file
            // console.log(file);
          }
        });
      } else {
        data.append(key, formData[key]); // Append other fields
        // console.log(key, formData[key]);
      }
    }

    try {
      // console.log([...data]);
      console.log(formData);
      // for (let pair of data.entries()) {
      //   console.log(pair[0], pair[1]); // Logs each key-value pair
      // }
      const response = await fetch(
        "https://erp-inventery-node-js.onrender.com/tenders",
        {
          method: "POST",
          body: data, // Send FormData
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tender Name:</label>
        <input
          type="text"
          name="tenderName"
          value={formData.tenderName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Issue Date:</label>
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Tender Floating Date:</label>
        <input
          type="date"
          name="tenderFloatingDate"
          value={formData.tenderFloatingDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Bidder Name:</label>
        <input
          type="text"
          name="bidderName"
          value={formData.bidderName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Document Download Start Date:</label>
        <input
          type="date"
          name="documentDownloadStartDate"
          value={formData.documentDownloadStartDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Document Download End Date:</label>
        <input
          type="date"
          name="documentDownloadEndDate"
          value={formData.documentDownloadEndDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Bid Submission Start Date:</label>
        <input
          type="date"
          name="bidSubmissionStartDate"
          value={formData.bidSubmissionStartDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Bid Submission End Date:</label>
        <input
          type="date"
          name="bidSubmissionEndDate"
          value={formData.bidSubmissionEndDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Bid Validity:</label>
        <input
          type="text"
          name="bidValidity"
          value={formData.bidValidity}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Prebid Meeting Address Portal:</label>
        <input
          type="text"
          name="prebidMeetingAddressPortal"
          value={formData.prebidMeetingAddressPortal}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Technical Bid Opening Date:</label>
        <input
          type="date"
          name="technicalBidOpeningDate"
          value={formData.technicalBidOpeningDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Period of Work:</label>
        <input
          type="text"
          name="periodOfWork"
          value={formData.periodOfWork}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Bid Opening Place:</label>
        <input
          type="text"
          name="bidOpeningPlace"
          value={formData.bidOpeningPlace}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Product Category:</label>
        <input
          type="text"
          name="productCategory"
          value={formData.productCategory}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Nature of Work:</label>
        <input
          type="text"
          name="natureOfWork"
          value={formData.natureOfWork}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* File inputs for 6 files */}
      <div>
        <label>Document 1:</label>
        <input type="file" onChange={(e) => handleFileChange(e, 0)} />
      </div>
      <div>
        <label>Document 2:</label>
        <input type="file" onChange={(e) => handleFileChange(e, 1)} />
      </div>
      <div>
        <label>Document 3:</label>
        <input type="file" onChange={(e) => handleFileChange(e, 2)} />
      </div>
      <div>
        <label>Document 4:</label>
        <input type="file" onChange={(e) => handleFileChange(e, 3)} />
      </div>
      <div>
        <label>Document 5:</label>
        <input type="file" onChange={(e) => handleFileChange(e, 4)} />
      </div>
      <div>
        <label>Document 6:</label>
        <input type="file" onChange={(e) => handleFileChange(e, 5)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Testing;
