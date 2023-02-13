import personImage from '../../../../assets/images/person.png';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from './AllDeliveryMan.module.css';

const AllDeliveryMan = () => {
    return (
        <div className={styles.vendor}>
            <OrderTitle
                title="All Delivery Man"
                length={0}
                background="#004a7c"
                isFilter={false}
            />
            <div className="printWrapper">
                <div className="input-group mb-3">
                    <select className="me-3">
                        <option value=""> Select District </option>
                        <option value=""> Dhaka</option>
                        <option value="">Gazipur</option>
                    </select>
                    <select className="me-3">
                        <option value=""> Select Thana</option>
                        <option value="">Banani</option>
                        <option value="">Dhanmondhi</option>
                    </select>
                    <select className="me-3">
                        <option value=""> Select Area</option>
                        <option value="">Banani</option>
                        <option value="">Dhanmondhi</option>
                    </select>
                    <input type="search" name="" id="" placeholder="search" />
                </div>
            </div>
            <div className={styles.vendorTableWrapper}>
                <table className={styles.vendorTable}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Name & ID</th>
                            <th>Location</th>
                            <th>Profile</th>
                            <th>Sale History</th>
                            <th>Payment </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td> <img src={personImage} width="70px" alt="" /> </td>
                            <td>
                                <span>Habibur Rahman </span>
                                <span>BAN004</span>
                            </td>
                            <td>
                                <div className={styles.location}>
                                    <span>Dhaka</span>
                                    <span>Banani</span>
                                </div>
                            </td>
                            <td>
                                <button className={styles.invoice}>View Profile</button>
                            </td>
                            <td>
                                <button className={styles.details}> Details </button>
                            </td>
                            <td>
                                <button className={styles.payment}>
                                    1200.00
                                </button>
                            </td>
                            <td >
                                <div className="d-flex">
                                    <button className={styles.button} style={{ background: 'green' }}>Active </button>
                                    <button className={styles.button} style={{ background: "darkorange" }}>Deactive</button>
                                    <button className={styles.button} style={{ background: 'red' }}>Delete</button>
                                </div>
                            </td>

                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllDeliveryMan