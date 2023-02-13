import { useHistory } from 'react-router-dom';
import personImage from '../../../../assets/images/person.png';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from '../Customer.module.css';
import React, { isValidElement, useState } from "react";
import instance from "../../../../base_url";

const OnlineCustomer = () => {
    const history = useHistory();

    const [brand, setBrand] = useState([]);
    const getBrands = async () => {
        await instance
            .post('main_home/get_user', {
                key: '7fbaf493e3fe38a48934d93a3168926018adb657',
            })
            .then((response) => {
                if (brand.length == 0) {
                    setBrand(response.data);
                }
            });
    };
    getBrands();

    return (
        <div className={styles.vendor}>
            <OrderTitle
                title="Customer"
                length={brand.length}
                background="deeppink"
                isFilter={false}
            />

            <div className="printWrapper">
                <div className="input-group">
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
                            <th>Profile</th>
                            {/* <th>Order History</th> */}
                            <th> Wallet </th>
                            {/* <th> Ref Commission </th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {brand.map((val, key) => (
                       <tr>
                            <td>{++key}</td>
                            <td> <img src={personImage} width="100px" alt="" /> </td>
                            <td>
                                <span>{val.name}</span>
                            </td>
                            <td> {val.number} </td>
                            <td>
                                <div className={styles.location}>
                                    {val.address}
                                </div>
                            </td>
                            <td>
                                <button className={styles.invoice}>View Profile</button>
                            </td>
                            <td>
                                <button
                                    className={styles.details}
                                    onClick={() => history.push('/cms/sales-history')}
                                > Details </button>
                            </td>
                            {/* <td>
                                <button
                                    onClick={() => history.push('/cms/payments-history')}
                                    className={styles.payment}>
                                    {val.wallet}
                                </button>
                            </td> */}
                            {/* <td>
                                <div className="d-flex">
                                    <button className={styles.button} style={{ background: 'green' }}> One Time </button>
                                    <button className={styles.button} style={{ background: "darkorange" }}> Regular</button>
                                    <button className={styles.button} style={{ background: 'red' }}> Off </button>
                                </div>
                            </td> */}
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OnlineCustomer