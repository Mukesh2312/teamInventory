import { useEffect, useState } from "react";
import stl from "./TenderTable.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../UserContext";

const TenderTable = ({ status, tender }) => {
  // const navigate = useNavigate();
  // console.log("printing from child component:", status);

  // const filterData = () => {
  //   console.log("trigger");
  //   if (status === "all") return tenderData;
  //   return tenderData.filter((item) => item.status === status);
  // };

  // const selectedFilterData = filterData();

  //conditional rendering based on status of tender
  // if (status === "submitted") {
  //   return (
  //     <>
  //       {/* <h2>submitted</h2> */}
  //       <div className={stl.dataContainer}>
  //         <div className={stl.tableContainer}>
  //           <table className={stl.theding}>
  //             <thead>
  //               <tr>
  //                 <th className={stl.theding}>Tender ID</th>
  //                 <th className={stl.theding}>Title</th>
  //                 <th className={stl.theding}>Issued Date</th>
  //                 <th className={stl.theding}>Authorized Person</th>
  //                 <th className={stl.theding}>Action</th>
  //               </tr>
  //             </thead>

  //             <tbody>
  //               {selectedFilterData?.map((item, index) => {
  //                 return (
  //                   <tr key={index}>
  //                     <td>{item.tender_id}</td>
  //                     <td>{item.tilte}</td>
  //                     <td>{item.issued_date}</td>
  //                     <td>{item.authorised_person}</td>

  //                     <td>
  //                       <Link to="/tender-details">
  //                         <button className={stl.actionBtn}>
  //                           View Details
  //                         </button>
  //                       </Link>
  //                     </td>
  //                   </tr>
  //                 );
  //               })}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else if (status === "ongoing") {
  //   return (
  //     <>
  //       {/* <h2>ongoing</h2> */}
  //       <div className={stl.dataContainer}>
  //         <div className={stl.tableContainer}>
  //           <table className={stl.theding}>
  //             <thead>
  //               <tr>
  //                 <th className={stl.theding}>Tender ID</th>
  //                 <th className={stl.theding}>Title</th>
  //                 <th className={stl.theding}>Proposed Date</th>
  //                 <th className={stl.theding}>Proposed To</th>
  //                 <th className={stl.theding}>Action</th>
  //               </tr>
  //             </thead>

  //             <tbody>
  //               {selectedFilterData?.map((item, index) => {
  //                 return (
  //                   <tr key={index}>
  //                     <td>{item.tender_id}</td>
  //                     <td>{item.tilte}</td>
  //                     <td>{item.proposed_date}</td>
  //                     <td>{item.proposed_to}</td>

  //                     <td>
  //                       <Link to="/tender-details">
  //                         <button className={stl.actionBtn}>
  //                           View Details
  //                         </button>
  //                       </Link>
  //                     </td>
  //                   </tr>
  //                 );
  //               })}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else if (status === "proposed") {
  //   return (
  //     <>
  //       {/* <h2>proposed</h2> */}
  //       <div className={stl.dataContainer}>
  //         <div className={stl.tableContainer}>
  //           <table className={stl.theding}>
  //             <thead>
  //               <tr>
  //                 <th className={stl.theding}>Proposed To</th>
  //                 <th className={stl.theding}>Proposed Date</th>
  //                 <th className={stl.theding}>Tender Name</th>
  //                 <th className={stl.theding}>Title</th>
  //                 <th className={stl.theding}>Action</th>
  //               </tr>
  //             </thead>

  //             <tbody>
  //               {selectedFilterData?.map((item, index) => {
  //                 return (
  //                   <tr key={index}>
  //                     <td>{item.proposed_to}</td>
  //                     <td>{item.proposed_date}</td>
  //                     <td>{item.tender_name}</td>
  //                     <td>{item.tilte}</td>

  //                     <td>
  //                       <Link to="/tender-details">
  //                         <button className={stl.actionBtn}>
  //                           View Details
  //                         </button>
  //                       </Link>
  //                     </td>
  //                   </tr>
  //                 );
  //               })}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className={stl.dataContainer}>
  //         <div className={stl.tableContainer}>
  //           <table className={stl.theding}>
  //             <thead>
  //               <tr>
  //                 <th className={stl.theding}>Tender ID</th>
  //                 <th className={stl.theding}>Tilte</th>
  //                 <th className={stl.theding}>Issued Date</th>
  //                 <th className={stl.theding}>Authorise Person</th>

  //                 <th className={stl.theding}>Action</th>
  //               </tr>
  //             </thead>

  //             <tbody>
  //               {selectedFilterData?.map((item, index) => {
  //                 return (
  //                   <>
  //                     <tr key={index}>
  //                       <td>{item.tender_id}</td>
  //                       <td>{item.tilte}</td>
  //                       <td>{item.issued_date}</td>
  //                       <td>{item.authorised_person}</td>

  //                       <td>
  //                         <Link to="/tender-details">
  //                           <button className={stl.actionBtn}>
  //                             View Details
  //                           </button>
  //                         </Link>
  //                       </td>
  //                     </tr>
  //                   </>
  //                 );
  //               })}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  const { setTenderDetails } = useUser();
  const handleClick = async (id) => {
    try {
      const res = await axios.get(
        `https://erp-inventery-node-js.onrender.com/tenders/${id}`
      );
      const data = await res.data.data;
      console.log(data);
      setTenderDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={stl.dataContainer}>
        <div className={stl.tableContainer}>
          <table className={stl.theding}>
            <thead>
              <tr>
                <th className={stl.theding}>Tender ID</th>
                <th className={stl.theding}>Tilte</th>
                <th className={stl.theding}>Issued Date</th>
                <th className={stl.theding}>Authorise Person</th>

                <th className={stl.theding}>Action</th>
              </tr>
            </thead>

            <tbody>
              {tender.length > 0
                ? tender.map((item, index) => {
                    return (
                      <>
                        <tr key={item._id}>
                          <td>{item.tender_id}</td>
                          <td>{item.title}</td>
                          <td>{item.issueDate}</td>
                          <td>{item.authorised_person}</td>

                          <td>
                            <Link
                              to="/tender-details"
                              onClick={() => handleClick(item._id)}
                            >
                              <button className={stl.actionBtn}>
                                View Details
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TenderTable;

const tenderData = [
  {
    tender_id: 1,
    tilte: "Brief title or description of the tender",
    proposed_date: "23-12-2015",
    proposed_to: "Sahil",
    status: "ongoing",
  },
  {
    tender_id: 2,
    tilte: "Brief title or description of the tender",
    issued_date: "25-12-2015",
    authorised_person: "Sukesh",
    status: "submitted",
  },
  {
    tender_id: 3,
    tilte: "Brief title or description of the tender",
    issued_date: "13-12-2015",
    authorised_person: "Rahul",
    status: "submitted",
  },
  {
    tender_id: 4,
    tilte: "Brief title or description of the tender",
    issued_date: "3-12-2015",
    authorised_person: "Pravin",
    status: "submitted",
  },
  {
    proposed_to: "Shyam",
    proposed_date: "23-12-2015",
    tender_name: "Brief title or description of the tender",
    tilte: "Brief title or description of the tender",
    status: "proposed",
  },
  {
    proposed_to: "Shyam",
    proposed_date: "20-12-2019",
    tender_name: "Brief title or description of the tender",
    tilte: "Brief title or description of the tender",
    status: "proposed",
  },
  {
    tender_id: 8,
    tilte: "Brief title or description of the tender",
    proposed_date: "23-12-2015",
    proposed_to: "John",
    status: "ongoing",
  },
  {
    tender_id: 10,
    tilte: "Brief title or description of the tender",
    proposed_date: "23-12-2015",
    proposed_to: "Dn",
    status: "ongoing",
  },
  {
    tender_id: 11,
    tilte: "Brief title or description of the tender",
    issued_date: "23-12-2015",
    authorised_person: "Abs",
    status: "submitted",
  },
];
