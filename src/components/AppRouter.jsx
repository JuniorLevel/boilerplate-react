import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage1 from '../templates/WelcomePage1/WelcomePage1';
import WelcomePage2 from '../templates/WelcomePage2/WelcomePage2';
import WelcomePage3 from '../templates/WelcomePage3/WelcomePage3';
import WelcomePage4 from '../templates/WelcomePage4/WelcomePage4';
import WelcomePage5 from '../templates/WelcomePage5/WelcomePage5';
import WelcomePage6 from '../templates/WelcomePage6/WelcomePage6';
import WelcomePage7 from '../templates/WelcomePage7/WelcomePage7';
import WelcomePage8 from '../templates/WelcomePage8/WelcomePage8';
import HomePage from '../templates/HomePage/HomePage';
import HomeDev from './HomeDev/HomeDev';
import FiltersOpenedPage from '../templates/FiltersOpenedPage/FiltersOpenedPage';
import FiltersClosedPage from '../templates/FiltersClosedPage/FiltersClosedPage';
import FiltersClosedPreviewPage from '../templates/FiltersClosedPreviewPage/FiltersClosedPreviewPage';
import DiffOpenedCardsPage from '../templates/DiffOpenedCardsPage/DiffOpenedCardsPage';
import DiffClosedCardsPage from '../templates/DiffClosedCardsPage/DiffClosedCardsPage';
import OrderPage from '../templates/OrderPage/OrderPage';

const AppRouter = () => (
	<Routes>
		<Route exact path="/" element={<HomeDev />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/order" element={<OrderPage />} />
		<Route path="/FiltersOpenedPage" element={<FiltersOpenedPage />} />
		<Route path="/FiltersClosedPage" element={<FiltersClosedPage />} />
		<Route
			path="/FiltersClosedPreviewPage"
			element={<FiltersClosedPreviewPage />}
		/>
		<Route path="/DiffOpenedCardsPage" element={<DiffOpenedCardsPage />} />
		<Route path="/DiffClosedCardsPage" element={<DiffClosedCardsPage />} />
		<Route path="/WelcomePage1" element={<WelcomePage1 />} />
		<Route path="/WelcomePage2" element={<WelcomePage2 />} />
		<Route path="/WelcomePage3" element={<WelcomePage3 />} />
		<Route path="/WelcomePage4" element={<WelcomePage4 />} />
		<Route path="/WelcomePage5" element={<WelcomePage5 />} />
		<Route path="/WelcomePage6" element={<WelcomePage6 />} />
		<Route path="/WelcomePage7" element={<WelcomePage7 />} />
		<Route path="/WelcomePage8" element={<WelcomePage8 />} />
	</Routes>
);

export default AppRouter;
