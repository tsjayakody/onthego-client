import React from 'react';
import useRipple from "use-ripple-hook";
import { useState } from 'react';
import ContactUsErrorMessage from './ContactUsErrorMessage';

function ContactUsForm() {

    //* form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //* from validation message states
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(true)

    const namePlaceHolder = 'Enter Your Name';
    const emailPlaceHolder = 'Enter Your Email';
    const messagePlaceHolder = 'Enter Your Message';

    const [ripple, event] = useRipple();

    const handleNameChange = (e) => {

        if (name === '') {
            setBtnDisabled(true);
            setNameErrorMessage(null);
        } else if (name !== '' && name.trim().length <= 10) {
            setBtnDisabled(true);
            setNameErrorMessage("Name must be at lease 10 characters long !");
        } else {
            setNameErrorMessage(null);
            setBtnDisabled(false);
        }

        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '') {
            setBtnDisabled(true);
            setEmailErrorMessage(null);
        } else if (email !== '' && regex.test(email) === false) {
            setBtnDisabled(true);
            setEmailErrorMessage("Enter a valid Email address !");
        } else {
            setBtnDisabled(false);
            setEmailErrorMessage(null);
        }

        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {

        if (message === '') {
            setBtnDisabled(true);
            setMessageErrorMessage(null);
        } else if (message !== '' && message.trim().length <= 15) {
            setBtnDisabled(true);
            setMessageErrorMessage("Message must be at least 15 characters long !")
        } else {
            setBtnDisabled(false);
            setMessageErrorMessage(null);
        }

        setMessage(e.target.value);
    }

    return (
        <div className='pb-[80px] lg:w-[838px] mx-[26px] md:ml-[0px]'>
            <form className='pt-[12px] pb-[50px]'>
                <div className='lg:flex z-0'>
                    {/* name input div */}
                    <div className='flex-col'>
                        <div className="mb-[13px] lg:mr-[20px]">
                            <input
                                type="text"
                                id="name"
                                onChange={handleNameChange}
                                value={name}
                                className=" bg-#2F2566 md:bg-#110E1F border border-#453598 text-#FFFFFF placeholder-[#666666] text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full lg:w-[386px] lg:h-[32.52px] h-[40px] p-2.5 "
                                placeholder={namePlaceHolder}
                            />
                        </div>
                        {nameErrorMessage && <ContactUsErrorMessage errorMessage={nameErrorMessage} />}
                    </div>
                    {/* email input div */}
                    <div className='flex-col'>
                        <div className="mb-[13px]">
                            <input
                                onChange={handleEmailChange}
                                value={email}
                                type="email"
                                id="email"
                                className="bg-#2F2566 md:bg-#110E1F border border-#453598 text-#FFFFFF placeholder-[#666666] text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-[386px] lg:h-[32.52px] h-[40px] p-2.5 "
                                placeholder={emailPlaceHolder}
                            />
                        </div>
                        {emailErrorMessage && <ContactUsErrorMessage errorMessage={emailErrorMessage} />}
                    </div>
                </div>
                <div className='mb-[6px] md:mb-[17px] md:max-w-[792px] '>
                    <div className='mb-[10px]'>
                        <textarea
                            onChange={handleMessageChange}
                            value={message}
                            placeholder={messagePlaceHolder}
                            name="message"
                            id="message"
                            cols="10"
                            rows="4"
                            className='bg-#2F2566 md:bg-#110E1F border border-#453598 text-#FFFFFF placeholder-[#666666] text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'>
                        </textarea>
                    </div>
                    {messageErrorMessage && <ContactUsErrorMessage errorMessage={messageErrorMessage} />}
                </div>
                <div className='w-full flex justify-end md:pr-[42px]'>
                    <button
                        disabled={btnDisabled}
                        ref={ripple}
                        onMouseDown={event}
                        type="submit"
                        className="h-[45px] w-[180px] px-[34px] py-[9px] text-#FFFFFF bg-#282246 text-[14px] text-center">
                        Send Episodes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactUsForm;
