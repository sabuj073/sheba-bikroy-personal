import styles from './MessageHistory.module.css';

const MessageHistory = () => {
    return (
        <div className={styles.messageHistory}>
            <div className="container">
                <div className={styles.messageHistoryTitle}>
                    <h3>Message History</h3>
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
                                <th>Message</th>
                                <th>Message Type</th>
                                <th>Message Count</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Eid Mubarak, Sheba Bikroy er Pasha Thakar jonno Dhonobad</td>
                                <td> Success </td>
                                <td>03</td>
                                <td>
                                    <span className="d-block">01-07-21</span>
                                    <span>11:45:10 am</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MessageHistory