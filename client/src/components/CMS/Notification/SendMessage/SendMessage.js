import { useState } from 'react';
import CheckBox from './CheckBox';
import styles from './SendMessage.module.css';

const SendMessage = () => {
    const [isFilter, setIsFilter] = useState(false);
    return (
        <div className={styles.SendMessage}>
            <div className="container">
                <div className={styles.sendMessageTitle}>
                    <h3>Notice</h3>
                    <span>SMS Balance: 550</span>
                </div>
                <div className={styles.checkBox}>
                    <CheckBox
                        label="all"
                        title="All"
                    />
                    <CheckBox
                        label="customer"
                        title="Customer"
                    />
                    <CheckBox
                        label="vendor"
                        title="Vendor"
                    />
                    <CheckBox
                        label="serviceProvider"
                        title="Service Provider"
                    />
                    <CheckBox
                        label="deliveryMan"
                        title="Delivery Man"
                    />
                    <CheckBox
                        label="Owner"
                        title="Owner"
                    />
                    <CheckBox
                        label="anyMobileNumber"
                        title="Any Mobile Number"
                    />
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="mb-2 form-check" style={{ fontSize: '20px' }}>
                            <input
                                id="notice"
                                type="checkbox"
                                className="form-check-input"
                                onClick={() => setIsFilter(!isFilter)}
                                style={{ borderRadius: '0' }}
                            />
                            <label for="notice" className="form-check-label">
                                Set Filter (If need)
                            </label>
                        </div>
                        {isFilter && (
                            <div className="ms-3">
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
                            </div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="pb-2">Any Mobile Number </label>
                        <input type="text" className="form-control" placeholder="Enter number one or more" />
                    </div>

                </div>
                <div className={styles.selectMessage}>
                    <h3>Write Message</h3>
                    <div className="mb-2 form-check" style={{ fontSize: '20px' }}>
                        <input
                            id="bangla"
                            type="checkbox"
                            className="form-check-input"
                            onClick={() => setIsFilter(!isFilter)}
                            style={{ borderRadius: '0' }}
                        />
                        <label for="bangla" className="form-check-label">
                            Bangla SMS
                        </label>
                    </div>
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
        </div>
    )
}

export default SendMessage