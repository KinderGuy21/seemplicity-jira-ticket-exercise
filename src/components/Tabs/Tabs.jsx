import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { PATH_NAMES, TABS_NAMES } from 'constants';
import './tabs.css';

const checkCurrentLocation = () => {
	let matchedPath = Object.values(PATH_NAMES).find(path => path === window.location.pathname);

	if(matchedPath) {
		if(matchedPath === PATH_NAMES.EMPTY) {
			return PATH_NAMES.DASHBOARD;
		}
		return matchedPath
	}
	return PATH_NAMES.DASHBOARD;
};

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(checkCurrentLocation());
	const navigate = useNavigate();

	const handleTabClick = ({ target }) => {
		const newTab = target.getAttribute('data-tab');
		setActiveTab(PATH_NAMES[newTab]);
		navigate(PATH_NAMES[newTab], { replace: true });
	};

	return (
		<div className='tabs-container'>
			<div className='tabs'>
				{TABS_NAMES.map(({ key, displayText }) => (
					<button
						key={key}
						data-tab={key}
						className={clsx('tab-button', {
							active: activeTab === PATH_NAMES[key],
						})}
						onClick={handleTabClick}
					>
						{displayText}
					</button>
				))}
			</div>
		</div>
	);
};

export default Tabs;
