const CheckBox = ({ title, label }) => {
    return (
        <div className="mb-2 form-check" style={{ fontSize: '20px', marginRight: '15px' }}>
            <input
                id={label}
                type="checkbox"
                className="form-check-input"
                style={{ borderRadius: '0px' }}
            />
            <label for={label} className="form-check-label" style={{ marginLeft: "-5px" }}>
                {title}
            </label>
        </div>
    )
}

export default CheckBox