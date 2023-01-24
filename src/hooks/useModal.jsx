import { useState, useCallback, useMemo } from 'react';
import { BaseModal } from 'components';

const useModal = (Modal, props) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = useCallback(() => (
    setOpen(true)
  ), [setOpen]);

  const closeModal = useCallback(() => (
    setOpen(false)
  ), [setOpen]);

  const modal = useMemo(() => (
      <BaseModal
        className='confirm-registration'
        isOpen={isOpen}
        onClose={closeModal}
      >
        <Modal {...props} closeModal={closeModal}/>
      </BaseModal>
  ), [isOpen, closeModal, props]);

  return {
    openModal,
    closeModal,
    modal,
    isOpen,
  };
};

export default useModal;