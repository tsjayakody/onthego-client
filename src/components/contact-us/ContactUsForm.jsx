import React from 'react';
import useRipple from "use-ripple-hook";
import { useState } from 'react';
import ContactUsErrorMessage from './ContactUsErrorMessage';

function ContactUsForm() {

    //! form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //! from validation message states
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(true)

    const namePlaceHolder = 'Enter Your Name';
    const emailPlaceHolder = 'Enter Your Email';
    const messagePlaceHolder = 'Enter Your Message';

    const [ripple, event] = useRipple();

    return (
        <div className='pb-[80px] lg:w-[838px] mx-[26px] md:ml-[0px]'>
            <form className='pt-[12px] pb-[50px]'>
                {/* name */}
                <div className='lg:flex z-0'>
                    <div className='flex-col'>
                        <div className="mb-[13px]">
                            <input
                                type="email"
                                id="email"
                                className=" bg-#2F2566 md:bg-#110E1F border border-#453598 text-#666666 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full lg:w-[386px] lg:h-[32.52px] h-[40px] p-2.5 "
                                placeholder={namePlaceHolder}
                            />
                        </div>
                        <ContactUsErrorMessage errorMessage={nameErrorMessage} />
                    </div>
                    <div className='flex-col'>
                        <div className="mb-[13px]">
                            <input
                                type="password"
                                id="password"
                                className="bg-#2F2566 md:bg-#110E1F border border-#453598 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-[386px] lg:h-[32.52px] h-[40px] p-2.5 "
                                placeholder={emailPlaceHolder}
                            />
                        </div>
                        <ContactUsErrorMessage errorMessage={emailErrorMessage} />
                    </div>
                </div>
                <div className='mb-[6px] md:mb-[17px] md:max-w-[792px] '>
                    <div className='mb-[10px]'>
                        <textarea
                            placeholder={messagePlaceHolder}
                            name="message"
                            id="message"
                            cols="10"
                            rows="4"
                            className='bg-#2F2566 md:bg-#110E1F border border-#453598 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'>
                        </textarea>
                    </div>
                    <ContactUsErrorMessage errorMessage={messageErrorMessage} />
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
