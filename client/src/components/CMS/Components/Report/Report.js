import styles from './Report.module.css';

const Report = ({ title, amount, time, borderColor }) => {
    return (
        <div className={styles.report}>
            <div className={styles.reportAmount}
                style={{ borderColor: borderColor }}
            > {amount} </div>
            <div className={styles.reportName}>
                <h6> {title} </h6>
                {time && <p>{time} </p>}
            </div>
        </div>
    )
}

export default Report