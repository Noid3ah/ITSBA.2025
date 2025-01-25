import { useEffect, useRef } from 'react';
import Button from './Button';

const Modal = ({ isOpen, closeModal }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      // Use the native showModal method
      dialog?.showModal();
    } else {
      // Ensure that dialog.close() is only called if modal is truly open
      dialog?.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    closeModal(); // Update the state when closing modal
  };

  return (
    <dialog
      ref={dialogRef}
      className='dialog p-6 rounded-3xl border flex flex-col  w-11/12 max-w-[400px] min-h-[200px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
      onClose={handleClose} // Ensure closeModal is called on dialog close
    >
      <div className='flex-1 flex justify-center items-center min-h-[200px]'>
        <p className='text-zinc-950/70'>Feature not available. 😛</p>
      </div>
      <hr className='w-full mx-auto border-zinc-950/10 mb-6' />
      <Button
        className={`h-14 border bg-slate-300 hover:bg-slate-400 hover:text-white`}
        onClick={handleClose}
      >
        Close
      </Button>
    </dialog>
  );
};

export default Modal;
