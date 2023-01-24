import { LoadingLogo } from 'components';
import './dashboard.css'

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<div className='title'>Dashboard</div>
			<LoadingLogo loadingText='There is no dashboard, but enjoy the animation :)' />
		</div>
	);
};

export default Dashboard;
