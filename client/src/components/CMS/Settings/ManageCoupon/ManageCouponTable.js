import styles from './ManageCoupon.module.css';


const ManageCouponTable = () => {
    return (
        <div className={styles.newOrderTableWrapper}>
            <table className={styles.ManageCouponTable}>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>District Wise</th>
                        <th>Thana Wise</th>
                        <th>Category or Product Wise</th>
                        <th>Commission</th>
                        <th>Coupon Code</th>
                        <th>Cashback Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dhaka</td>
                        <td>Banani</td>
                        <td> Category Wise </td>
                        <td> 3% </td>
                        <td > 16DEC2021 </td>
                        <td>FREEZ2021</td>
                        <td>
                            <div className="d-flex">
                                <select className={styles.orderSelect} name="" id="">
                                    <option style={{ background: 'red' }} value="">Active</option>
                                    <option style={{ background: 'darkorange' }} value="">DeActive</option>
                                </select>
                                <div className="ms-3 d-flex">
                                    <button className={styles.button} style={{ background: 'green' }}> Edit </button>
                                    <button className={styles.button} style={{ background: "red" }}>Del</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ManageCouponTable