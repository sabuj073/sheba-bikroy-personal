import OrderLink from '../../../CMS/Components/OrderLink/OrderLink';
import { deliveryOrderLinks } from '../../../CMS/Components/OrderLinksData/OrderLinks';
import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import InvoiceModal from '../InvoiceModal';
import styles from '../Order.module.css';
import OrderDetailsInvoice from '../OrderDetailsInvoice';

const CompleteOrder = () => {
	return (
		<>
			<div className={styles.newOrder}>
				<OrderTitle
					title="Complete Orders"
					length={5}
					background="#39b54a"
					isFilter={true}
				/>
				<div className={styles.newOrderTableWrapper}>
					<table className={styles.newOrderTable}>
						<thead>
							<tr>
								<th>SL</th>
								<th>Time & Date</th>
								<th>Amount</th>
								<th>Invoice</th>
								<th>O.Details</th>
								<th>Location</th>
								<th>Delivery Man</th>
								<th>Action</th>
								<th>Payment</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>
									10.25 am
									<br />
									20-10-21
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
									<select className={styles.orderSelect} name="" id="">
										<option style={{ background: 'green' }} value="">Complete</option>
										<option style={{ background: 'red' }} value="">Spam</option>
									</select>
								</td>
								<td>
									<button className={styles.payment}>Pay</button>
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

export default CompleteOrder;