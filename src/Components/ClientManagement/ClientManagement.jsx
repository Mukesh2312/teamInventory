import React, { useState, useEffect } from "react";
import stl from "./ClientManagement.module.css";
import FilterIcon from "../IconComponents/FilterIcon";
import SearchIcon from "../IconComponents/SearchIcon";
import { data } from "../IconComponents/clientData";
import { useNavigate, Outlet, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { useUser } from "../UserContext";

const ClientManagement = () => {
  const [clientData, setClientData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    fetchiClient();
  }, []);

  // importing globle state for client data
  const { setClient } = useUser();

  const captureClient = async (id) => {
    try {
      const res = await axios.get(
        `https://erp-inventery-node-js.onrender.com/client/getByid/${id}`
      );
      const data = res.data;
      console.log(data);
      setClient(data);
      navigate("/client-details");
    } catch (error) {
      console.log(error);
    }
  };

  // fetching client data
  const fetchiClient = async () => {
    try {
      const res = await axios.get(
        "https://erp-inventery-node-js.onrender.com/client/findByQuery/"
      );
      const data = res.data;
      console.log(data);
      setClientData(data);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const onClickHandler = () => {
    {
      navigate("/create-client");
    }
  };

  // creating table Row for rendering (refactoring)
  const tableRow = (data) => {
    return data.map((item) => (
      <>
        <tr key={item._id}>
          <td>{item.srNo}</td>
          <td>{item.dealerName}</td>
          <td>{item.manufacturerName}</td>
          <td>{item.productName}</td>
          <td>{item.productCode}</td>
          <td>{item.hsnCode}</td>
          <td>
            <button
              className={stl.actionBtn}
              onClick={() => captureClient(item._id)}
            >
              View Details
            </button>
          </td>
        </tr>
      </>
    ));
  };

  // search handler
  let searchVal;
  const searchHandler = (e) => {
    searchVal = e.target.value;

    clearTimeout(debouncingTimeout);
    debouncingTimeout = setTimeout(() => {
      if (searchVal) {
        fetchingSearchData(searchVal);
      }
    }, 500);
  };

  const fetchingSearchData = async (id) => {
    try {
      const res = await axios.get(
        `https://erp-inventery-node-js.onrender.com/client/findByQuery?dealerName=${id}`
      );
      const data = res.data;
      console.log(data);
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  let debouncingTimeout;
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <div id={stl.clientMng}>
          <div className={stl.topcontent}>
            <div className={stl.heading}>
              <h2>Client Management</h2>
              <div className={stl.btnContainer}>
                <button className={stl.Btn} onClick={onClickHandler}>
                  Create
                </button>
              </div>
            </div>
            <div className={stl.searchBarContainer}>
              <div className={stl.searchInnerContainer}>
                <input
                  type="search"
                  className="searchInput"
                  placeholder="Search"
                  onChange={searchHandler}
                />
                <button>
                  <SearchIcon />
                </button>
              </div>
              <div className={stl.filterBtn}>
                <FilterIcon />
                Filter
              </div>
            </div>
          </div>

          <div className={stl.hrLine}></div>

          <div className={stl.dataContainer}>
            <div className={stl.tableContainer}>
              <table className={stl.theding}>
                <thead>
                  <tr>
                    <th className={stl.theding}>Sr. No.</th>
                    <th className={stl.theding}>Dealer Name</th>
                    <th className={stl.theding}>Manufacturer Name</th>
                    <th className={stl.theding}>Name of Product</th>
                    <th className={stl.theding}>Product Code</th>
                    <th className={stl.theding}>HSN No.</th>
                    <th className={stl.theding}>Action</th>
                  </tr>
                </thead>

                <tbody id={stl.tdContainer}>
                  {searchData.length > 0
                    ? tableRow(searchData)
                    : tableRow(clientData)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientManagement;
