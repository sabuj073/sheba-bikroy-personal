import React from 'react';
import { Suspense } from 'react-is';
const Invoice = React.lazy(() => import('../../CMS/Invoice/Invoice'));

const InvoiceModal = ({ data, idName }) => {
    return (
        <div class="modal fade" id={`${idName}`} tabindex="-1" aria-labelledby={`${idName}Label`} aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id={`${idName}Label`}>Invoice Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Suspense fallback={'Loading ...'}>
                            <Invoice data={data} />
                        </Suspense>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;