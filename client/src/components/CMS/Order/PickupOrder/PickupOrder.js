import InvoiceModal from '../../Components/InvoiceModal/InvoiceModal';
import OrderDetailsInvoice from '../../Components/OrderDetailsModal/OrderDetailsModal';
import OrderLink from '../../Components/OrderLink/OrderLink';
import { orderLinks } from '../../Components/OrderLinksData/OrderLinks';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from '../Orders.module.css';
import instance from "../../../../base_url.js";
import React, { useState } from "react";

const PickupOrder = () => {

    const [pickedorders, setpickedorders] = useState([]);
    const [pickedorderscount, setpickedorderscount] = useState([]);
    const getpickedOrder = async () => {
        await instance.post("get-picked-order").then((response) => {
          if (pickedorders.length == 0 && Number(response.data.length) > 0) {
            setpickedorders(response.data);
            setpickedorderscount(Number(response.data.length));
          }
        });
      };
      getpickedOrder();


    return (
        <>
            <div className={styles.newOrder}>
                <OrderTitle
                    title="Picked Up Order"
                    length={pickedorders.length}
                    background="rgb(255, 179, 0)"
                    isFilter={true}
                />
                <div className={styles.newOrderTableWrapper}>
                    <table className={styles.newOrderTable}>
                    <thead>
                            <tr>
                                <th>SL</th>
                                <th>Date & Time</th>
                                <th>Amount</th>
                                <th>Invoice</th>
                                <th>O.Details</th>
                                <th>Location</th>
                                <th>Action</th>
                                <th>Accepted By </th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {pickedorders.map((val, key) => {
                            return (
                            <tr>
                                <td>{key+1}</td>
                                <td>
                                  {val.date_data}
                                </td>
                                <td>৳{val.total_amount}</td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#invoiceModalCMS" className={styles.invoice}>
                                    #SB{val.order_id}
                                    </button>
                                </td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#orderDetailsNew" className={styles.details}>
                                        Details
                                    </button>
                                </td>
                                <td className={styles.location}>
                                    <span>{val.address}</span>
                                </td>
                                <td>
                                    <button className={styles.accept}>Accept</button>
                                </td>
                                <td>
                                    <select className={styles.orderSelect} name="" style={{ background: '#1e88e5' }} >
                                        <option value="">Super Admin</option>
                                        <option value="">Sub Admin</option>
                                        <option value="">Admin One</option>
                                    </select>
                                </td>
                                <td>
                                    <select  value={val.status} className={styles.orderSelect} name="" id="" style={{ background: '#e74c3c' }} >
                                        <option  style={{ background: '#e74c3c' }} value="Pending">Pending</option>
                                        <option  style={{ background: 'rgb(255, 179, 0)' }} value="Picked Up">Picked Up</option>
                                        <option  style={{ background: '#3498db' }} value="Residual">Residual</option>
                                        <option  style={{ background: 'green' }} value="Complete">Complete</option>
                                        <option  style={{ background: 'red' }} value="Cancel">Cancel</option>
                                        <option  style={{ background: 'red' }} value="Spam">Spam</option>
                                    </select>
                                </td>

                            </tr>
                            
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <OrderLink orderLinks={orderLinks} />
            </div>

            <InvoiceModal
                data={[]}
                idName="invoiceModalCMS"
            />
            <OrderDetailsInvoice
                data={[]}
                idName="orderDetailsNew"
            />
        </>
    );
};

export default PickupOrder;