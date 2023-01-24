import { LoadingLogo } from 'components';
import './remediation.css'

const Remediation = () => {
	return (
		<div className='remediation-container'>
			<div className='title'>Remediation</div>
			<LoadingLogo loadingText='There is no remediation, try a different page :)' />
		</div>
	);
};

export default Remediation;
