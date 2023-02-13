import companyLogo from '../../../assets/images/Sheba-Bikroy-Logo-2.png';
import styles from './Invoice.module.css';

const Invoice = () => {
    return (
        <div className="container">
            <div className={styles.invoice}>
                <div className={styles.invoiceAddress}>
                    <div className={styles.invoiceForm}>
                        <div className={styles.invoiceTitle}>Bill Form</div>
                        <div className={styles.invoiceName}>
                            <span style={{ color: '#ff0000' }}>Sheba </span>
                            <span style={{ color: '#39b54a' }}>Bikroy</span>.
                            <span>Com</span>
                        </div>
                        <div className={styles.invoiceArea}>Road-1, Block-1, Banani, Dhaka</div>
                        <img className={styles.invoiceLogo} src={companyLogo} alt="" />
                    </div>
                    <div className={styles.invoiceText}>
                        Invoice
                    </div>
                    <div className={styles.invoiceTo}>
                        <div className={styles.invoiceTitle}>Bill To</div>
                        <div className={styles.invoiceName}>Mr. Morshed Alam</div>
                        <div> 01926668802 </div>
                        <div className={styles.invoiceLocation}>
                            <span>Dhaka</span>
                            <span>Banani</span>
                            <span>Chairman Bari</span>
                        </div>
                        <div className={styles.invoiceArea}>Bilash Baban Flatt No-A2, 2nd Floor</div>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className={styles.titleTable}>
                        <tr>
                            <th>Invoice no</th>
                            <th>Customer ID</th>
                            <th>Date</th>
                            <th>Order Time</th>
                            <th>Payment Method</th>
                        </tr>
                        <tr>
                            <td>IV00000525</td>
                            <td>Banani-0089</td>
                            <td>30 Aug 2020</td>
                            <td>03:25 pm</td>
                            <td>Cash On Delivery</td>
                        </tr>
                    </table>
                </div>
                <div className={styles.border}></div>

                <div className={styles.invoiceTableWrapper}>
                    <table className={`${styles.invoiceTable} border table table-bordered`} >
                        <thead>
                            <tr>
                                <th >Category</th>
                                <th>S.L</th>
                                <th>Description</th>
                                <th>Qtn</th>
                                <th>Unite Price</th>
                                <th className="text-end">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowspan="3" className="text-center"> Groceary </th>
                                <td>1</td>
                                <td>Fresh Rice 5kg Pac </td>
                                <td>1</td>
                                <td>400</td>
                                <th className="text-end">400.00</th>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nido Milk Powder, 400 gm </td>
                                <td>1</td>
                                <td>400</td>
                                <th className="text-end">400.00</th>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Fresh Soyabin Oil, 5 Litter</td>
                                <td>2</td>
                                <td>300</td>
                                <th className="text-end">600.00</th>
                            </tr>
                            <tr>
                                <th rowspan="2" className="text-center"> Vegitable </th>
                                <td>4</td>
                                <td>Bitter Melon, 1kg</td>
                                <td>1</td>
                                <td>50</td>
                                <th className="text-end">50.00</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td> Pui Shekh, 1kg</td>
                                <td>1</td>
                                <td>20</td>
                                <th className="text-end">20.00</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.invoiceSummery}>
                    <div className={styles.summery}>
                        <p style={{ fontWeight: '600' }}>
                            <span>Product MRP Value:</span>
                            <span>2000</span>
                        </p>
                        <p>
                            <span>Cash Discount:</span>
                            <span>(-) 16</span>
                        </p>
                        <p>
                            <span> Used Bonus Amount: </span>
                            <span>(-)  16</span>
                        </p>
                        <p style={{ borderBottom: '1px solid #3333', paddingBottom: '8px', marginBottom: '10px', color: '#ff0000' }}>
                            <span>Delivery Charge:</span>
                            <span>(+) 25</span>
                        </p>
                        <h6 className={styles.inTotal}>
                            <span>In Total Payable:</span>
                            <span>2025</span>
                        </h6>
                    </div>
                </div>
                <div className={styles.thank}>
                    <span>Thank you</span>
                </div>
            </div>
        </div>
    )
}

export default Invoice