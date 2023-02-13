import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './CostIncomeTable.module.css';
import './Table.css';


const CostIncomeTable = () => {
    const [showCost, setShowCost] = useState(false);
    const [showIncome, setShowIncome] = useState(false);
    return (
        <div className="container">
            <div className="p-3 bg-white mt-3">
                <div className="row justify-content-center mb-5 g-2">
                    <div className="col-6 col-lg-4">
                        <div className={styles.Card} style={{ background: '#d22121' }}>
                            <h2>Cost Data</h2>
                            <span onClick={() => setShowCost(!showCost)} > {showCost ? 'Close ' : 'Show '} </span>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4">
                        <div className={styles.Card} style={{ background: 'green' }}>
                            <h2>Income Data</h2>
                            <span onClick={() => setShowIncome(!showIncome)} >{showIncome ? 'Close' : 'Show'}</span>
                        </div>
                    </div>
                </div>

                {showCost && (
                    <div className="TableItem">
                        <div className={styles.TableTitle}>Cost Data (Voucher) </div>
                        <div className="printWrapper">
                            <div className="input-group mb-2 ">
                                <select className="me-3 mb-2">
                                    <option value="">Select Month</option>
                                    <option value="">Jan</option>
                                    <option value="">Feb</option>
                                </select>
                                <select className="me-3 mb-2">
                                    <option value="">Select Year </option>
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                </select>
                                <input className="mb-2" type="search" name="" id="" placeholder="search" />
                            </div>
                            <div >
                                <span className="print">Print </span>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className={`table  ${styles.Table}`}>
                                <colgroup span="2"></colgroup>
                                <tr className={styles.TableHeader}>
                                    <th>Sl</th>
                                    <th>Date</th>
                                    <th>V. No</th>
                                    <th>Pay To</th>
                                    <th>Description</th>
                                    <th colspan="3" scope="colgroup">Cost Section</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <th colspan="5"></th>
                                    <th scope="col">Electric Bill</th>
                                    <th scope="col">Wasa Bill</th>
                                    <th scope="col">Stuff Salary</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>10-7-2021</td>
                                    <td>v26</td>
                                    <td>Morshed Ali</td>
                                    <td>Electricity Bill- June-2021</td>
                                    <td>7000.00</td>
                                    <td>00.00</td>
                                    <td>00.00</td>
                                    <td>
                                        <button className={styles.editButton}>Edit</button>
                                        <button className="ms-2">
                                            <FaTimes />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th colspan="4"></th>
                                    <th>Total</th>
                                    <th scope="col">7000.00</th>
                                    <th scope="col">00.00</th>
                                    <th scope="col">30000.00</th>
                                    <th scope="col" >37000.00</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                )}

                {showIncome && (
                    <div className="TableItem mt-5">
                        <div className={styles.TableTitle}>Income Data (Voucher) </div>
                        <div className="printWrapper">
                            <div className="input-group mb-2">
                                <select className="me-3 mb-2">
                                    <option value="">Select Month</option>
                                    <option value="">Jan</option>
                                    <option value="">Feb</option>
                                </select>
                                <select className="me-3 mb-2">
                                    <option value="">Select Year </option>
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                </select>
                                <input className="mb-2" type="search" name="" id="" placeholder="search" />
                            </div>
                            <div >
                                <span className="print">Print </span>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className={`table  ${styles.Table}`}>
                                <colgroup span="2"></colgroup>
                                <tr className={styles.TableHeader}>
                                    <th>Sl</th>
                                    <th>Date</th>
                                    <th>V. No</th>
                                    <th>Received From</th> <th>Description</th>
                                    <th colspan="3" scope="colgroup">Income Section</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <th colspan="5"></th>
                                    <th scope="col">Add Fee</th>
                                    <th scope="col">Company Gift</th>
                                    <th scope="col">Commission</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>10-7-2021</td>
                                    <td>v26</td>
                                    <td>Morshed Ali</td>
                                    <td>Electricity Bill- June-2021</td>
                                    <td>7000.00</td>
                                    <td>00.00</td>
                                    <td>00.00</td>
                                    <td>
                                        <button className={styles.editButton}>Edit</button>
                                        <button className="ms-2">
                                            <FaTimes />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th colspan="4"></th>
                                    <th>Total</th>
                                    <th scope="col">7000.00</th>
                                    <th scope="col">00.00</th>
                                    <th scope="col">30000.00</th>
                                    <th scope="col" >37000.00</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CostIncomeTable