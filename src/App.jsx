import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from 'components';
import { Findings, Dashboard, Remediation, Rules, NotFound } from 'routes';
import { PATH_NAMES } from 'constants';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path={PATH_NAMES.EMPTY} element={
					<Navigate to={PATH_NAMES.DASHBOARD} replace={true} />
				} />
				<Route exact path={PATH_NAMES.DASHBOARD} element={
					<Dashboard />
				} />
				<Route exact path={PATH_NAMES.FINDINGS} element={
					<Findings />
				} />
				<Route exact path={PATH_NAMES.REMEDIATION} element={
					<Remediation />
				} />
				<Route exact path={PATH_NAMES.RULES} element={
					<Rules />
				} />
				<Route exact path={PATH_NAMES.SETTINGS} element={
					<h1>SETTINIGS</h1>
				} />
				<Route path='*' element={
					<NotFound />
				} />

			</Routes>
		</BrowserRouter>
	)
};

export default App;
