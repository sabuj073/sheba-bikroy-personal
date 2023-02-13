const InputFile = ({ label, name, onChange, option, multiple, required }) => {
    return (
        <div className="mb-3 row">
            <label for="gallery" className="col-sm-3 col-form-label">
                <span className="add__product__form__title">
                    {label}
                    {required && <span style={{ color: '#ff0000', fontSize: '18px' }}> *</span>}
                </span>
                <span className="text-secondary text__small ">
                    {option}
                </span>
            </label>
            <div className="col-sm-9">
                <input
                    type="file"
                    name={name}
                    id={name}
                    className="form-control"
                    onChange={onChange}
                    multiple={multiple}
                />
            </div>
        </div>
    )
}

export default InputFile