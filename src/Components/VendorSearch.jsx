import React, { useState, useEffect } from "react";

const VendorSearch = () => {
  return (
    <div>
      <h2>Search Vendors</h2>
      <input
        type="text"
        placeholder="Search by any field"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
      />

      <div>
        <h3>Search Results:</h3>
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => (
            <div key={vendor._id}>
              <h3>{vendor.vendorName}</h3>
              <p>Vendor ID: {vendor.vendorId}</p>
              <p>Contact Name: {vendor.contactName}</p>
              <p>Product/Service: {vendor.productService}</p>
              <p>Category: {vendor.category}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No vendors found</p>
        )}
      </div>
    </div>
  );
};

export default VendorSearch;
