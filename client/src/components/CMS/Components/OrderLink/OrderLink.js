import { Link } from "react-router-dom";
import styles from './OrderLink.module.css';

const OrderLink = ({ orderLinks }) => {

    return (
        <div className={styles.orderLink}>
            {orderLinks.map((orderLink) => (
                <Link
                    key={orderLink.id}
                    to={`${orderLink.link}`}
                    className={styles.orderLinkItem}
                    style={{ backgroundColor: orderLink.background }}
                >
                    {orderLink.title}
                </Link>
            ))}
        </div>
    )
}

export default OrderLink