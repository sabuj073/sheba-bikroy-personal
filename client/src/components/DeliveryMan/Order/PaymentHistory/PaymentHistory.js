import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import InvoiceModal from '../InvoiceModal';
import styles from '../Order.module.css';
import OrderDetailsInvoice from '../OrderDetailsInvoice';

const PaymentsHistory = () => {
    return (
        <>
            <div className={styles.newOrder}>
                <OrderTitle
                    title="Payment History"
                    length={5}
                    background="green"
                    isFilter={false}
                />
                <div className={styles.newOrderTableWrapper}>
                    <table className={styles.newOrderTable}>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Time & Date</th>
                                <th>Amount</th>
                                <th>Invoice</th>
                                <th>O.Details</th>
                                <th>Location</th>
                                <th>Delivery Man</th>
                                <th>Order Status</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    10.25 am
                                    <br />
                                    20-10-21
                                </td>
                                <td>৳45</td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#invoiceModalNew" className={styles.invoice}>
                                        V0125
                                    </button>
                                </td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#orderDetailsNew" className={styles.details}>
                                        Details
                                    </button>
                                </td>
                                <td className={styles.location}>
                                    <span>Dhaka</span>
                                    <span>Banani</span>
                                    <span>Chairman Bari</span>
                                </td>
                                <td>Morshed Ali</td>
                                <td> Complete </td>
                                <td>
                                    <div className="d-flex">
                                        <button className="btn btn-success btn-sm me-2"> Paid </button>
                                        <button className="btn btn-danger btn-sm "> Unpaid </button>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <InvoiceModal
                data={[]}
                idName="invoiceModalNew"
            />
            <OrderDetailsInvoice
                data={[]}
                idName="orderDetailsNew"
            />
        </>
    );
};

export default PaymentsHistory;