import React from 'react';
import instance from '../../../base_url.js';

const DistrictModal = () => {

    const updateDIstrict = async () => {
        var district_id_edit = document.getElementById('district_id_edit').value;
        var district_name_edit = document.getElementById('district_name_edit').value;
        var district_name_edit_bn = document.getElementById('district_name_edit_bn').value;
        document.getElementById('district_update_alert').innerHTML = '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>';
        await instance.post('update-district', {
            district_id: district_id_edit,
            district_name: district_name_edit,
            district_name_bn:district_name_edit_bn,
        }).then((response) => {
            document.getElementById('district_update_alert').innerHTML = '<div className="alert alert-success alert-dismissible"><strong>Success!</strong>Update Successful</div>';
            window.location.href = "";
        });
    };
    return (
        <div
            className="modal fade"
            id="districtModal"
            tabIndex="-1"
            aria-labelledby="districtModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="area__select__modal__dismiss">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div id="district_update_alert"></div>
                    <div className="area__select__modal">
                        <div className="area__setup__form">
                            <input type="hidden" id="district_id_edit" />
                            <input
                                type="text"
                                name="district"
                                id="district_name_edit"
                                className="area__setup__input"
                                placeholder="Update District Name"
                            />
                            <br/>
                            <input
                                type="text"
                                name="district"
                                id="district_name_edit_bn"
                                className="area__setup__input"
                                placeholder="Update District Name Bengali"
                            />
                            <button type="submit" className="area__setup__save__btn" onClick={updateDIstrict}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DistrictModal;

