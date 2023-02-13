import styles from './CustomerMessage.module.css';

const CustomerMessage = () => {
    return (
        <div className={styles.messageHistory}>
            <div className="container">
                <div className={styles.messageHistoryTitle}>
                    <h3>Messages History</h3>
                </div>
                <div className={styles.messageFilter}>
                    <div className={styles.messageFilterOption}>
                        <select name="" id="">
                            <option value="">Select District</option>
                            <option value="">Dhaka</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select Thana</option>
                            <option value="">Mirpur</option>
                        </select>
                    </div>
                    <select className={styles.orderSelect} name="" id="">
                        <option value="">Today's</option>
                        <option value="">This Week</option>
                        <option value="">This Month</option>
                        <option value="">This Year</option>
                    </select>
                </div>
                <div className={styles.vendorTableWrapper}>
                    <table className={styles.vendorTable}>
                        <thead>
                            <tr>
                                <th>Date & Time</th>
                                <th>Name & ID</th>
                                <th>Location</th>
                                <th>Message </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="d-block">01-07-21</span>
                                    <span>11:45:10 am</span>
                                </td>
                                <td>
                                    <span className="d-block"> Morshed Alam  </span>
                                    <span>CS12345</span>
                                </td>
                                <td>Dhaka</td>
                                <td> You should fast delivery </td>
                                <td> <button className={styles.button}>Reply</button> </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerMessage