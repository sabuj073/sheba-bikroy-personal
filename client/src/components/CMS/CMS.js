import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../../assets/styles/cms/cms.css';
import CMSHeader from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useHistory } from "react-router-dom";

const CMSHome = React.lazy(() => import('./CMSHome'));
const DistrictSetup = React.lazy(() => import('./AreaSetup/DistrictSetup'));
const AreaSetup = React.lazy(() => import('./AreaSetup/AreaSetup'));
const ThanaSetup = React.lazy(() => import('./AreaSetup/ThanaSetup'));
const AddProduct = React.lazy(() => import('./Products/AddProduct/AddProduct'));
const CancelOrder = React.lazy(() => import('./Order/CancelOrder/CancelOrder'));
const CompleteOrder = React.lazy(() => import('./Order/CompleteOrder/CompleteOrder'));
const NewOrders = React.lazy(() => import('./Order/NewOrder/NewOrders'));
const PendingOrder = React.lazy(() => import('./Order/PendingOrder/PendingOrder'));
const PickupOrder = React.lazy(() => import('./Order/PickupOrder/PickupOrder'));
const ResidualOrder = React.lazy(() => import('./Order/ResidualOrder/ResidualOrder'));
const TotalOrder = React.lazy(() => import('./Order/TotalOrder/TotalOrder'));
const CreateCategory = React.lazy(() => import('./Category/CreateCategory'));
const CreateServiceCategory = React.lazy(() => import('./Category/CreateServiceCategory'));
const CreateChildCategory = React.lazy(() => import('./Category/CreateChildCategory'));
const CreateSubCategory = React.lazy(() => import('./Category/CreateSubCategory'));
const CreateServiceSubCategory = React.lazy(() => import('./Category/CreateServiceSubCategory'));
const Categories = React.lazy(() => import('./Category/Categories'));
const ServiceCategories = React.lazy(() => import('./Category/ServiceCategories'));
const ChildCategories = React.lazy(() => import('./Category/ChildCategories'));
const SubCategories = React.lazy(() => import('./Category/SubCategories'));
const ServiceSubCategories = React.lazy(() => import('./Category/ServiceSubCategories'));
const AddVendor = React.lazy(() => import('./Dealer/AddVendor'));
const Vendors = React.lazy(() => import('./Dealer/Vendors/Vendors'));
const AddDeliveryMan = React.lazy(() => import('./DeliveryMan/AddDeliveryMan/AddDeliveryMan'));
const AllDeliveryMan = React.lazy(() => import('./DeliveryMan/AllDeliveryMan/AllDeliveryMan'));
const OfflineCustomer = React.lazy(() => import('./Customer/OfflineCustomer/OfflineCustomer'));
const OnlineCustomer = React.lazy(() => import('./Customer/OnlineCustomer/OnlineCustomer'));
const AddStuff = React.lazy(() => import('./Stuffs/AddStuffs/AddStuff'));
const AllStuffs = React.lazy(() => import('./Stuffs/AllStuffs/AllStuffs'));
const CostVoucher = React.lazy(() => import('./Accounts/CostVoucher/CostVoucher'));
const IncomeVoucher = React.lazy(() => import('./Accounts/IncomeVoucher/IncomeVoucher'));
const ProfitAndLoss = React.lazy(() => import('./Accounts/ProfitAndLoss/ProfitAndLoss'));
const CostIncomeTable = React.lazy(() => import('./Accounts/CostIncomeTable/CostIncomeTable'));
const PaymentsHistory = React.lazy(() => import('./SaleAndHistory/PaymentHistory/PaymentHistory'));
const SalesHistory = React.lazy(() => import('./SaleAndHistory/SalesHistory/SalesHistory'));
const Commission = React.lazy(() => import('./Settings/Commision/Commission'));
const ManageCoupon = React.lazy(() => import('./Settings/ManageCoupon/ManageCoupon'));
const Wallet = React.lazy(() => import('./Settings/Wallet/Wallet'));
const CustomerMessage = React.lazy(() => import('./Notification/CustomerMessage/CustomerMessage'));
const MessageHistory = React.lazy(() => import('./Notification/MessageHistory/MessageHistory'));
const Notices = React.lazy(() => import('./Notification/Notices/Notices'));
const SendMessage = React.lazy(() => import('./Notification/SendMessage/SendMessage'));
const VendorPaymentsHistory = React.lazy(() => import('./Dealer/PaymentsHistory/PaymentsHistory'));
const VendorSalesHistory = React.lazy(() => import('./Dealer/SalesHistory/SalesHistory'));
const ProductList = React.lazy(() => import('./Products/ProductList/ProductList'));

const CMS = ({ match }) => {
    let history = useHistory();
    var adminData = "";

    if (!localStorage.getItem("admin")) {
        history.push("/admin-login");
    }
    return (
        <div className="cms__wrapper">
            <CMSHeader />
            <Sidebar />
            <div className="cms__page__content">
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <CMSHome />
                        </Suspense>
                    </Route>'

                    {/* Area Setup */}
                    <Route exact path={`${match.path}/district-setup`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <DistrictSetup />
                        </Suspense>
                    </Route>
                    <Route exact path={`${match.path}/thana-setup`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <ThanaSetup />
                        </Suspense>
                    </Route>
                    <Route exact path={`${match.path}/area-setup`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <AreaSetup />
                        </Suspense>
                    </Route>

                    {/* Products  */}
                    <Route exact path={`${match.path}/add-product`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <AddProduct />
                        </Suspense>
                    </Route>
                    <Route exact path={`${match.path}/products`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <ProductList />
                        </Suspense>
                    </Route>


                    {/* Vendors Routes */}
                    <Route exact path={`${match.path}/add-vender`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <AddVendor />
                        </Suspense>
                    </Route>
                    <Route exact path={`${match.path}/vendor-list`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <Vendors />
                        </Suspense>
                    </Route>

                    {/* Order Routes */}
                    <Route path={`${match.path}/orders/new-order`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <NewOrders />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-pending-order`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <PendingOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-pickup-order`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <PickupOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-residual-order`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <ResidualOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-cancel-order`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <CancelOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-complete-order`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <CompleteOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/total-orders`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <TotalOrder />
                        </Suspense>
                    </Route>

                    {/* Category Routes */}
                    <Route path={`${match.path}/categories/create-category`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <CreateCategory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/service-categories/create-category`}>
                        <Suspense fallback={<div> Loading......</div>}>
                            <CreateServiceCategory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/categories/create-sub-category`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <CreateSubCategory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/service-categories/create-sub-category`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <CreateServiceSubCategory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/categories/create-child-category`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <CreateChildCategory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/categories`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <Categories />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/service-categories`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <ServiceCategories />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/sub-categories`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <SubCategories />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/service-sub-categories`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <ServiceSubCategories />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/child-categories`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <ChildCategories />
                        </Suspense>
                    </Route>

                    {/* Delivery Man  */}
                    <Route path={`${match.path}/add-delivery-man`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <AddDeliveryMan />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/all-delivery-man`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <AllDeliveryMan />
                        </Suspense>
                    </Route>

                    {/*  Customers */}
                    <Route path={`${match.path}/offline-customer`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <OfflineCustomer />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/online-customer`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <OnlineCustomer />
                        </Suspense>
                    </Route>

                    {/* Stuff Management  */}
                    <Route path={`${match.path}/add-new-stuff`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <AddStuff />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/all-stuff`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <AllStuffs />
                        </Suspense>
                    </Route>

                    {/** Account Products */}
                    <Route path={`${match.path}/intotal-summary`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <CostVoucher />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/daily-income`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <IncomeVoucher />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/cost-income-data`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <CostIncomeTable />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/profit-loss`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <ProfitAndLoss />
                        </Suspense>
                    </Route>





                    {/** Sales and History **/}
                    <Route path={`${match.path}/sales-history`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <SalesHistory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/payments-history`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <PaymentsHistory />
                        </Suspense>
                    </Route>

                    {/* Notification  */}
                    <Route path={`${match.path}/notices`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <Notices />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/send-message`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <SendMessage />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/message-history`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <MessageHistory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/customer-messages`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <CustomerMessage />
                        </Suspense>
                    </Route>

                    {/* Setting  */}
                    <Route path={`${match.path}/manage-coupon`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <ManageCoupon />
                        </Suspense>

                    </Route>
                    <Route path={`${match.path}/manage-commission`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <Commission />
                        </Suspense>

                    </Route>
                    <Route path={`${match.path}/manage-wallet`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <Wallet />
                        </Suspense>
                    </Route>

                    <Route path={`${match.path}/vendor/sales-history`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <VendorSalesHistory />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/vendor/payments-history`} >
                        <Suspense fallback={<div> Loading......</div>}>
                            <VendorPaymentsHistory />
                        </Suspense>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default withRouter(CMS);
