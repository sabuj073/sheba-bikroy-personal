import { useState } from 'react';
import styles from './Notices.module.css';

const Notices = () => {
    const [isFilter, setIsFilter] = useState(false);

    console.log(isFilter)

    return (
        <div className={styles.notices}>
            <div className="container">
                <div className={styles.noticeTitle}>
                    <h3>Notice</h3>
                </div>
                <div className="mb-2 form-check" style={{ fontSize: '25px' }}>
                    <input
                        id="notice"
                        type="checkbox"
                        className="form-check-input"
                        onClick={() => setIsFilter(!isFilter)}
                    />
                    <label for="notice" className="form-check-label">
                        Set Filter (If need)
                    </label>
                </div>
                <div className={styles.selects}>
                    {isFilter && <div >
                        <div className={styles.selectOption}>
                            <h6> District Wise </h6>
                            <select name="" id="">
                                <option value="">Select District</option>
                                <option value="">Dhaka</option>
                            </select>
                            <span> (Optional) </span>
                        </div>
                        <div className={styles.selectOption}>
                            <h6> Thana Wise</h6>
                            <select name="" id="">
                                <option value="">Select Thana</option>
                                <option value="">Mirpur</option>
                            </select>
                            <span> (Optional) </span>
                        </div>
                        <div className={styles.selectOption}>
                            <h6> Show Data</h6>
                            <select name="" id="">
                                <option value="">Select Person</option>
                                <option value="">Morshed Ali</option>
                            </select>
                        </div>
                    </div>}
                    <div className={styles.selectMessage}>
                        <h3>Write Notice</h3>
                        <form action="">
                            <div className="col-md-8">
                                <textarea
                                    name="" id="" rows="7"
                                    placeholder="Enter text here...."
                                />
                            </div>
                            <button type="submit" className={styles.submit__btn}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <h3 className="text-center  pt-5">Notice List</h3>
                <div className={styles.vendorTableWrapper}>
                    <table className={styles.vendorTable}>
                        <thead>
                            <tr>
                                <th>Message</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Our Service is open Eid Ul Azha</td>
                                <td>
                                    <div className={styles.location}>
                                        <span>Dhaka</span>
                                        <span>Banani</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="d-block">01-07-21</span>
                                    <span>11:45:10 am</span>
                                </td>
                                <td >
                                    <div className={styles.actions}>
                                        <div className="">
                                            <button className={styles.button} style={{ background: 'green' }}> ON </button>
                                            <button className={styles.button} style={{ background: "#3335" }}>Off</button>
                                        </div>
                                        <div className="ms-3">
                                            <button className={styles.button} style={{ background: 'green' }}> Edit </button>
                                            <button className={styles.button} style={{ background: "red" }}>Del</button>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Notices