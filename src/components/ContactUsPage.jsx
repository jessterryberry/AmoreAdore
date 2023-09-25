import Button from "./Button";
import React, { useState } from 'react';
import Modal from "./Modal";

const ContactUsPage = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <section id="contact-us" className="max-container max-sm:mt-12 padding">
                <div id="contact-box" className="flex flex-col items-center justify-center w-full rounded-[20px] shadow-3xl px-10 py-16">
                    <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold mb-4">Contact Us</h3>
                    <div className="w-full max-sm:flex max-sm:flex-col items-center gap-5 p-5 mb-6 border border-slate-gray rounded-full">
                        <input type="text" placeholder="Name" className="input w-full bg-seasalt" />
                    </div>
                    <div className="w-full max-sm:flex max-sm:flex-col items-center gap-5 p-5 mb-6 border border-slate-gray rounded-full">
                        <input type="text" placeholder="Email" className="input w-full bg-seasalt" />
                    </div>
                    <div className="w-full max-sm:flex max-sm:flex-col items-center gap-5 p-5 mb-6 border border-slate-gray rounded-full">
                        <textarea rows="3" placeholder="Message" className="input w-full bg-seasalt" />
                    </div>
                    <div className="flex max-sm:justify-end items-center max-sm:w-full">
                       
                        <div onClick={() => setShowModal(true)}>
                            <Button label="Send" fullWidth />
                        </div>

                        {showModal ? (
                            <Modal closeModal={() => setShowModal(false)}/>
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUsPage