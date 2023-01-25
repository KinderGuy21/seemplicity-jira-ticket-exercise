import { Tabs, SettingsModal } from 'components';
import { SeemplicityIcon, SettingsIcon, PersonIcon } from 'assets';
import { useModal } from 'hooks';
import './navbar.css';

const Navbar = () => {
	const { openModal, modal: ModalComponent } = useModal(SettingsModal);

	return (
		<div className='navbar-container'>
			<div className='left-side'>
				<SeemplicityIcon className='seemplicity-logo' />
				<Tabs />
			</div>
			<div className='right-side'>
				<button className='icon-button' onClick={openModal}>
					<SettingsIcon />
				</button>
				<div className='user'>
					<PersonIcon />
					Alon@seemplicity.io
				</div>
			</div>
			{ModalComponent}
		</div>
	);
};

export default Navbar;
