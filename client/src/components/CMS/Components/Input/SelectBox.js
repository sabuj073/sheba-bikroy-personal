const SelectBox = ({ label, options, name, option, required, onChange }) => {
    return (
        <div className="mb-3 row">
            <label for="category" className="col-sm-3 col-form-label">
                <span className="add__product__form__title">
                    {label}
                    {required && <span style={{ color: '#ff0000', fontSize: '18px' }}> *</span>}
                </span>
                <span className="text-secondary text__small ">
                    {option}
                </span>
            </label>
            <div className="col-sm-9">
                <select onChange={onChange} className="form-select" name={name}>
                    {options.map((option) => (
                        <option key={option.name} value={option.name}> {option.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectBox