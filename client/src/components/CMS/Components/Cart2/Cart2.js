import { Link } from 'react-router-dom';

const Cart2 = ({ title, amount, link, backgroundColor }) => {
    return (
        <div className="order__information"
            style={{ backgroundColor: backgroundColor }}
        >
            <Link to={`/${link}`} className="order__information__view">
                View All
            </Link>
            <h3> {amount} </h3>
            <h4> {title} </h4>
        </div>
    )
}

export default Cart2