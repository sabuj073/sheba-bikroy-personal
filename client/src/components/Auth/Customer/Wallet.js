import { FaRegCreditCard } from 'react-icons/fa';
import moneySvg from '../../../assets/images/money.svg';
import SelectBox from '../../Shared/SelectBox/SelectBox';
import './Wallet.css';

const Wallet = () => {
    return (
        <div>
            <div className="basic__information">
                <div className="basic__information__icon">
                    <FaRegCreditCard />
                </div>
                <div className="basic__information__form">
                    <div className="info__title">
                        <h4>Wallet</h4>
                    </div>
                    <div className="transaction__money">
                        <div className="transaction__item">
                            <div className="tra__money">
                                <img src={moneySvg} alt="" className="me-2" />
                                <p>Total Balance</p>
                            </div>
                            <div className="tran__account">৳ 0</div>
                        </div>
                        <div className="transaction__item">
                            <div className="tra__money">
                                <img src={moneySvg} alt="" className="me-2" />
                                <p> Reference Balance</p>
                            </div>
                            <div className="tran__account">৳ 0</div>
                        </div>
                        <div className="transaction__item">
                            <div className="tra__money">
                                <img src={moneySvg} alt="" className="me-2" />
                                <p>Cashback Balance</p>
                            </div>
                            <div className="tran__account">৳ 0</div>
                        </div>
                    </div>




                    <div className="subscriptions">
                        <div className="mb-2"><SelectBox /></div>
                        <table>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Reference Name</th>
                                    <th>Reference Id</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>07.05.2021</td>
                                    <td> ৳20</td>
                                    <td>Morshed Ali</td>
                                    <td>C33sei1s</td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>07.05.2021</td>
                                    <td> ৳20</td>
                                    <td>Morshed Ali</td>
                                    <td>C33sei1s</td>
                                </tr>
                            </tbody> */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
