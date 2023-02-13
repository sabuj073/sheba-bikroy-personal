// import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
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
                            <th>Vendor Name & ID</th>
                            <th>Location</th>
                            <th>Order Completed</th>
                            <th>Product MRP</th>
                            <th>Commission</th>
                            <th>Total Payable</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>29-06-2021</td>
                            <td>
                                Morshed Ali
                                <br />
                                IV025
                            </td>
                            <td>
                                Chairman Bari, Banani, Dhaka
                            </td>
                            <td>20</td>
                            <td>6280.00</td>
                            <td>34.00</td>
                            <td>6246.00</td>
                            <td>
                                <div className="d-flex">
                                    <button className="btn btn-success btn-sm me-2"> Paid </button>
                                    <button className="btn btn-danger btn-sm me-2"> Unpaid </button>
                                    <button className="btn btn-primary btn-sm "> Pay </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="7" style={{ textAlign: 'right' }}> Total Payable Amount: </th>
                            <th colSpan="2" style={{ textAlign: 'left', paddingLeft: '40px', color: 'red', }}>23005.23</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentsHistory