import './settings-modal.css';

const SettingsModal = () => {
	return (
		<div className='settings-modal'>
			<div className='title'>Settings</div>

            <hr />

			<div className='info'>
				<div className='subtitle'>
					There are no settings here currently.
				</div>

				<div className='content'>
					But there are more stuff to do on the website.
				</div>
			</div>
		</div>
	);
};

export default SettingsModal;
