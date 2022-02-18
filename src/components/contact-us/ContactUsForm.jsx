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

    //* button submit validation here
    const handleButtonSubmit = () => {
        //? name input validation here
        if(name === ''){
            setNameErrorMessage('');
        }else if(name.length <10){
            setNameErrorMessage('Name Must be at least 10 Characters long');
        }else{
            setNameErrorMessage('');
        }

        //? email validation here
        if(email === ''){
            setNameErrorMessage('');
        }else if(email.length<10){
            setEmailErrorMessage('Please Enter a valid Email address');
        }else{
            setEmailErrorMessage('');
        }

        //? message validation here
        if(message === ''){
            setMessageErrorMessage('');
        }else if(message.length<10){
            setMessageErrorMessage('Message must be at least ');
        }else{
            setMessageErrorMessage('');
        }
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
                    <butt  on
                        disabled={btnDisabled}
                        ref={ripple}
                        onMouseDown={event}
                        type="submit"
                        className="h-[45px] w-[180px] px-[34px] py-[9px] text-#FFFFFF bg-#282246 text-[14px] text-center">
                        Send Episodes
                    </butt>
                </div>
            </form>
        </div>
    );
}

export default ContactUsForm;
