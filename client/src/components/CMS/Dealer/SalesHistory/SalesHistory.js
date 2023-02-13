import { Link } from 'react-router-dom';
import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import styles from '../../../Vendors/SalesAndPayment/PaymentHistory/PaymentHistory.module.css';

const SalesHistory = () => {
    return (
        <div className={styles.newOrder}>
            <OrderTitle
                title="Sales History "
                length={2}
                background="#00aeef"
                isFilter={true}
            />

            <div className={styles.newOrderTableWrapper}>
                <table className={styles.newOrderTable}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Invoice No</th>
                            <th>O. Details</th>
                            <th>Product MRP</th>
                            <th>Delivery Man</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>29-06-2021</td>
                            <td>IV025</td>
                            <td>
                                <Link to="/" className={styles.invoice} style={{ textDecoration: 'none', color: '#fff' }}>
                                    Details
                                </Link>

                            </td>
                            <td>680.00</td>
                            <td> 
                                Morshed Ali
                                <br />
                                DE1323
                            </td>
                            <td> Complete </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesHistory