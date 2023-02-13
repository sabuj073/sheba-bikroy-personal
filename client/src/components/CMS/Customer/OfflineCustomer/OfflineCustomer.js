import { useHistory } from 'react-router-dom';
import personImage from '../../../../assets/images/person.png';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from '../Customer.module.css';

const OfflineCustomer = () => {
    const history = useHistory();

    return (
        <div className={styles.vendor}>
            <OrderTitle
                title="Offline Customers"
                length={3}
                background="darkcyan"
                isFilter={false}
            />

            <div className="printWrapper">
                <div className="input-group ">
                    <select className="me-3 mb-3">
                        <option value=""> Select District </option>
                        <option value=""> Dhaka</option>
                        <option value="">Gazipur</option>
                    </select>
                    <select className="me-3 mb-3">
                        <option value=""> Select Thana</option>
                        <option value="">Banani</option>
                        <option value="">Dhanmondhi</option>
                    </select>
                    <select className="me-3 mb-3">
                        <option value=""> Select Area</option>
                        <option value="">Banani</option>
                        <option value="">Dhanmondhi</option>
                    </select>
                    <input className="mb-3" type="search" name="" id="" placeholder="search" />
                </div>
            </div>
            <div className={styles.vendorTableWrapper}>
                <table className={styles.vendorTable}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Name & ID</th>
                            <th>Mobile</th>
                            <th>Location</th>
                            <th> Buying History</th>
                            <th> Wallet </th>
                            <th> Ref Commission </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td> <img src={personImage} width="100px" alt="" /> </td>
                            <td>
                                <span>Habibur Rahman </span>
                                <span>BAN004</span>
                            </td>
                            <td> 01980653626 </td>
                            <td>
                                <div className={styles.location}>
                                    Chairman bari, Banani, dhaka-1205
                                </div>
                            </td>
                            <td>
                                <button
                                    className={styles.details}
                                    onClick={() => history.push('/cms/vendor/sales-history')}
                                > Details </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => history.push('/vendor/cms/payments-history')}
                                    className={styles.payment}>
                                    1200.00
                                </button>
                            </td>
                            <td>
                                <div className="d-flex">
                                    <button className={styles.button} style={{ background: 'green' }}>Active </button>
                                    <button className={styles.button} style={{ background: "darkorange" }}>Deactive</button>
                                    <button className={styles.button} style={{ background: 'red' }}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OfflineCustomer