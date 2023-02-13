import React, { useState } from 'react';
import Select from 'react-select';
import Input from '../../Components/Input/Input';
import InputFile from '../../Components/Input/InputFile';
// import styles from './AddDeliveryMan.module.css';

const AddDeliveryMan = () => {
    const [addDealer, setAddDealer] = useState({});
    const options = [
        { value: 'electronic', label: 'Electronic' },
        { value: 'baby', label: 'Baby Accessories' },
        { value: 'vanilla', label: 'Vanilla' },
    ]

    const amount = [
        { value: 5, label: 5 },
        { value: 10, label: 10 },
        { value: 15, label: 15 },
    ]

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setAddDealer((state) => ({
            ...state,
            [name]: value
        }))
    };

    const fileHandler = (event) => {
        // write file handler code ...
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(addDealer);
    }
    const onChange = (selectedOptions) => {
        console.log(selectedOptions)
    }
    return (
        <div className="add__dealer mt-3">
            <form
                className="add__dealer__form bg-white shadow-sm p-4"
                onSubmit={submitHandler}
            >
                <h2 className="cms__title mb-5">Field the Form</h2>


                <Input
                    label="Your Name"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={inputHandler}
                    required={true}
                />

                <Input
                    label="Father's Name"
                    type="text"
                    name="father_name"
                    placeholder="Enter Father's Name"
                    onChange={inputHandler}
                    required={true}
                />

                <Input
                    label="Mother's Name"
                    type="text"
                    name="mother_name"
                    placeholder="Enter Mother's Name"
                    onChange={inputHandler}
                    required={true}
                />

                <Input
                    label="E-mail Address"
                    type="email"
                    name="email"
                    placeholder="Enter E-mail Address"
                    onChange={inputHandler}
                />

                <Input
                    label="Mobile Number"
                    type="text"
                    name="phone"
                    placeholder="Enter Mobile Number"
                    onChange={inputHandler}
                    required={true}
                />

                <Input
                    label="NID  Number"
                    type="text"
                    name="NID"
                    placeholder="Enter NID Number"
                    onChange={inputHandler}
                    required={true}
                />

                <Input
                    label="Permanent Address"
                    type="text"
                    name="permanent_address"
                    placeholder="Enter Permanent Address"
                    onChange={inputHandler}
                    required={true}
                />
                <Input
                    label="Present Address"
                    type="text"
                    name="present_address"
                    placeholder="Enter Present Address"
                    onChange={inputHandler}
                    required={true}
                />

                <InputFile
                    label="Upload  Photo"
                    name="phone"
                    onChange={fileHandler}
                    required={true}
                />

                <InputFile
                    label="Upload NID"
                    name="nid_photo"
                    onChange={fileHandler}
                    required={true}
                />

                <InputFile
                    label="Upload Driving Licence"
                    name="nid_photo"
                    onChange={fileHandler}
                />


                <div className="mb-3 row">
                    <label for="" className="col-sm-3 col-form-label">
                        Choose Area
                    </label>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-md-6">
                                <span>District</span>
                                <Select
                                    isMulti
                                    name="category"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <span>Thana</span>
                                <Select
                                    isMulti
                                    name="category"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center mt-3">
                    <button type="submit" className="btn btn-success me-3">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDeliveryMan;
