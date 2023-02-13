import React from 'react';
import { Suspense } from 'react-is';
const OrderDetails = React.lazy(() => import('../OrderDetails/OrderDetails'));

const OrderDetailsInvoice = ({ data, idName }) => {
    return (
        <div class="modal fade" id={`${idName}`} tabindex="-1" aria-labelledby={`${idName}Label`} aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id={`${idName}Label`}>Order Details Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Suspense fallback={'Loading ...'}>
                            <OrderDetails data={data} />
                        </Suspense>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsInvoice;