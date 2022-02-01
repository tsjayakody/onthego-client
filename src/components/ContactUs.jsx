import React from 'react';
import ContactUsForm from './contact-us/ContactUsForm';
import NewsLetter from './contact-us/NewsLetter';

function ContactUs() {


  const contactUsContent = 'The quality is generally very high but some efforts can still be hit and miss with dozens of podcasts popping up around the same themes or TV shows.';

  return (
    <div className='bg-#110E1F flex-col flex-grow h-full w-full overflow-y-auto'>
      <div className='flex-auto h-2/5'>
        <div className='flex-col pl-[26px] pr-[31px] pt-[67px]'>
          <h5 className='text-[14px] text-#FFFFFF uppercase pb-[17px]'>GET IN TOUCH</h5>
          <h3 className='text-#FFFFFF text-[24px] capitalize pb-[20px]'>Contact Us</h3>
          <p className='text-#FFFFFF text-[15px] text-justify pb-[32px]'>{contactUsContent}</p>

          <div className='flex justify-between pb-[50px]'>
            <div className='flex-col'>
              <h4 className='text-#00D2CB text-[16px] text-left pb-[17px]'>General Office</h4>
              <div className='text-#C4C4C4 text-[12px] text-left'>
                <p>Derana Macro Entertainment</p>
                <p>(Pvt) Ltd</p>
                <p>No. 320, T.B. Jayah Mawatha,</p>
                <p>Colombo 10.</p>
                <p>Sri Lanka.</p>
              </div>
            </div>
            <div className='flex-col'>
              <h4 className='text-#00D2CB text-[16px] text-left pb-[17px]'>General Office</h4>
              <div className='text-#C4C4C4 text-[12px] text-left'>
                <p>contact@onthego.lk</p>
                <p>Ph: (+94) 115-300800</p>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className='bg-#2F2566 flex-auto h-3/5 rounded-t-60'>
        <div className='bg-#2F2566 pt-[63px] px-[26px] pb-[100px] flex-col rounded-t-60'>
          <h4 className='text-#FFFFFF text-[14px] uppercase'>get in touch</h4>
          {/* testing contact us form here */}
          <ContactUsForm />
          {/* newsletter component here */}
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
