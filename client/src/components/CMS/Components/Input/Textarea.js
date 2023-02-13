const Textarea = ({ label, option, name, onChange, placeholder, required }) => {
    return (
        <div className="mb-3 row">
            <label for={name} className="col-sm-3 col-form-label" >
                <span className="add__product__form__title ">
                    {label}
                    {required && <span style={{ color: '#ff0000', fontSize: '18px' }}> *</span>}
                </span>
                <span className="text-secondary text__small"> {option} </span>
            </label>
            <div className="col-sm-9">
                <textarea
                    type="text"
                    rows="3"
                    className="form-control"
                    id={name}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Textarea