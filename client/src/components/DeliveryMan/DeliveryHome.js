
import * as Icons from 'react-icons/all';
import Cart from '../CMS/Components/Cart/Cart';

const DeliveryHome = () => {
    return (
        <div className="container mt-4">
            <div className="row g-3">
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="New Orders!"
                        amount={5}
                        link="delivery-man/orders/new-order"
                        primaryColor="#155b8a"
                        secondaryColor="#3498db"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Pending Orders"
                        amount={5}
                        link="delivery-man/orders/all-pending-order"
                        primaryColor="#8c1717"
                        secondaryColor="#e74c3c"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Picked Orders"
                        amount={5}
                        link="delivery-man/orders/all-picked-up-order"
                        primaryColor="#ff8f00"
                        secondaryColor="#ffb300"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Residual Orders"
                        amount={5}
                        link="/delivery-man/orders/all-residual-order"
                        primaryColor=" #5e35b1"
                        secondaryColor="#7e57c2"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Cancel Orders"
                        amount={5}
                        link="delivery-man/orders/all-cancel-order"
                        primaryColor="red"
                        secondaryColor="#eb1c1c"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Complete Orders"
                        amount={5}
                        link="/delivery-man/orders/all-complete-order"
                        primaryColor="#388e3c"
                        secondaryColor="#66bb6a"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Cart
                        Icon={Icons.FaShoppingCart}
                        title="Spam Orders"
                        amount={5}
                        link="delivery-man/orders"
                        primaryColor="maroon"
                        secondaryColor="red"
                        padding="5px 15px"
                        textAlgin="text-end"
                    />
                </div>
            </div>
        </div>
    );
};

export default DeliveryHome;