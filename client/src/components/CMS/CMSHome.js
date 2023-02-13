import * as Icons from 'react-icons/all';
import React, { useState } from "react";
import { FaUser, FaUsers } from 'react-icons/all';
import '../../assets/styles/cms/order.css';
import './CMSHome.css';
import Cart from './Components/Cart/Cart';
import Cart2 from './Components/Cart2/Cart2';
import Chart from './Components/Chart/Chart';
import Report from './Components/Report/Report';
import instance from "../../base_url.js";


const CMSHome = () => {
    const [orderinfo, setorderinfo] = useState([]);
    var Pending = 0;
    var Picked_Up=0;
    var Residual = 0;
    var Complete = 0;
    var Cancel = 0;
    var Spam = 0;

    const getorderdata = async () => {
        await instance
          .post("main_home/get-order-count", {

          })
          .then((response) => {
            if (orderinfo.length == 0) {
                setorderinfo(response.data);
                var array = response.data;
                array.forEach(element => {
                    if(element.status=="Pending"){
                        Pending = element.count;
                        console.log(Pending);
                    }
                    if(element.status=="Picked Up"){
                        Picked_Up = element.count;
                    }
                    if(element.status=="Residual"){
                        Residual = element.count;
                    }
                    if(element.status=="Complete"){
                        Complete = element.count;
                    }
                    if(element.status=="Cancel"){
                        Cancel = element.count;
                    }
                    if(element.status=="Spam"){
                        Spam = element.count;
                    }
                });
            }
          });
      };

      getorderdata();

    return (
        <div className="pt-5  container">
            <h3 className="title-of-list"> Order Management</h3>
            <div className="row g-3">
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="New Orders!"
                        amount={Pending}
                        link="cms/orders/new-order"
                        primaryColor="#155b8a"
                        secondaryColor="#3498db"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Pending Orders"
                        amount={Pending}
                        link="cms/orders/all-pending-order"
                        primaryColor="#8c1717"
                        secondaryColor="#e74c3c"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Picked Orders"
                        amount={Picked_Up}
                        link="cms/orders/all-picked-up-order"
                        primaryColor="#ff8f00"
                        secondaryColor="#ffb300"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Residual Orders"
                        amount={Residual}
                        link="/cms/orders/all-residual-order"
                        primaryColor=" #5e35b1"
                        secondaryColor="#7e57c2"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Cancel Orders"
                        amount={Cancel}
                        link="cms/orders/all-cancel-order"
                        primaryColor="red"
                        secondaryColor="#eb1c1c"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Complete Orders"
                        amount={Complete}
                        link="/cms/orders/all-complete-order"
                        primaryColor="#388e3c"
                        secondaryColor="#66bb6a"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Spam Orders"
                        amount={Spam}
                        link="cms/orders"
                        primaryColor="maroon"
                        secondaryColor="red"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Total Orders"
                        amount={Number(Pending)+Number(Picked_Up)+Number(Residual)+Number(Residual)+Number(Cancel)+Number(Complete)+Number(Spam)}
                        link="cms/orders"
                        primaryColor="#e64a19"
                        secondaryColor="#ff5722"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
            </div>

            {/* ************* Customer and Sales Analyze **************** */}
            <h3 className="title-of-list mt-5"> Customer and Sales Analyze</h3>
            <div className="row ">
                <div className="col-md-4 col-lg-3">
                    <Report
                        title="New Customers"
                        amount={Spam}
                        time="Last 30 days"
                        borderColor="#ffbf36"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Report
                        title="Total Customers"
                        amount={Spam}
                        time="All Times"
                        borderColor="#00bcd1"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Report
                        title="Total Sales"
                        amount={Spam}
                        time="Last 30 days"
                        borderColor="#673ab7"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Report
                        title="Total Sales"
                        amount={Spam}
                        time="All Times"
                        borderColor="#39b54a"
                    />
                </div>
            </div>

            <div className="row bg-white py-4">
                <div className="col-md-6 mx-auto">
                    <Chart />
                </div>
            </div>

            {/* ************* Visitor *************  */}
            {/* <div className="row g-0">
                <div className="col-md-4">
                    <div className="visitor-title">
                        <h1>Visitor Counter</h1>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="visitor-counter">
                        <div className="visitor-total">
                            <div className="visitor-counter-item"> 1 </div>
                            <div className="visitor-counter-item"> 2 </div>
                            <div className="visitor-counter-item"> 7 </div>
                            <div className="visitor-counter-item"> 5 </div>
                            <div className="visitor-counter-item"> 9 </div>
                        </div>
                        <div className="visitor-counter-option">
                            <FaUser /> Daily
                            <span>310</span>
                        </div>
                        <div className="visitor-counter-option">
                            <FaUser />
                            This Week
                            <span>310</span>
                        </div>
                        <div className="visitor-counter-option">
                            <FaUsers /> This Month
                            <span>2597</span>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* ************* Total overview **************** */}
            <h3 className="title-of-list mt-5">Total Overview</h3>
            <div className="row g-3 ">
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Total Orders!"
                        amount={Spam}
                        link="cms/orders"
                        primaryColor="deeppink"
                        secondaryColor="hotpink"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.BiFolderOpen}
                        title="Total Products!"
                        amount={Spam}
                        link="products"
                        primaryColor="#0fa49b"
                        secondaryColor="#0bb7ad"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaUser}
                        title="Total Owner!"
                        amount={5}
                        link="wanner"
                        primaryColor="#129021"
                        secondaryColor="#18b51f"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaUsers}
                        title="Total Customers!"
                        amount={5}
                        link="wanner"
                        primaryColor="#f85108"
                        secondaryColor="#f68023"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaRegCheckCircle}
                        title="Total Vendors!"
                        amount={3}
                        link="wanner"
                        primaryColor="#352d7b"
                        secondaryColor="#6a5bed"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.VscServerProcess}
                        title="Total Services!"
                        amount={4}
                        link="wanner"
                        primaryColor="#047edf"
                        secondaryColor="#0696ea"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaUsers}
                        title="Total Stuff!"
                        amount={1}
                        link="wanner"
                        primaryColor="#690777"
                        secondaryColor="#9625a6"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaPeopleCarry}
                        title="Total Delivery Man!"
                        amount={0}
                        link="wanner"
                        primaryColor="#d89c09"
                        secondaryColor="#daae41"
                    />
                </div>
            </div>

            {/* ************* Vendor and Service Providers  **************** */}
            {/* <h3 className="title-of-list mt-5">
                {' '}
                Vendor, Service Providers And Delivary Man{' '}
            </h3> */}
            {/* <div className="row ">
                <div className="col-md-4">
                    <Report
                        title="Total Vendors"
                        amount={3}
                        borderColor=" #673ab7"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Active Vendors"
                        amount={9}
                        borderColor="#39b54a"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Deactive Vendors"
                        amount={10}
                        borderColor="#ffbf36"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Total Service Provider"
                        amount={22}
                        borderColor=" #673ab7"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Active Service Provider"
                        amount={9}
                        borderColor="#39b54a"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Deactive Service Provider"
                        amount={10}
                        borderColor="#ffbf36"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Total Delivery Man"
                        amount={22}
                        borderColor=" #673ab7"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Active Delivery Man"
                        amount={9}
                        borderColor="#39b54a"
                    />
                </div>
                <div className="col-md-4">
                    <Report
                        title="Deactive  Delivery Man"
                        amount={10}
                        borderColor="#ffbf36"
                    />
                </div>
            </div> */}

            {/* ************* Vendor and Service Providers  **************** */}
            {/* <h3 className="title-of-list mt-5"> Product Categories Section </h3>
            <div className="row g-3">
                <div className="col-md-4">
                    <Cart2
                        title="Categories"
                        amount={9}
                        link="cms/categories/"
                        backgroundColor="#1e88e5"
                    />
                </div>
                <div className="col-md-4">
                    <Cart2
                        title="Sub Categories"
                        amount={9}
                        link="cms/sub-categories/"
                        backgroundColor="darkcyan"
                    />
                </div>
                <div className="col-md-4">
                    <Cart2
                        title="Child Categories"
                        amount={9}
                        link="cms/child-categories/"
                        backgroundColor="#39b54a"
                    />
                </div>
            </div> */}
            {/* ************* Vendor and Service Providers  **************** */}
            {/* <h3 className="title-of-list mt-5">Service Categories Section </h3>
            <div className="row g-3">
                <div className="col-md-4">
                    <Cart2
                        title="Categories"
                        amount={9}
                        link="cms"
                        backgroundColor="#1e88e5"
                    />
                </div>
                <div className="col-md-4">
                    <Cart2
                        title="Sub Categories"
                        amount={9}
                        link="cms"
                        backgroundColor="darkcyan"
                    />
                </div>
                <div className="col-md-4">
                    <Cart2
                        title="Child Categories"
                        amount={9}
                        link="cms"
                        backgroundColor="#39b54a"
                    />
                </div>
            </div> */}

        </div>
    );
};

export default CMSHome;
