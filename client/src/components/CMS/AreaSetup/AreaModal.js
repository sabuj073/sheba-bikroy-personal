import React, { useState } from 'react';
import instance from '../../../base_url.js';

const AreaModal = () => {
	//////Update Purpose ///
	const [district_update, setdistrict_update] = useState([]);
	const [thana_update, setThana_update] = useState([]);
	const getDistrict = async () => {
		await instance.post('get-district').then((response) => {
			if (
				district_update.length == 0 &&
				Number(response.data.length) > 0
			) {
				setdistrict_update(response.data);
			}
		});
	};
	const getThana = async () => {
		await instance.post('get-thana-area').then((response) => {
			if (thana_update.length == 0 && Number(response.data.length) > 0) {
				setThana_update(response.data);
			}
		});
	};

	const getThana_filter = async () => {
		var filter_district = document.getElementById('district_id_edit_area')
			.value;
		await instance
			.post('get-thana', {
				type: filter_district,
			})
			.then((response) => {
				setThana_update(response.data);
			});
	};

	const update_area = async () => {
		var district_id_edit_area = document.getElementById(
			'district_id_edit_area'
		).value;
		var thana_id_edit_area = document.getElementById('thana_id_edit_area')
			.value;
		var area_name_edit = document.getElementById('area_name_edit').value;
		var area_id = document.getElementById('update_area_id').value;
		var area_name_edit_bn = document.getElementById('area_name_edit_bn').value;
		var delivery_charge_edit = document.getElementById('delivery_charge_edit').value;
		var over_delivery_fee_edit = document.getElementById('over_delivery_fee_edit').value;
		document.getElementById('area_update_alert').innerHTML =
			'<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>';
		await instance
			.post('update-area', {
				district_id: district_id_edit_area,
				thana_id: thana_id_edit_area,
				area_name: area_name_edit,
				area_id: area_id,
				area_name_edit_bn,
				delivery_charge_edit,
				over_delivery_fee_edit,
			})
			.then((response) => {
				document.getElementById('area_update_alert').innerHTML =
					'<div className="alert alert-success alert-dismissible"><strong>Success!</strong>Update Successful</div>';
				window.location.href = '';
			});
	};

	getDistrict();
	getThana();
	/////Update Purpose ///
	return (
		<div
			className="modal fade"
			id="areaModal"
			tabIndex="-1"
			aria-labelledby="areaModalLabel"
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
					<div id="area_update_alert"></div>
					<div className="area__select__modal">
						<div className="area__setup__form">
							<input type="hidden" id="update_area_id"></input>
							<label>District *</label>
							<select
								id="district_id_edit_area"
								className="area__setup__select mb-3"
								aria-label="Default select example"
								onChange={getThana_filter}
							>
								<option selected>--Select District--</option>
								{district_update.map((val) => {
									return (
										<option value={val.district_id}>
											{val.district_name}
										</option>
									);
								})}
							</select>
							<label>Thana *</label>
							<select
								id="thana_id_edit_area"
								className="area__setup__select mb-3"
								aria-label="Default select example"
							>
								<option selected>Select Thana</option>
								{thana_update.map((val) => {
									return (
										<option value={val.thana_id}>
											{val.thana_name}
										</option>
									);
								})}
							</select>
							<label>Area Name *</label>
							<input
								type="text"
								name="district"
								id="area_name_edit"
								className="area__setup__input"
								placeholder="Update Area Name"
							/>
							<br/>
							<label>Area Name Bengali *</label>
							<input
								type="text"
								name="district"
								id="area_name_edit_bn"
								className="area__setup__input"
								placeholder="Update Area Name Bengali"
							/>
			<br/>

			<label>Over Delivery Fee *</label>			
			<input
                type="text"
                name="delivery_charge"
                id="delivery_charge_edit"
                className="area__setup__input"
                placeholder="Enter delivery charge"
              />
              <br />
              <label>Over Delivery Fee *</label>
              <input
                type="text"
                name="over_delivery_fee"
                id="over_delivery_fee_edit"
                className="area__setup__input"
                placeholder="Enter amount for charge fee"
              />

							<button
								type="submit"
								className="area__setup__save__btn"
								onClick={update_area}
							>
								Update
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AreaModal;
