import React, { useState } from 'react';
import instance from '../../../base_url.js';

const ThanaModal = () => {
    //////Update Purpose ///
    const [district_update, setdistrict_update] = useState([]);
    const getDistrict = async () => {
        await instance.post('get-district').then((response) => {
            if (district_update.length == 0 && Number(response.data.length) > 0) {
                setdistrict_update(response.data);
            }
        });
    };

    const update_thana = async () => {
        var district_id_edit_thana = document.getElementById('district_id_edit_thana').value;
        var thana_id_edit_thana = document.getElementById('thana_id_edit_thana').value;
        var thana_name_edit = document.getElementById('thana_name_edit').value;
        var bn_thana_name = document.getElementById("bn_thana_name").value;
        document.getElementById('thana_update_alert').innerHTML = '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>';
        await instance.post('update-thana', {
            district_id: district_id_edit_thana,
            thana_id: thana_id_edit_thana,
            thana_name: thana_name_edit,
            bn_thana_name:bn_thana_name,
        }).then((response) => {
            document.getElementById('thana_update_alert').innerHTML = '<div className="alert alert-success alert-dismissible"><strong>Success!</strong>Update Successful</div>';
            window.location.href = "";
        });
    };

    getDistrict();
    /////Update Purpose ///
    return (
        <div
            className="modal fade"
            id="thanaModal"
            tabIndex="-1"
            aria-labelledby="thanaModalLabel"
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
                    <div id="thana_update_alert"></div>
                    <div className="area__select__modal">
                        <div className="area__setup__form">
                            <input type="hidden" id="thana_id_edit_thana" />
                            <select
                                id="district_id_edit_thana"
                                className="area__setup__select mb-3"
                                aria-label="Default select example">
                                <option selected>Select District</option>
                                {district_update.map((val) => {
                                    return <option value={val.district_id}>{val.district_name}</option>
                                })}
                            </select>
                            <input
                                type="text"
                                name="district"
                                id="thana_name_edit"
                                className="area__setup__input"
                                placeholder="Update Thana Name"
                            />
                            <br/>
                            <input
                                type="text"
                                name="district"
                                id="bn_thana_name"
                                className="area__setup__input"
                                placeholder="Update Thana Name Bengali"
                            />

                            <button type="submit" className="area__setup__save__btn" onClick={update_thana}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThanaModal;