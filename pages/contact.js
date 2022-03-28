import ContactUsForm from "../components/shared/ContactUsForm";
import NewsLetter from "../components/shared/NewsLetter";

export default function Contact() {
  return (
    <div className="flex h-screen">
      <div className="overflow-y-scroll scrollbar-hide h-screen w-full mx-[15px] lg:mx-[60px]">

        {/* header */}
        <div className="flex space-x-[250px] mt-[120px] items-center">
          {/* header detail */}
          <div className="">
            <h1 className="text-white text-[14px] font-[500] uppercase">GET IN TOUCH</h1>
            <h1 className="mt-[7px] text-white font-semibold text-[24px]">Contact Us</h1>
            <p className="mt-[14px] text-[#C4C4C4] text-[15px] font-[400] max-w-[350px]">The quality is generally very high but some efforts can still be hit and miss with dozens of podcasts popping up around the same themes or TV shows.</p>
            <div className="mt-[60px] flex space-x-[52px]">
              <div className="space-y-[30px]">
                <h1 className="text-[#00D2CB] text-[16px] font-semibold">General Office</h1>
                <div className="space-y-[3] text-[#C4C4C4] text-[14px] font-[400]">
                  <p>Derana Macro Entertainment (Pvt) Ltd</p>
                  <p>No. 320, T.B. Jayah Mawatha,</p>
                  <p>Colombo 10.</p>
                  <p>Sri Lanka.</p>
                </div>
              </div>

              <div className="space-y-[30px]">
                <h1 className="text-[#00D2CB] text-[16px] font-semibold">Get In Touch</h1>
                <div className="space-y-[3] text-[#C4C4C4] text-[14px] font-[400]">
                  <p>contact@onthego.lk</p>
                  <p>Ph: (+94)115-300800</p>
                </div>
              </div>
            </div>
          </div>

          {/* header login & register */}
          <div className="flex space-x-[88px]">

            {/* reguster */}
            <div className="h-[179px] w-[150px] bg-[#282246] cursor-pointer hover:opacity-90">
              <img src="/assets/register-cover.png" alt="" className="h-[141px] w-[150px] object-fill" />
              <div className="flex items-center justify-center h-[30px]">
                <p className="text-white text-[14px] font-[700] text-center">Register</p>
              </div>
            </div>

            {/* send-episode */}
            <div className="h-[179px] w-[150px] bg-[#282246] cursor-pointer hover:opacity-90">
              <img src="/assets/send-episode-cover.png" alt="" className="h-[141px] w-[150px] object-fill" />
              <div className="flex items-center justify-center h-[30px]">
                <p className="text-white text-[14px] font-[700] text-center">Send Episodes</p>
              </div>
            </div>


          </div>
        </div>

        {/* form */}
        <ContactUsForm/>
        <NewsLetter/>

        {/* spacer */}
        <div className="h-[180px]"></div>
      </div>
    </div>
  );
}