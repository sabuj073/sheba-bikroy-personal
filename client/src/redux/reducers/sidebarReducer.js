import { NAV_SIDE_BAR } from '../types';

const init = {
	navSideBar: false,
};

const sidebarReducer = (state = init, action) => {
	switch (action.type) {
		case NAV_SIDE_BAR: {
			console.log('Here click');
			return {
				...state,
				navSideBar: !state.navSideBar,
			};
		}
		default:
			return state;
	}
};

export default sidebarReducer;
