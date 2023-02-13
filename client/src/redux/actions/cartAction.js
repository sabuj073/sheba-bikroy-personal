import { CART_SIDE_BAR } from '../types';

export const cartSideBarAction = (action) => (dispatch) => {
	if (action === 'open') {
		dispatch({
			type: CART_SIDE_BAR,
			payload: {
				cartOpen: true,
			},
		});
	} else {
		dispatch({
			type: CART_SIDE_BAR,
			payload: {
				cartOpen: false,
			},
		});
	}
};
