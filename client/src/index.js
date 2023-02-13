import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'jquery/dist/jquery.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import './assets/styles/cms/cms.css';
import './assets/styles/style.css';
import App from './components/App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
