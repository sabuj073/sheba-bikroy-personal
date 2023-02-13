import styles from './SelectBox.module.css';

const SelectBox = () => {
    return (
        <select className={styles.orderSelect} name="" id="">
            <option value="">This Week</option>
            <option value="">This Month</option>
            <option value="">This Year</option>
        </select>
    );
};

export default SelectBox;