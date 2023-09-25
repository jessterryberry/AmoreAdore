import React from 'react';
import Button from "./Button";

const Modal = ({ closeModal }) => {
  const handleClose = () => {
    closeModal();
  }
  return (
    <>
    <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t font-montserrat">
            <h3 className="text-3xl font-semibold ">
                Success!
            </h3>
            <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
            >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
                </span>
            </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed font-montserrat">
                Your email has been received. Expect to receive a response in 2-3 business days.
            </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <div onClick={handleClose}>
                <Button label="Close" fullWidth />
              </div>
            </div>
        </div>
        </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;