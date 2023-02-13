import { NAV_SIDE_BAR } from '../types';

export const navSideBarAction = () => (dispatch) => {
	dispatch({
		type: NAV_SIDE_BAR,
	});
};
