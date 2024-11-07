import { useState } from "react";
import "./App.css";

import WaereHouse from "./Components/WareHouse";
import Dashboard from "./Components/Dashboard";
import VendorManagement from "./Components/VendorManagement";
import Inventory from "./Components/Inventory";
// import ProductDetails from "./Components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryTracking from "./Components/InventaryTracking";
import InventoryTrackingPage from "./Components/InventoryTrackingPage";
import EditOrderStatus from "./Components/EditOrderStatus";
import QuotationPage from "./Components/QuotationPage";
import CreateQuotationPage from "./Components/CreateQuotationPage";

import ClientManagement from "./Components/ClientManagement/ClientManagement";
import Createclient from "./Components/ClientManagement/CreateClients/Createclient";
import ClientDetails from "./Components/ClientManagement/ClientDetails/ClientDetails";

import ProductManagement from "./Components/ProductManagement/ProductManagement";
import AddProduct from "./Components/ProductManagement/AddProduct/AddProduct";
import ProductDetails from "./Components/ProductDetails";
import Details from "./Components/Details";

import PurchaseOrder from "./Components/ProductManagement/PurchaseOrder/PurchaseOrder";
import CreatePurchaseOrder from "./Components/ProductManagement/CreatePurchaseOrder/CreatePurchaseOrder";
import PurchaseOrderBill from "./Components/PurchaseOrderBill/PurchaseOrderBill";

import TenderManagement from "./Components/TenderManagement/TenderManagement";
import CreateTender from "./Components/TenderManagement/CreateTender/CreateTender";
import TenderDetails from "./Components/TenderManagement/TenderDetails/TenderDetails";
import UploadedDocumets from "./Components/TenderManagement/UploadDocuments/UploadeDocuments";

import Replenishment from "./Components/Replenishment/Replenishment";
import CreateReplenishmentOrder from "./Components/Replenishment/CreateReplenishmentOrder/CreateReplenishmentOrder";
import Testing from "./Components/Testing";
import SideBar from "./Components/SideBar/SideBar";

import Reports from "./Components/AllReports/Reports";
import VendorTesting from "./Components/VendorTesting";

import VendorForm from "./Components/VendorForm";
import UpdateVendor from "./Components/UpdateVendor";
import VendorSearch from "./Components/VendorSearch";
import Graph from "./Components/AllReports/GraphData/Graph";

// import GetLeads from "./Components/getLead";

// import Dashboard from "../../inventory-dashboard/src/Components/Dashboard";
// import VendorManagement from "../../vendor-management/src/Components/VendorManagement";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/inventory" element={<Inventory />} />

              <Route
                path="/InventoryTracking"
                element={<InventoryTracking />}
              />
              <Route
                path="/InventoryTrackingPage"
                element={<InventoryTrackingPage />}
              />

              <Route path="/EditOrderStatus" element={<EditOrderStatus />} />

              <Route path="/QuotationPage" element={<QuotationPage />} />
              <Route
                path="/CreateQuotationPage"
                element={<CreateQuotationPage />}
              />

              <Route path="/ProductDetails" element={<ProductDetails />} />
              {/* <Route path="/Details" element={<Details />} /> */}
              <Route path="/WareHouse" element={<WaereHouse />} />
              <Route path="/VendorManagement" element={<VendorManagement />} />
              <Route path="/create-vendor" element={<VendorForm />} />
              <Route path="/update-vendor" element={<UpdateVendor />} />
              <Route path="/searchV" element={<VendorSearch />} />

              {/* Code by mukesh */}
              <Route path="/tender" element={<TenderManagement />} />
              <Route path="/create-tender" element={<CreateTender />} />
              <Route path="/tender-details" element={<TenderDetails />} />
              <Route path="/uploaded-document" element={<UploadedDocumets />} />

              <Route path="/client" element={<ClientManagement />}></Route>
              <Route path="/create-client" element={<Createclient />}></Route>
              <Route path="/client-details" element={<ClientDetails />}></Route>

              <Route path="/product" element={<ProductManagement />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/product-details" element={<ProductDetails />} />
              <Route path="/details" element={<Details />} />

              <Route path="/purchase-order" element={<PurchaseOrder />} />
              <Route
                path="/create-purchase-order"
                element={<CreatePurchaseOrder />}
              />
              <Route path="/purchase-bill" element={<PurchaseOrderBill />} />

              <Route path="/replenishment" element={<Replenishment />} />
              <Route
                path="/create-rep"
                element={<CreateReplenishmentOrder />}
              />
              <Route path="/reports" element={<Reports />} />
              <Route path="/graph" element={<Graph />} />

              {/* Code by mukesh */}

              <Route path="/testing" element={<Testing />} />
              <Route path="/vtesting" element={<VendorTesting />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
