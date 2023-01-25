import PropTypes from 'prop-types';
import clsx from 'clsx';
import Modal from 'react-modal';
import { CloseIcon } from 'assets';
import './base-modal.css';

const BaseModal = ({ isOpen, onClose, className, children, ...props }) => (
	<Modal
		className={clsx('modal', className)}
		isOpen={isOpen}
		overlayClassName='overlay-modal'
		ariaHideApp={false}
		onRequestClose={onClose}
		{...props}
	>
		<button className='close' onClick={onClose}>
			<CloseIcon />
		</button>

		<div className='modal-content'>{children}</div>
	</Modal>
);

BaseModal.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	onClose: PropTypes.func,
	isOpen: PropTypes.bool,
};

BaseModal.defaultProps = {
	title: '',
	isOpen: false,
	children: null,
	onClose: () => {},
};

export default BaseModal;
