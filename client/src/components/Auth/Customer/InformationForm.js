const InformationForm = ({ setHandler }) => {
    return (
        <form>
            <div className="input__group">
                <label htmlFor="">First Name</label>
                <input type="text" name="" id="" placeholder="First Name" />
            </div>
            <div className="input__group">
                <label htmlFor="">Last Name</label>
                <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <div className="input__group">
                <label htmlFor="">Contact Number</label>
                <input type="text" name="" id="" placeholder="Number" />
            </div>
            <div className="input__group">
                <label htmlFor="">Birthday</label>
                <div className="input__select__group">
                    <select
                        name=""
                        id=""
                        className="input__select appearance-none"
                    >
                        <option value="2000">Year</option>
                        <option value="2000">2000</option>
                        <option value="2000">2000</option>
                        <option value="2000">2000</option>
                    </select>
                    <select
                        name=""
                        id=""
                        className="input__select appearance-none"
                    >
                        <option value="2000">Month</option>
                        <option value="2000">2000</option>
                        <option value="2000">2000</option>
                        <option value="2000">2000</option>
                    </select>
                    <select
                        name=""
                        id=""
                        className="input__select appearance-none"
                    >
                        <option value="2000">Day</option>
                        <option value="2000">2000</option>
                        <option value="2000">2000</option>
                        <option value="2000">2000</option>
                    </select>
                </div>
            </div>

            <div className="input__group">
                <label htmlFor="">Gender</label>
                <div className="input__select__group">
                    <select
                        name=""
                        id=""
                        className="input__select appearance-none"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="input__group">
                <label htmlFor="">Occupation</label>
                <input type="text" name="" id="" placeholder="Occupation" />
            </div>
            <div className="input__group">
                <button
                    type="button"
                    className="cancel__btn"
                    onClick={() => setHandler(true)}
                >
                    Cancel
                </button>
                <button type="submit" className="submit__btn">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default InformationForm;
