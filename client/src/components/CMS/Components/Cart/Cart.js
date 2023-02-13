// import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './Cart.module.css';

const Cart = ({ Icon, amount, title, link, primaryColor, secondaryColor, padding, textAlgin }) => {
    return (
        <div className={styles.cart}
            style={{ background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`, padding: padding && padding }}
        >
            <h4 className={styles.cartTitle}> {title} </h4>
            <div className={styles.cartAmount}>
                <h3>{amount} </h3>
                <Icon className={styles.cartIcon} />
            </div>
            <div className={textAlgin ? `${textAlgin} pb-2 me-3` : ""}>
                <Link className={styles.cartButton} to={`/${link}`}> View All</Link>
            </div>
            <div className={styles.cartOverlay} style={{ backgroundColor: primaryColor }} />
        </div>
    )
}

export default Cart