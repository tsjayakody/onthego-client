import React from 'react';
import useRipple from "use-ripple-hook";

function ContactUsForm() {
    const namePlaceHolder = 'Enter Your Name';
    const emailPlaceHolder = 'Enter Your Email';
    const messagePlaceHolder = 'Enter Your Message';

    const [ripple, event] = useRipple();

    return (
        <div className='pb-[80px] md:w-[838px]'>
            <form className='pt-[12px] pb-[50px]'>
                {/* name */}
                <div className='md:flex z-0'>
                    <div className="mb-[13px] md:mr-[20px]">
                        <input type="email" id="email" className=" bg-#2F2566 md:bg-#110E1F border border-#453598 text-#666666 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full md:w-[386px] md:h-[32.52px] h-[40px] p-2.5 " placeholder={namePlaceHolder} />
                    </div>
                    {/* email */}
                    <div className="mb-[13px]">
                        <input type="password" id="password" className="bg-#2F2566 md:bg-#110E1F border border-#453598 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full md:w-[386px] md:h-[32.52px] h-[40px] p-2.5 " placeholder={emailPlaceHolder} />
                    </div>
                </div>
                <div className='mb-[6px] md:mb-[17px] md:w-[792px]'>
                    <textarea name="message" id="message" cols="10" rows="4" className='bg-#2F2566 md:bg-#110E1F border border-#453598 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5' placeholder={messagePlaceHolder}></textarea>
                </div>
                <div className='w-full relative'>
                    <div className='absolute right-0 md:mr-[46px]'>
                        <button ref={ripple} onMouseDown={event} type="submit" className="h-[45px] w-[180px] px-[34px] py-[9px] text-#FFFFFF bg-#282246 text-[14px] text-center">Send Episodes</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactUsForm;
