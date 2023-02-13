import { BsFileEarmarkCheck } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import './Order.css';

const Order = () => {
    return (
        <div className="basic__information">
            <div className="basic__information__icon">
                <BsFileEarmarkCheck />
            </div>
            <div className="basic__information__form">
                <div className="info__title">
                    <h4>Order History</h4>
                </div>
                <div className="subscriptions" >
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Product Name</th>
                                <th>PaymentStatus</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <td>01</td>
                                <td>07-05-21</td>
                                <td> $10</td>
                                <td>Weekly</td>
                                <td>Paypal</td>
                                <td className="ps-3">
                                    <FaEye className="show__btn" />
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>07-05-21</td>
                                <td> $10</td>
                                <td>Weekly</td>
                                <td>Paypal</td>
                                <td className="ps-3">
                                    <FaEye className="show__btn" />
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>07-05-21</td>
                                <td> $10</td>
                                <td>Weekly</td>
                                <td>Paypal</td>
                                <td className="ps-3">
                                    <FaEye className="show__btn" />
                                </td>
                            </tr>
                        </tbody> */}
                    </table>
                </div >
            </div>

        </div>
    );
};

export default Order;
