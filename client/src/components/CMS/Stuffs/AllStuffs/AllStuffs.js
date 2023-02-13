import personImage from '../../../../assets/images/person.png';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from './AllStuffs.module.css';

const AllStuffs = () => {
    return (
        <div className={styles.vendor}>
            <OrderTitle
                title="All Stuff"
                length={3}
                background="#004a7c"
                isFilter={false}
            />

            <div className={styles.vendorTableWrapper}>
                <table className={styles.vendorTable}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Name & ID</th>
                            <th>Location</th>
                            <th>Profile</th>
                            <th>Salary </th>
                            <th style={{ textAlgin: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                            <td> 1200.00 </td>
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

export default AllStuffs