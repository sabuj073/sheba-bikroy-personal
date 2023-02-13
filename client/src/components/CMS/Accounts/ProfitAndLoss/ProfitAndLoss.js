
import styles from './ProfitAndLost.module.css';
const ProfitAndLoss = () => {
    return (
        <div class="container mt-3">
            <div className="costVoucher create__category__form bg-white shadow-sm p-4">
                <h3 className="mb-4 text-center">Profit And Loss </h3>
                <div className="printWrapper">
                    <div className="input-group mb-2">
                        <select className="me-3 mb-2 ">
                            <option value="">Select Month</option>
                            <option value="">Jan</option>
                            <option value="">Feb</option>
                        </select>
                        <select className="me-3 mb-2  ">
                            <option value="">Select Year </option>
                            <option value="">2021</option>
                            <option value="">2022</option>
                        </select>
                        <input className="mb-2" type="search" name="" id="" placeholder="search" />
                    </div>
                    <div >
                        <span className="print">Print </span>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className={styles.ProfitAndLoss}>
                        <thead>
                            <tr>
                                <th className={styles.income} colSpan="5">Income</th>
                                <th className={styles.cost} colSpan="5">Cost</th>
                                <th className={styles.profit} colSpan="2">Profit and Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Month</th>
                                <th>Sales Commission From Vendors</th>
                                <th>Delivery Charge</th>
                                <th>From Voucher</th>
                                <th>Total Income</th>
                                <th>Cash Discount</th>
                                <th>Cash Back</th>
                                <th>Reference Commission </th>
                                <th>Form Voucher</th>
                                <th>Total Cost</th>
                                <th className={styles.profitHeader}>Profit</th>
                                <th className={styles.profitHeader}>Loss</th>
                            </tr>
                            <tr>
                                <th>January 2021</th>
                                <td>30000</td>
                                <td>10000</td>
                                <td>1000.00</td>
                                <td className={styles.total}>41000.00</td>
                                <td>12000.00</td>
                                <td>3000.00</td>
                                <td>6000.00</td>
                                <td>37800.00</td>
                                <td className={styles.total}>58800.00</td>
                                <td className={styles.profitData}  >00.00</td>
                                <td className={styles.lossData} > -17800.00</td>
                            </tr>
                            <tr>
                                <th>February 2021</th>
                                <td>30000</td>
                                <td>10000</td>
                                <td>1000.00</td>
                                <td className={styles.total}>41000.00</td>
                                <td>12000.00</td>
                                <td>3000.00</td>
                                <td>6000.00</td>
                                <td>37800.00</td>
                                <td className={styles.total}>58800.00</td>
                                <td className={styles.profitData}  >00.00</td>
                                <td className={styles.lossData} > -17800.00</td>
                            </tr>
                            <tr>
                                <th className={styles.allTotal} colSpan="4"> Total </th>
                                <th>41000.00</th>
                                <th className={styles.allTotal} colSpan="4"> Total </th>
                                <th>41000.00</th>
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