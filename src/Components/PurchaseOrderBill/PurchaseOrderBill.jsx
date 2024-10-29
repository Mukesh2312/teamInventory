import React from "react";
import stl from "./PurchaseOrderBill.module.css";

function PurchaseOrderBill() {
  return (
    <>
      <div id={stl.billTemplatePurchase}>
        <table id={stl.billTbl}>
          <caption>
            <tr>
              <td
                className={stl.billTd}
                colSpan="2"
                style={{ textAlign: "start" }}
              >
                <img src="./assets/billLogo.png" alt="company logo" />
              </td>
              <td
                colSpan="3"
                style={{ verticalAlign: "middle" }}
                id={stl.billHading}
                className={stl.billTd}
              >
                <h2 id={stl.billHeader}>Purchase Order</h2>
              </td>
            </tr>
            <tr style={{ padding: "10px 20px" }}>
              <td className={stl.billTd} style={{ width: "380px" }}>
                <p className={stl.secondRowContent}>Ship & Bill to Address</p>
                <p className={stl.secondRowContent}>
                  SurgiSol Heathcare Solutions Pvt Ltd
                </p>
                <p className={stl.secondRowContent}>
                  201 , Prince Complex , above Saini Travels
                </p>
                <p className={stl.secondRowContent}>
                  Chatrapati Square , Nagpur 440015
                </p>
              </td>
              <td className={stl.billTd} style={{ width: "300px" }}>
                <p className={stl.secondRowContent}>Purchase From :</p>
                <p className={stl.secondRowContent}>
                  Molbio Diagnostic Private Limited.
                </p>
                <p className={stl.secondRowContent}>
                  Plot No. L-46, Phase II D, Verna Industrial Estate, Verna- Goa
                  403722.
                </p>
                <p className={stl.secondRowContent}>INDIA</p>
                <p className={stl.secondRowContent}>+91-832-2783267</p>
              </td>
              <td style={{ width: "500px" }} className={stl.billTd}>
                <p className={stl.secondRowContent}>
                  SurgiSol Healthcare Solutions Pvt Ltd Company
                </p>
                <p className={stl.secondRowContent}>
                  Registration No : U74999MH2017PTC295731
                </p>
                <p className={stl.secondRowContent}>
                  GSTIN No : 27AAYCS8073L1Z8
                </p>
                <p className={stl.secondRowContent}>TAN No : MUMS91010D</p>
                <p className={stl.secondRowContent}>Form 20B : MH-MZ6-226933</p>
                <p className={stl.secondRowContent}>Form 21B : MH-M26-226934</p>
                <p className={stl.secondRowContent}>Form20D : MH-M26-226935</p>
                <p className={stl.secondRowContent}>PAN No : AAYCS8073L</p>
              </td>
              <td style={{ width: "300px" }} className={stl.billTd}>
                <p className={`${stl.secondRowContent} ${stl.poOrder}`}>
                  PO ORDER NO:
                </p>
                <p className={`${stl.secondRowContent} ${stl.poOrder}`}>
                  PO DATE:
                </p>
                <p className={`${stl.secondRowContent} ${stl.poOrder}`}>
                  Delivery Terms:
                </p>
              </td>
            </tr>
          </caption>

          <thead>
            <tr>
              <th rowSpan="2" className={stl.billth}>
                Sr no.
              </th>
              <th rowSpan="2" className={stl.billth}>
                Item code & Dscription
              </th>
              <th rowSpan="2" className={stl.billth}>
                OTY.
              </th>
              <th rowSpan="2" className={stl.billth}>
                Packaging
              </th>
              <th rowSpan="2" className={stl.billth}>
                Unit Rate
              </th>
              <th rowSpan="2" className={stl.billth}>
                Taxeble Total Value(Rs.)
              </th>
              <th colSpan="2" className={stl.billth}>
                GST
              </th>
              <th rowSpan="2" className={stl.billth}>
                Total(Rs.)
              </th>
            </tr>
            <tr>
              <th className={stl.billth}>Rate (%)</th>
              <th className={stl.billth}>Amount (Rs.)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* <td rowSpan="4" className={`${stl.billTd} ${stl.mainTblTd}`}>t</td> */}
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
              <td className={`${stl.billTd} ${stl.mainTblTd}`}></td>
            </tr>
            <tr>
              {/* <td rowSpan="4" className={`${stl.billTd} ${stl.mainTblTd}`}>t</td> */}
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
              <td className={`${stl.billTd} ${stl.mdlTbRow}`}></td>
            </tr>
            <tr>
              <td colSpan="4" className={`${stl.billTd} ${stl.inWordsRow}`}>
                In Words
              </td>
              <td className={`${stl.billTd} ${stl.inWordsRow}`}></td>
              <td className={`${stl.billTd} ${stl.inWordsRow}`}></td>
              <td className={`${stl.billTd} ${stl.inWordsRow}`}></td>
              <td className={`${stl.billTd} ${stl.inWordsRow}`}></td>
              <td className={`${stl.billTd} ${stl.inWordsRow}`}></td>
            </tr>
            <tr>
              <td
                colSpan="2"
                className={`${stl.billTd} ${stl.lstTbRow}`}
                style={{ verticalAlign: "baseline" }}
              >
                <p className={stl.lstRowHead}>Athorise Singatory & Date: </p>
                <p className={stl.lstRowDetail}>
                  <strong>Name : </strong>Vikram Khulsange
                </p>
                <p className={stl.lstRowDetail}>
                  <strong>Designation : </strong>Director
                </p>
                <p className={stl.lstRowDetail}>
                  <strong>Email : </strong> vikram.khilsange@surgisol.in
                </p>
                <p className={stl.lstRowDetail}>
                  <strong>Contact No : </strong> +91 - 98333-22844
                </p>
              </td>
              <td colSpan="4" className={`${stl.billTd} ${stl.lstTbRow}`}>
                <p className={stl.lstHeader}>Expiry</p>
                <p className={stl.lstRowDetails}>
                  Terms minimum shelf life of 6 months from the stock of
                  recipt(if not and in scenario of refused to accept by
                  customers it will be returned).
                </p>
                <p className={stl.lstHeader}>Delivery Terms</p>
                <p className={stl.lstRowDetails}>
                  Charges towards delivery & insuarance if any, to be bourn by
                  the seller to our shipping address
                </p>
                <p className={stl.lstHeader}>Dispute if any</p>
                <p className={stl.lstRowDetails}>
                  To be settled within jurisdiction of honorable high court of
                  mumbai.
                </p>
                <p className={stl.lstHeader}>Shipping Terms</p>
                <p className={stl.lstRowDetails}>Ex-works</p>
              </td>
              <td
                colSpan="3"
                className={`${stl.billTd} ${stl.lstTbRow}`}
                id={stl.purchaseSign}
              >
                <div>
                  <p>Singnature & Stamps</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div id={stl.purchaseBillActionBtns}>
          <div className={stl.printAndEdit}>
            <button className={stl.edit}>Edit</button>
            <button className={stl.print}>Print</button>
          </div>
          <div className={stl.okAndCancel}>
            <button className={stl.okBtn}>OK</button>
            <button className={stl.cancelBtn}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseOrderBill;
