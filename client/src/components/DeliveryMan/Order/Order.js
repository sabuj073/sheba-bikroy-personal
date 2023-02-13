import '../../../assets/styles/cms/order.css';
const Order = () => {
	return (
		<div className="container pt-5">
			<div className="row g-4">
				<div className="col-md-3">
					<div className="order__information order__information--darkBlue">
						<span className="order__information__view">View</span>
						<h3>1</h3>
						<h4>New Order</h4>
					</div>
				</div>
				<div className="col-md-3">
					<div className="order__information order__information--salmon">
						<span className="order__information__view">View</span>
						<h3>1</h3>
						<h4>Pending</h4>
					</div>
				</div>
				<div className="col-md-3">
					<div className="order__information order__information--orange">
						<span className="order__information__view">View</span>
						<h3> 0 </h3>
						<h4>Picked Up</h4>
					</div>
				</div>
				<div className="col-md-3">
					<div className="order__information order__information--blue">
						<span className="order__information__view">View</span>
						<h3>1</h3>
						<h4>Residual </h4>
					</div>
				</div>

				<div className="col-md-3">
					<div className="order__information order__information--green">
						<span className="order__information__view">View</span>
						<h3>1</h3>
						<h4>Complete</h4>
					</div>
				</div>
				<div className="col-md-3">
					<div className="order__information order__information--darkOrange">
						<span className="order__information__view">View</span>
						<h3>1</h3>
						<h4>All Orders</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
