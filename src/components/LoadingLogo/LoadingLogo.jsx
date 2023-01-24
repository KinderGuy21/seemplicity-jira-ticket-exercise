import { SeemplicityColoredIcon } from 'assets';
import './loading-logo.css';

const LoadingLogo = ({ loadingText }) => {
	return (
		<div className='loading-logo-container'>
			<SeemplicityColoredIcon className='logo-svg'/>
            <div className='text'>{loadingText ?? 'Loading...'}</div>
		</div>
	);
};

export default LoadingLogo;
