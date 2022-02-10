import React from 'react';
import ContactUsDetails from './contact-us/ContactUsDetails';
import ContactUsForm from './contact-us/ContactUsForm';
import NewsLetter from './contact-us/NewsLetter';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';

function ContactUs() {

  return (
    <BackgroundContainer>
      <Topbar>
        <p className='text-#FFFFFF text-[10px]'>This is search bar container</p>
      </Topbar>
      <ContactUsDetails/>
      <div className='bg-#2F2566 md:bg-#110E1F flex-auto h-3/5 rounded-t-60 md:w-[1100px]'>
        <div className='bg-#2F2566 md:bg-#110E1F pt-[63px] px-[26px] pb-[100px] flex-col rounded-t-60'>
          <h4 className='text-#FFFFFF text-[14px] uppercase'>get in touch</h4>
          <ContactUsForm />
          <NewsLetter />
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default ContactUs;
