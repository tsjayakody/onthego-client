import React from 'react';
import ContactUsDetails from './contact-us/ContactUsDetails';
import ContactUsForm from './contact-us/ContactUsForm';
import NewsLetter from './contact-us/NewsLetter';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';

function ContactUs() {

  return (
    <BackgroundContainer>
      <div className='flex flex-col h-screen'>
        <div className='py-1'>
          <Topbar />
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div className='md:ml-[61px]'>
            <ContactUsDetails />
            <div className='bg-#2F2566 md:bg-#110E1F flex-auto h-3/5 rounded-t-60 lg:w-[1100px]'>
              <div className='bg-#2F2566 md:bg-#110E1F pt-[63px] pb-[80px] lg:pb-[100px] flex-col rounded-t-60'>
                <h4 className='text-#FFFFFF text-[14px] uppercase ml-[26px] md:ml-[0px]'>get in touch</h4>
                <ContactUsForm />
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
      </div>


    </BackgroundContainer>
  );
}

export default ContactUs;
