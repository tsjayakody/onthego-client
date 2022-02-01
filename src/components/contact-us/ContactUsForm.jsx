import React from 'react';

function ContactUsForm() {
    const namePlaceHolder = 'Enter Your Name';
    const emailPlaceHolder = 'Enter Your Email';
    const messagePlaceHolder = 'Enter Your Message';

    return (
        <div className='pb-[80px]'>
            <form className='pt-[12px] pb-[50px] relative'>
                {/* name */}
                <div className="mb-[13px]">
                    <input type="email" id="email" className="bg-#2F2566 border border-#453598 text-#666666 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={namePlaceHolder} />
                </div>
                {/* email */}
                <div className="mb-[13px]">
                    <input type="password" id="password" className="bg-#2F2566 border border-#453598 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={emailPlaceHolder} />
                </div>
                <div className='mb-[6px]'>
                    <textarea name="message" id="message" cols="10" rows="4" className='bg-#2F2566 border border-#453598 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder={messagePlaceHolder}></textarea>
                </div>
                <div className='absolute right-0'>
                <button type="submit" className="h-[45px] w-[180px] px-[34px] py-[9px] text-#FFFFFF bg-#282246 text-[14px] text-center">Send Episodes</button>
                </div>
            </form>
        </div>
    );
}

export default ContactUsForm;
