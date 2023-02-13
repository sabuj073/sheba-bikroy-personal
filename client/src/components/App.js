import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Modal from './Home/Modal';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';
import CartSidebar from './Shared/SideBars/CartSidebar/CartSidebar';

function App() {
	return (
		<CartProvider>
			<Modal />

			<Router>
				<ScrollToTop />
				<CartSidebar />
				<Routes />
			</Router>
		</CartProvider>
	);
}

export default App;
