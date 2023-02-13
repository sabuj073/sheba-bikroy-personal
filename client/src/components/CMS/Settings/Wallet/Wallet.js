import React from 'react';
import './Wallet.css';

const Wallet = () => {
    return (
        <div className="container mt-3">
            <div className="commission create__category__form bg-white shadow-sm p-4">
                <h4 className="comOptionTitle">Manage Wallet</h4>
                <div className="text-center my-3">
                    <span>OFF/ON</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="walletItem" style={{ background: '#2e3092' }}>
                                <h6>5000.00</h6>
                                <h5>Total Balance</h5>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="walletItem" style={{ background: '#1074bc' }}>
                                <h6>2000.00</h6>
                                <h5>Form Reference</h5>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="walletItem" style={{ background: '#1074bc' }}>
                                <h6>3000.00</h6>
                                <h5>Form Cashback </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;