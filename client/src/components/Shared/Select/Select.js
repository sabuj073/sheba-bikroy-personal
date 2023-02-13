import React from 'react';

const Select = ({ label, options }) => {
    return (
        <select
            className="form-select mb-3"
            aria-label={label}
        >
            <option selected>{label}</option>
            {options.map(option => (
                <option value={option.value} >
                    {option.value}
                </option>
            ))}
        </select>
    );
};

export default Select;