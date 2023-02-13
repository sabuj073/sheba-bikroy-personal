// import { RiFolderReceivedFill, TiArrowBack } from 'react-icons/all';
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import image from '../../../assets/images/image.png';
import styles from '../../CMS/Invoice/Invoice.module.css';

const OrderDetails = () => {

    return (
        <div className="bg-white ">
            <div className="ps-4 ">
                <div className={styles.invoiceAddress}>
                    <div className={styles.invoiceTo}> <div className={styles.invoiceTitle}>Customer Details</div>
                        <div className={styles.invoiceName}>Mr. Morshed Alam</div>
                        <div>
                            01926668802
                            <a className={styles.call} href="tel:+01926668802">
                                Call
                            </a>
                        </div>
                        <div className={styles.invoiceLocation}>
                            <span>Dhaka</span>
                            <span>Banani</span>
                            <span>Chairman Bari</span>
                        </div>
                        <div className={styles.invoiceArea}>Bilash Baban Flatt No-A2, 2nd Floor</div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className={styles.invoiceTitle} style={{ width: '260px' }}>Invoice No</div>
                <p className="ps-1">IV00000525</p>
            </div>

            <div className={styles.border}></div>

            <div className={styles.invoiceTableWrapper}>
                <table className={`${styles.invoiceTable} border table table-bordered`} >
                    <thead>
                        <tr>
                            <th >Category</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Qtn</th>
                            <th>Unite Price</th>
                            <th>Vendor</th>
                            <th className="text-end">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowspan="3" className="text-center"> Groceary </th>
                            <td> <img src={image} width="50px" className="img-fluid" alt="" /> </td>
                            <td>Fresh Rice 5kg Pac </td>
                            <td>1</td>
                            <td>400</td>
                            <td>
                                <button className="btn btn-sm btn-success">Vendor</button>
                            </td>
                            <th className="text-end">400.00</th>
                        </tr>
                        <tr>
                            <td> <img src={image} width="50px" className="img-fluid" alt="" /> </td>
                            <td>Nido Milk Powder, 400 gm </td>
                            <td>1</td>
                            <td>400</td>
                            <td>
                                <button className="btn btn-sm btn-success">Vendor</button>
                            </td>
                            <th className="text-end">400.00</th>
                        </tr>
                        <tr>
                            <td> <img src={image} width="50px" className="img-fluid" alt="" /> </td>
                            <td>Fresh Soyabin Oil, 5 Litter</td>
                            <td>2</td>
                            <td>300</td>
                            <td>
                                <button className="btn btn-sm btn-success">Vendor</button>
                            </td>
                            <th className="text-end">600.00</th>
                        </tr>
                        <tr>
                            <th rowspan="2" className="text-center"> Vegitable </th>
                            <td> <img src={image} width="50px" className="img-fluid" alt="" /> </td>
                            <td>Bitter Melon, 1kg</td>
                            <td>1</td>
                            <td>50</td>
                            <td>
                                <button className="btn btn-sm btn-success">Vendor</button>
                            </td>
                            <th className="text-end">50.00</th>
                        </tr>
                        <tr>
                            <td> <img src={image} width="50px" className="img-fluid" alt="" /> </td>
                            <td> Pui Shekh, 1kg</td>
                            <td>1</td>
                            <td>20</td>
                            <td>
                                <button className="btn btn-sm btn-success">Vendor</button>
                            </td>
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

                </div>
            </div>
            <div className={styles.thank}>
                <span>Thank you</span>
            </div>
        </div>
    )
}

export default OrderDetails