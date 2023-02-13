import { useState } from 'react';
import { RiFolderReceivedFill, RiShoppingBag3Fill } from 'react-icons/all';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import image from '../../../assets/images/image.png';
import styles from './OrderDetails.module.css';
import './style.css';

const OrderDetails = () => {
    const [isBag, setIsBag] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    return (
        <div >
            <div className="bg-white ">
                <div className="ps-4">
                    <div className={styles.invoiceTitleNum}>Invoice No</div>
                    <p>IV00000525</p>
                </div>

                <div className={styles.border}></div>

                <div className="expend">
                    <div className="row pt-1 mb-3 pb-2">
                        <div className="col-3 cart__side__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="col-5 cart__side__details">
                            <div className="w-100">
                                <div className="cart__side__item__name" style={{ fontSize: '14px', fontWeight: '500', textAlign: 'justify', marginBottom: '0' }} >
                                    This is a product this is a short
                                </div>
                                <div className="small"> 234 </div>
                            </div>
                        </div>
                        <div className="col-1 cart__side__quantity">
                            <div className="w-100 dFlex">
                                <MdKeyboardArrowUp className="item__icon ItemIcon" />
                                <span className="item__quantity">
                                    12
                                </span>
                                <MdKeyboardArrowDown className="item__icon ItemIcon" />
                            </div>
                        </div>
                        <div className="col-1 p-0 cart__side__price">
                            <div className="w-100 ">
                                <div className="item__price"> 1232 </div>
                                <span className="smallPrice">232</span>
                            </div>
                        </div>
                        <div className="col-2 Icons ps-0">
                            <RiShoppingBag3Fill
                                onClick={() => setIsBag(true)}
                                style={{
                                    color: `${isBag ? 'gray' : '#39b54a'}`,
                                    cursor: `${isBag ? 'not-allowed' : 'pointer'}`
                                }}
                            />
                            <br />
                            <RiFolderReceivedFill
                                onClick={() => setIsCheck(true)}
                                style={{
                                    color: `${isCheck ? '#39b54a' : 'gray'}`,
                                    cursor: `${isCheck ? 'not-allowed' : 'pointer'}`
                                }}
                            />
                        </div>
                    </div>
                    <div className="row pt-1 mb-3 pb-2">
                        <div className="col-3 cart__side__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="col-5 cart__side__details">
                            <div className="w-100">
                                <div className="cart__side__item__name" style={{ fontSize: '14px', fontWeight: '500', textAlign: 'justify', marginBottom: '0' }} >
                                    This is a product this is a short
                                </div>
                                <div className="small"> 234 </div>
                            </div>
                        </div>
                        <div className="col-1 cart__side__quantity">
                            <div className="w-100 dFlex">
                                <MdKeyboardArrowUp className="item__icon ItemIcon" />
                                <span className="item__quantity">
                                    12
                                </span>
                                <MdKeyboardArrowDown className="item__icon ItemIcon" />
                            </div>
                        </div>
                        <div className="col-1 p-0 cart__side__price">
                            <div className="w-100 ">
                                <div className="item__price"> 1232 </div>
                                <span className="smallPrice">232</span>
                            </div>
                        </div>
                        <div className="col-2 Icons ps-0">
                            <RiShoppingBag3Fill
                                onClick={() => setIsBag(true)}
                                style={{
                                    color: `${isBag ? 'gray' : '#39b54a'}`,
                                    cursor: `${isBag ? 'not-allowed' : 'pointer'}`
                                }}
                            />
                            <br />
                            <RiFolderReceivedFill
                                onClick={() => setIsCheck(true)}
                                style={{
                                    color: `${isCheck ? '#39b54a' : 'gray'}`,
                                    cursor: `${isCheck ? 'not-allowed' : 'pointer'}`
                                }}
                            />
                        </div>
                    </div>
                    <div className="row pt-1 mb-3 pb-2">
                        <div className="col-3 cart__side__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="col-5 cart__side__details">
                            <div className="w-100">
                                <div className="cart__side__item__name" style={{ fontSize: '14px', fontWeight: '500', textAlign: 'justify', marginBottom: '0' }} >
                                    This is a product this is a short
                                </div>
                                <div className="small"> 234 </div>
                            </div>
                        </div>
                        <div className="col-1 cart__side__quantity">
                            <div className="w-100 dFlex">
                                <MdKeyboardArrowUp className="item__icon ItemIcon" />
                                <span className="item__quantity">
                                    12
                                </span>
                                <MdKeyboardArrowDown className="item__icon ItemIcon" />
                            </div>
                        </div>
                        <div className="col-1 p-0 cart__side__price">
                            <div className="w-100 ">
                                <div className="item__price"> 1232 </div>
                                <span className="smallPrice">232</span>
                            </div>
                        </div>
                        <div className="col-2 Icons ps-0">
                            <RiShoppingBag3Fill
                                onClick={() => setIsBag(true)}
                                style={{
                                    color: `${isBag ? 'gray' : '#39b54a'}`,
                                    cursor: `${isBag ? 'not-allowed' : 'pointer'}`
                                }}
                            />
                            <br />
                            <RiFolderReceivedFill
                                onClick={() => setIsCheck(true)}
                                style={{
                                    color: `${isCheck ? '#39b54a' : 'gray'}`,
                                    cursor: `${isCheck ? 'not-allowed' : 'pointer'}`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="totalMoney">
                <div className={styles.summery}>
                    <p style={{ fontWeight: '600' }}>
                        <span>Total Product MRP:</span>
                        <span>2000</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails