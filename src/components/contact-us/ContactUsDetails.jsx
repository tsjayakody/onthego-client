import React from 'react';
import registerImage from '../assets/contactus-register-image.png';
import sendepisodeImage from '../assets/contactus-sendepisode-image.png';
import useRipple from "use-ripple-hook";

function ContactUsDetails() {

  const contactUsContent = 'The quality is generally very high but some efforts can still be hit and miss with dozens of podcasts popping up around the same themes or TV shows.';

  const onRegisterClick = () => { console.log('register button pressed'); }
  const onSendEpisodeClick = () => { console.log('send episode buttton pressed'); }

  const [ripple1, event1] = useRipple();
  const [ripple2, event2] = useRipple();

  return (
    <div className='flex-auto h-2/5 md:mt-[50px]'>
      <div className='flex'>
        <div className='flex-col pr-[31px] pt-[67px]'>
          <h5 className='text-[14px] text-#FFFFFF uppercase pb-[17px]'>GET IN TOUCH</h5>
          <h3 className='text-#FFFFFF text-[24px] capitalize pb-[20px]'>Contact Us</h3>
          <p className='text-#FFFFFF text-[15px] text-justify pb-[32px] md:w-[398px] md:text-justify'>{contactUsContent}</p>

          <div className='flex justify-between pb-[50px] md:w-[510px]'>
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
        <div className='hidden md:w-[388px] md:h-[179px] bg-transparent md:mt-[90px] md:flex md:justify-between'>
          <div className='md:h-[179px] md:w-[150px]'>
            <img src={registerImage} alt="registerImage" className='h-[141px] w-[150px] object-fill' />
            <button ref={ripple1} onMouseDown={event1} className='text-#FFFFFF text-[14px] text-center w-[150px] h-[38px] m-auto bg-#282246' onClick={onRegisterClick}>Register</button>
          </div>
          <div className='md:h-[179px] md:w-[150px]'>
            <img src={sendepisodeImage} alt="registerImage" className='h-[141px] w-[150px] object-fill' />
            <button ref={ripple2} onMouseDown={event2} className='text-#FFFFFF text-[14px] text-center w-[150px] h-[38px] m-auto bg-#282246' onClick={onSendEpisodeClick}>Send Episodes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsDetails