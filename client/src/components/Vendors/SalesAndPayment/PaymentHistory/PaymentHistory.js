// import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import styles from './PaymentHistory.module.css';

const PaymentsHistory = () => {
    return (
        <div className={styles.newOrder}>
            <OrderTitle
                title="Payments History "
                length={2}
                background="deeppink"
                isFilter={true}
            />

            <div className={styles.newOrderTableWrapper}>
                <table className={styles.newOrderTable}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Invoice No</th>
                            <th>Order Status</th>
                            <th>Product MRP</th>
                            <th>Commission</th>
                            <th>Total Payable</th>
                            <th>Payment Statas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>29-06-2021</td>
                            <td>IV025</td>
                            <td>Complete</td>
                            <td>680.00</td>
                            <td>34.00</td>
                            <td>646.00</td>
                            <td>
                                <button className={styles.unpaid}> Unpaid</button>
                                <button className={styles.paid}> Paid</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentsHistory