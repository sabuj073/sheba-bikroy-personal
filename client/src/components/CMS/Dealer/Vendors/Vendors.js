import { useHistory } from 'react-router-dom';
import personImage from '../../../../assets/images/person.png';
import OrderTitle from '../../Components/OrderTitle/OrderTitle';
import styles from './Vendors.module.css';
import React, { useState } from "react";
import instance from "../../../../base_url";

const Vendors = () => {
    const history = useHistory();
    const [vendor, setVendor] = useState([]);

    const getvendor = async () => {
        await instance
          .post("main_home/get-vendor", {
            key: "7fbaf493e3fe38a48934d93a3168926018adb657",
          })
          .then((response) => {
            if (vendor.length === 0) {
                setVendor(response.data);
            }
          });
      };

    const makedeactive = async(e) =>{
        await instance
          .post("main_home/make-vendor-deactive", {
            key: "7fbaf493e3fe38a48934d93a3168926018adb657",
            id:e
          })
          .then((response) => {
                setVendor([]);
                getvendor();
          });
    }

    const makeactive = async(e) =>{
        await instance
          .post("main_home/make-vendor-active", {
            key: "7fbaf493e3fe38a48934d93a3168926018adb657",
            id:e
          })
          .then((response) => {
            setVendor([]);
            getvendor();
          });
    }

    const deleteVendor = async(e) =>{
        await instance
          .post("main_home/make-vendor-delete", {
            key: "7fbaf493e3fe38a48934d93a3168926018adb657",
            id:e
          })
          .then((response) => {
            setVendor([]);
            getvendor();
          });
    }

    getvendor();

    return (
        <div className={styles.vendor}>
            <OrderTitle
                title="All Vendors"
                length={vendor.length}
                background="#004a7c"
                isFilter={false}
            />

            <div className="printWrapper">
                <div className="input-group mb-1">
                    <select className="me-3 mb-2">
                        <option value=""> Select District </option>
                        <option value=""> Dhaka</option>
                        <option value="">Gazipur</option>
                    </select>
                    <select className="me-3 mb-2">
                        <option value=""> Select Thana</option>
                        <option value="">Banani</option>
                        <option value="">Dhanmondhi</option>
                    </select>
                    <select className="me-3 mb-2">
                        <option value=""> Select Area</option>
                        <option value="">Banani</option>
                        <option value="">Dhanmondhi</option>
                    </select>
                    <input className="mb-2" type="search" name="" id="" placeholder="search" />
                </div>
            </div>
            <div className={styles.vendorTableWrapper}>
                <table className={styles.vendorTable}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Shop Name</th>
                            <th>Name & ID</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Profile</th>
                            <th>Sale History</th>
                            <th>Payment </th>
                            <th>Stauts</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {vendor.map((val, key) => {
                      return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td> <img src={val.provider_photo} width="75px" alt="" /> </td>
                            <td>
                                <span>{val.shop_name} </span>
                            </td>
                            <td>
                                <span>{val.vendor_name} </span>
                                <span>{val.vendor_id}</span>
                            </td>
                            <td>
                                <div className={styles.location}>
                                    <span>Dhaka</span>
                                    <span>Banani</span>
                                </div>
                                <div className={styles.locations}>
                                    <span>
                                        <span>Chairman Bari  </span>
                                        <span className={styles.cut}>x</span>
                                    </span>
                                    <span>
                                        <span>Kakori </span>
                                        <span className={styles.cut}>x</span>
                                    </span>
                                    <span>
                                        <span>Korail</span>
                                        <span className={styles.cut}>x</span>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className={styles.location}>
                                    <span>Dhaka</span>
                                    <span>Banani</span>
                                </div>
                                <div className={styles.locations}>
                                    <span>
                                        <span>Chairman Bari  </span>
                                        <span className={styles.cut}>x</span>
                                    </span>
                                    <span>
                                        <span>Kakori </span>
                                        <span className={styles.cut}>x</span>
                                    </span>
                                    <span>
                                        <span>Korail</span>
                                        <span className={styles.cut}>x</span>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => history.push('/vendor/dashboard/')} className={styles.invoice}>View Profile</button>
                            </td>
                            <td>
                                <button
                                    className={styles.details}
                                    onClick={() => history.push('/vendor/dashboard/sales-history')}
                                > Details </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => history.push('/vendor/dashboard/payments-history')}
                                    className={styles.payment}>
                                    1200.00
                                </button>
                            </td>
                            <td>
                                <div className="d-flex">
                                    {val.status ? 
                                    <button  onClick={() => makedeactive(val.vendor_id)} className={styles.button} style={{ background: 'green' }}>Active </button>
                                    : (
                                    <button onClick={() => makeactive(val.vendor_id)} className={styles.button} style={{ background: "darkorange" }}>Deactive</button>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div className="d-flex">
                                    <button onClick={() => deleteVendor(val.vendor_id)} className={styles.button} style={{ background: 'red' }}>Delete</button>
                                </div>
                            </td>

                        </tr>
                         );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vendors