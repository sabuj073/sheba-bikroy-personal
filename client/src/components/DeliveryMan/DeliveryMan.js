import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../CMS/CMSHome.css';
import CMSHeader from '../CMS/Header/Header';
import Sidebar from './Sidebar/Sidebar';

const DeliveryHome = React.lazy(() => import('./DeliveryHome'));
const CancelOrder = React.lazy(() => import('./Order/CancelOrder/CancelOrder'));
const CompleteOrder = React.lazy(() => import('./Order/CompleteOrder/CompleteOrder'));
const NewOrders = React.lazy(() => import('./Order/NewOrder/NewOrders'));
const PaymentsHistory = React.lazy(() => import('./Order/PaymentHistory/PaymentHistory'));
const PendingOrder = React.lazy(() => import('./Order/PendingOrder/PendingOrder'));
const PickupOrder = React.lazy(() => import('./Order/PickupOrder/PickupOrder'));
const ResidualOrder = React.lazy(() => import('./Order/ResidualOrder/ResidualOrder'));
const AddProduct = React.lazy(() => import('./Products/AddProduct/AddProduct'));


const DeliveryMan = ({ match }) => {
    return (
        <div className="cms__wrapper">
            <CMSHeader />
            <Sidebar />
            <div className="cms__page__content">
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <DeliveryHome />
                        </Suspense>
                    </Route>

                    <Route exact path={`${match.path}/add-product`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <AddProduct />
                        </Suspense>
                    </Route>


                    {/* Order Routes */}

                    <Route path={`${match.path}/orders/new-order`} >
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <NewOrders />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-pending-order`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <PendingOrder />
                        </Suspense>
                    </Route>

                    <Route path={`${match.path}/orders/all-pickup-order`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <PickupOrder />
                        </Suspense>
                    </Route>

                    <Route path={`${match.path}/orders/all-residual-order`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <ResidualOrder />
                        </Suspense>
                    </Route>

                    <Route path={`${match.path}/orders/all-cancel-order`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <CancelOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/orders/all-complete-order`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <CompleteOrder />
                        </Suspense>
                    </Route>
                    {/* Order Routes */}

                    <Route path={`${match.path}/payment-history`}>
                        <Suspense fallback={<div> Loading ...... </div>}>
                            <PaymentsHistory />
                        </Suspense>

                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default withRouter(DeliveryMan);
