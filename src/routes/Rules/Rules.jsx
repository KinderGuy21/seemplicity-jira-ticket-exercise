import { LoadingLogo } from 'components';
import './rules.css'

const Rules = () => {
	return (
		<div className='rules-container'>
			<div className='title'>Rules</div>
			<LoadingLogo loadingText='There are no rules, but at least the animation is nice:)' />
		</div>
	);
};

export default Rules;
