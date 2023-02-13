import styles from './OrderTitle.module.css';

const OrderTitle = ({ title, length, background, isFilter }) => {
    return (
        <div
            className={styles.orderTitleWrapper}
            style={{ backgroundColor: background }}
        >
            <h3 className={styles.orderTitle}>
                {title}: <span> {length}</span>
            </h3>
            {isFilter &&
                <select className={styles.orderSelect} name="" id="">
                    <option value="">Today's</option>
                    <option value="">This Week</option>
                    <option value="">This Month</option>
                    <option value="">This Year</option>
                </select>
            }
        </div>
    );
};

export default OrderTitle;
