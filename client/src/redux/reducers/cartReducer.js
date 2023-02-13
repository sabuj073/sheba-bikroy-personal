import { CART_SIDE_BAR } from '../types';

const init = {
	cartSideBar: false,
};

const cartReducer = (state = init, action) => {
	switch (action.type) {
		case CART_SIDE_BAR: {
			return {
				cartSideBar: action.payload.cartOpen
					? action.payload.cartOpen
					: false,
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
