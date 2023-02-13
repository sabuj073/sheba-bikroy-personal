import styles from './ProfitAndLoss.module.css';

const ProfitAndLoss = () => {

    return (
        <div class="container mt-3">
            <div className="costVoucher create__category__form bg-white shadow-sm p-4">
                <h3 className="mb-4 text-center">Profit And Loss </h3>
                <div className="printWrapper">
                    <div className="input-group mb-3">
                        <select className="me-3">
                            <option value="">Select Month</option>
                            <option value="">Jan</option>
                            <option value="">Feb</option>
                        </select>
                        <select className="me-3">
                            <option value="">Select Year </option>
                            <option value="">2021</option>
                            <option value="">2022</option>
                        </select>
                        <input type="search" name="" id="" placeholder="search" />
                    </div>
                    <div >
                        <span className="print">Print </span>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className={styles.ProfitAndLoss}>
                        <thead>
                            <tr>
                                <th className={styles.income} colSpan="10">Profit and Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Month</th>
                                <th>Category Name</th>
                                <th>Category Wise Commission in Percent (%)</th>
                                <th> Product Sales (MRP Value)</th>
                                <th>Product Buying Price</th>
                                <th>Profit</th>
                                <th>Loss</th>
                                <th>Company Commission </th>
                                <th>Final Profit</th>
                                <th >Final Loss</th>
                            </tr>
                            <tr>
                                <th rowSpan="3">January 2021</th>
                                <td>Grocary</td>
                                <td>10</td>
                                <td>1000.00</td>
                                <td>850.00</td>
                                <td>150.00</td>
                                <td>00.00</td>
                                <td>100.00</td>
                                <td className={styles.total}>50.00</td>
                                <td className={styles.total}>00.00</td>
                            </tr>
                            <tr>
                                <td>Cosmatics</td>
                                <td>10</td>
                                <td>1000.00</td>
                                <td>850.00</td>
                                <td>150.00</td>
                                <td>00.00</td>
                                <td>100.00</td>
                                <td className={styles.total}>50.00</td>
                                <td className={styles.total}>00.00</td>
                            </tr>
                            <tr>
                                <td>Cosmatics</td>
                                <td>10</td>
                                <td>1000.00</td>
                                <td>850.00</td>
                                <td>150.00</td>
                                <td>00.00</td>
                                <td>100.00</td>
                                <td className={styles.total}>50.00</td>
                                <td className={styles.total}>00.00</td>
                            </tr>
                            <tr>
                                <th className={styles.allTotal} colSpan="8"> Total </th>
                                <th className={styles.prof} >41000.00</th>
                                <th className={styles.lossValue}>41000.00</th>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProfitAndLoss;