import { useHistory } from 'react-router-dom';
import OrderLink from '../../../CMS/Components/OrderLink/OrderLink';
import { vendorOrderLinks } from '../../../CMS/Components/OrderLinksData/OrderLinks';
import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import styles from '../Order.module.css';
import OrderDetailsModal from '../OrderDetailsModal';

const PickupOrder = () => {
    const history = useHistory();

    return (
        <>
            <div className={styles.newOrder}>
                <OrderTitle
                    title="Picked Up Order"
                    length={5}
                    background="rgb(255, 179, 0)"
                    isFilter={true}
                />
                <div className={styles.newOrderTableWrapper}>
                    <table className={styles.newOrderTable}>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Date & Time</th>
                                <th>Amount</th>
                                <th>Invoice</th>
                                <th>O.Details</th>
                                <th>Location</th>
                                <th>Delivery Man</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    20-10-21
                                    <br />
                                    10.25 am
                                </td>
                                <td>৳45</td>
                                <td> IV00025 </td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#vendorOrderDetailsModal" className={styles.details}>
                                        Details
                                    </button>
                                </td>
                                <td className={styles.location}>
                                    <span>Dhaka</span>
                                    <span>Banani</span>
                                    <span>Chairman Bari</span>
                                </td>
                                <td>Morshed Ali</td>
                                <td>
                                    <option style={{ background: 'rgb(255, 179, 0)', color: 'color' }} value="">Picked Up</option>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <OrderLink orderLinks={vendorOrderLinks} />
            </div>
            <OrderDetailsModal
                data={[]}
                idName="vendorOrderDetailsModal"
            />
        </>
    );
};

export default PickupOrder;