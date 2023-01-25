import { useState, useCallback, useMemo } from 'react';
import { BaseModal } from 'components';

const useModal = (Modal) => {
  const [isOpen, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState(null)

  const openModal = useCallback((openModalProps) => {
    if(openModalProps) {
      setModalProps(openModalProps);
    }
    return setOpen(true)
  }, [setOpen]);

  const closeModal = useCallback(() => (
    setOpen(false)
  ), [setOpen]);

  const modal = useMemo(() => (
      <BaseModal
        className='confirm-registration'
        isOpen={isOpen}
        onClose={closeModal}
      >
        <Modal {...modalProps} closeModal={closeModal}/>
      </BaseModal>
  ), [isOpen, closeModal, modalProps]);

  return {
    openModal,
    closeModal,
    modal,
    isOpen,
  };
};

export default useModal;