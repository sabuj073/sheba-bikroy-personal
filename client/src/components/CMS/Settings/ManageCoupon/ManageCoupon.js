import { useState } from "react";
import Input from "../../Components/Input/Input";
import SelectBox from "../../Components/Input/SelectBox";
import ManageCouponTable from "./ManageCouponTable";

const ManageCoupon = () => {
    const [coupon, setCoupon] = useState({});

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setCoupon((state) => ({
            ...state,
            [name]: value
        }))
    }
    const district = [
        { id: 1, value: 'dhaka', name: 'Dhaka' },
        { id: 2, value: 'gazipur', name: 'Gazipur' },
        { id: 3, value: 'rashahi', name: 'Rajshahi' },
    ];
    const thana = [
        { id: 1, value: 'mirpur', name: 'Mirpur' },
        { id: 2, value: 'dhanmondhi', name: 'Dhanmondhi' },
        { id: 3, value: 'shahBag', name: 'ShahBag' },
    ];
    const categories = [
        { id: 1, value: 'electronic', name: 'Electronic' },
        { id: 2, value: 'fashion', name: 'Fashion' },
        { id: 3, value: 'baby', name: 'Baby' },
    ];
    return (
        <div className="create__category mt-3">
            <form
                action=""
                className="create__category__form bg-white shadow-sm p-4"
            >
                <h2 className="cms__title mb-4">Create Coupon Code </h2>
                <SelectBox
                    label="District Wise"
                    name="district"
                    options={district}
                    onChange={inputHandler}
                />
                <SelectBox
                    label="Thana Wise"
                    name="district"
                    options={thana}
                    onChange={inputHandler}
                />
                <SelectBox
                    label="Category Wise"
                    name="category"
                    options={categories}
                    onChange={inputHandler}
                />
                <Input
                    label="Product Wise"
                    name="percent"
                    type="text"
                    placeholder="Product Search"
                    onChange={inputHandler}
                />
                <Input
                    label="Setup Commission in Percent"
                    name="percent"
                    type="text"
                    placeholder="Enter Commission"
                    onChange={inputHandler}
                />

                <Input
                    label="Create Coupon Code"
                    name="couponCode"
                    type="text"
                    placeholder="Enter Code"
                    onChange={inputHandler}
                />
                <Input
                    label="Create Cashback Code "
                    name="cashback"
                    type="text"
                    placeholder="Enter Code "
                    onChange={inputHandler}
                />

                <div className="text-center">
                    <button type="submit" className="btn btn-success me-3">
                        Create
                    </button>
                </div>
            </form>

            <ManageCouponTable />
        </div>
    )
}

export default ManageCoupon