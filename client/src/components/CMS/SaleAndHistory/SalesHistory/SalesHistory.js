import { useHistory } from 'react-router-dom';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from '../PaymentHistory/PaymentHistory.module.css';

const SalesHistory = () => {
    const history = useHistory();
    return (
        <div className={styles.newOrder}>
            <OrderTitle
                title="Sales History "
                length={2}
                background="#39b54a"
                isFilter={true}
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
                                <button onClick={() => history.push('/delivery-man/invoice')} className={styles.invoice}>
                                    V0125
                                </button>
                            </td>
                            <td>
                                <button onClick={() => history.push('/delivery-man/order-details')} className={styles.details}>
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
    )
}

export default SalesHistory