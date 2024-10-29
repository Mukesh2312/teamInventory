import React, { useState } from "react";
import stl from "./createPurchaseOrder.module.css";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "../../IconComponents/CloseIcon";
import PlusCircleIcon from "../../IconComponents/PlusCircleIcon";

function CreatePurchaseOrder() {
  const [addRow, setAddRow] = useState([
    {
      itemNo: "",
      quantiy: "",
      unitPrice: "",
      taxableTotal: "",
      rate: "",
      amt: "",
      total: "",
    },
  ]);

  const addNewRow = () => {
    const newRow = {
      itemNo: "",
      quantiy: "",
      unitPrice: "",
      taxableTotal: "",
      rate: "",
      amt: "",
      total: "",
    };
    setAddRow([...addRow, newRow]);
  };

  const handleChange = (index, field, value) => {
    const upDateRows = addRow.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setAddRow(upDateRows);
    // const updatedRows = addRow.map((row, i) =>
    //     i === index ? { ...row, [field]: value } : row
    // );
    // setAddRow(updatedRows);
  };

  const navigate = useNavigate();
  return (
    <>
      <div id={stl.createPurchaseOrder}>
        <div className={stl.clientHead}>
          <div className={stl.headImgcontainer}>
            <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
          </div>
          <h2 className={stl.heading}>Create Purchase Order</h2>
          <div id={stl.closeIcon}>
            <Link onClick={() => navigate(-1)}>
              <CloseIcon />
            </Link>
          </div>
        </div>
        <div id={stl.purchaseformContainer}>
          <form id={stl.purchaseForm}>
            <div id={stl.firstRow}>
              <div className={stl.pocontainer}>
                <label htmlFor="pono">PO ORDER NO :</label>
                <input type="text" name="pono" id={stl.pono} />
              </div>
              <div className={stl.pocontainer}>
                <label htmlFor="podate">PO DATE :</label>
                <input type="text" name="podate" id={stl.podate} />
              </div>
            </div>
            <div id={stl.secondRow}>
              <div id={stl.firstCol}>
                <p id={stl.firstColHeading}>Purchase From</p>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="cname" className={stl.plbl}>
                    Client Name
                  </label>
                  <select name="cname" id="cname">
                    <option value="Client1">Client1</option>
                    <option value="Client2">Client2</option>
                    <option value="Client3">Client3</option>
                  </select>
                </div>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="cadd">Client Address</label>
                  <input type="text" name="cadd" id={stl.cadd} />
                </div>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="city">City , State ,(zip code)</label>
                  <input type="text" name="city" id={stl.city} />
                </div>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="pcontact">Contact</label>
                  <input type="text" name="pcontact" id={stl.pcontact} />
                </div>
              </div>
              <div id={stl.secondcol}>
                <p id={stl.secondHeadCol}>Ship & Bill to Address</p>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="customerName">Customer Name :</label>
                  <select name="customerName" id="customerName">
                    <option value="customer1">Customer1</option>
                    <option value="customer2">Customer2</option>
                    <option value="customer3">Customer3</option>
                  </select>
                </div>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="shipadd">Address line 1 :</label>
                  <input type="text" name="shipadd" id={stl.shipadd} />
                </div>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="shipadd2">Address line 2 :</label>
                  <input type="text" name="shipadd2" id={stl.shipadd2} />
                </div>
                <div className={stl.purchaseInputInner}>
                  <label htmlFor="shipcity">City, State , zip code :</label>
                  <input type="text" name="shipcity" id={stl.shipcity} />
                </div>
              </div>
            </div>
            <div id={stl.thirdRow}>
              <p id={stl.thirdRowHeading}>Order Details</p>
              <div id={stl.orderTablerContainer}>
                <table border="1" cellPadding="10" id={stl.purchaset}>
                  <thead>
                    <tr>
                      <th>Item No</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Taxable Total Value </th>
                      <th>
                        SGST
                        <tr id={stl.customTD}>
                          <th>Rate (%)</th>
                          <th>Amt.(Rs)</th>
                        </tr>
                      </th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addRow?.map((item, index) => (
                      <tr key={index} className={stl.dataRow}>
                        <td>
                          <input
                            type="text"
                            value={item.itemNo}
                            onChange={(e) =>
                              handleChange(index, "itemNo", e.target.value)
                            }
                            className={stl.editableIinput}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.quantiy}
                            onChange={(e) =>
                              handleChange(index, "quantiy", e.target.value)
                            }
                            className={stl.editableIinput}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.unitPrice}
                            onChange={(e) =>
                              handleChange(index, "unitPrice", e.target.value)
                            }
                            className={stl.editableIinput}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.taxableTotal}
                            onChange={(e) =>
                              handleChange(
                                index,
                                "taxableTotal",
                                e.target.value
                              )
                            }
                            className={stl.editableIinput}
                          />
                        </td>
                        <td>
                          <td>
                            <input
                              type="text"
                              value={item.rate}
                              onChange={(e) =>
                                handleChange(index, "rate", e.target.value)
                              }
                              className={stl.editableIinput}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={item.amt}
                              onChange={(e) =>
                                handleChange(index, "amt", e.target.value)
                              }
                              className={stl.editableIinput}
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            type="text"
                            value={item.total}
                            onChange={(e) =>
                              handleChange(index, "total", e.target.value)
                            }
                            className={stl.editableIinput}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button type="button" onClick={addNewRow} id={stl.addNewRowBtn}>
                  <PlusCircleIcon />
                  Add New Row
                </button>
              </div>
            </div>
          </form>

          <div id={stl.termsNCon}>
            <div id={stl.termFirst}>
              <p id={stl.termHeading}>Terms & Conditions</p>
              <div id={stl.termsContent}>
                <p>
                  <strong>Expiry Terms:</strong>
                  This Order is Valid Until DD/MM/YYY.
                </p>
                <p>
                  <strong>Payment Terms:</strong>
                  Payment due within 30 days of invoice date.
                </p>
                <p>
                  <strong>Delivery Terms:</strong>
                  [shoping details, expected delivery etc.]
                </p>
                <p>
                  <strong>Return Policy:</strong>
                  [Conditon under which items can be returned.]
                </p>
              </div>
            </div>
            <div id={stl.termSecond}>
              <div className={stl.netMount}>
                <p>SubTotal</p>
                <span>00</span>
              </div>
              <div className={stl.netMount}>
                <p>Shiping & Handling</p>
                <span>00</span>
              </div>
              <div className={stl.netMount}>
                <p>Taxes</p>
                <span>00</span>
              </div>
              <div className={stl.netMount}>
                <strong>Net Amount</strong>
                <strong>00</strong>
              </div>
            </div>
          </div>

          <div id={stl.athoriseSignContainer}>
            <div id={stl.authFirst}>
              <p id={stl.authFirstHeading}>Athorise Singnatory & Date</p>
              <div className={stl.authInputContainer}>
                <label htmlFor="authname" className={stl.authlbl}>
                  Name :
                </label>
                <input type="text" name="authname" id={stl.authname} />
              </div>
              <div className={stl.authInputContainer}>
                <label htmlFor="dasig" className={stl.authlbl}>
                  Dasignation :
                </label>
                <input type="text" name="dasig" id={stl.dasig} />
              </div>
              <div className={stl.authInputContainer}>
                <label htmlFor="authmail" className={stl.authlbl}>
                  E-mail :
                </label>
                <input type="text" name="authmail" id={stl.authmail} />
              </div>
              <div className={stl.authInputContainer}>
                <label htmlFor="authcontact" className={stl.authlbl}>
                  Contact :
                </label>
                <input type="text" name="authcontact" id={stl.authcontact} />
              </div>
            </div>
            <div id={stl.authSecond}>
              <div>
                <Link onClick={() => navigate(-1)}>
                  <button id={stl.purchaseOrderSubmitbtn}>OK</button>
                </Link>
                <Link onClick={() => navigate(-1)}>
                  <button id={stl.authCancelBtn}>Cancel</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePurchaseOrder;
