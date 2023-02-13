import { FaTimes } from 'react-icons/fa';
import OrderLink from '../../../CMS/Components/OrderLink/OrderLink';
import { deliveryOrderLinks } from '../../../CMS/Components/OrderLinksData/OrderLinks';
import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import InvoiceModal from '../InvoiceModal';
import styles from '../Order.module.css';
import OrderDetailsInvoice from '../OrderDetailsInvoice';

const PendingOrder = () => {
	return (
		<>
			<div className={styles.newOrder}>
				<OrderTitle
					title="Pending Orders"
					length={5}
					background="#e74c3c"
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
								<td>
									<button data-bs-toggle="modal" data-bs-target="#invoiceModalNew" className={styles.invoice}>
										V0125
									</button>
								</td>
								<td>
									<button data-bs-toggle="modal" data-bs-target="#orderDetailsNew" className={styles.details}>
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
									<div className="d-flex">
										<select className={styles.orderSelect} name="" id="">
											<option style={{ background: '#e74c3c' }} value="">Pending</option>
											<option style={{ background: 'rgb(255, 179, 0)' }} value="">Picked Up</option>
											<option style={{ background: '#3498db' }} value="">Residual</option>
											<option style={{ background: 'green' }} value="">Complete</option>
											<option style={{ background: 'red' }} value="">Spam</option>
										</select>
										<button className={`${styles.times} ms-1`}>
											<FaTimes />
										</button>
									</div>
								</td>

							</tr>
						</tbody>
					</table>
				</div>
				<OrderLink orderLinks={deliveryOrderLinks} />
			</div>

			<InvoiceModal
				data={[]}
				idName="invoiceModalNew"
			/>
			<OrderDetailsInvoice
				data={[]}
				idName="orderDetailsNew"
			/>
		</>
	);
};

export default PendingOrder;