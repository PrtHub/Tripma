import { Link } from "react-router-dom";
import { Star } from "../assets/icons";
import { Anthony, Yifei, kaori } from "../assets/images";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            What <span className="text-[#605DEC]">Tripma</span> users are saying
          </h1>
        </div>

        <div className="flex flex-wrap gap-12 justify-start">

         <div className="flex-1 flex max-w-[410px] gap-2">
          <div className="w-[200px] h-[48px]">
            <img src={Yifei} alt="" className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#6E7491] text-base">
            <h1>Yifei Chen</h1>
            <p>Seoul, South Korea | April 2019</p>
            </div>
            <div className="flex items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <p className="text-[#27273F] text-base">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me <span className="text-[#605DEC]"> read more...</span></p>
          </div>
         </div>

         <div className="flex-1 flex max-w-[410px] gap-2">
          <div className="w-[200px] h-[48px]">
            <img src={kaori} alt="" className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#6E7491] text-base">
            <h1>Kaori Yamaguchi</h1>
            <p>Honolulu, Hawaii | February 2017</p>
            </div>
            <div className="flex items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <p className="text-[#27273F] text-base">My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and <span className="text-[#605DEC]"> read more...</span></p>
          </div>
         </div>

         <div className="flex-1 flex max-w-[410px] gap-2">
          <div className="w-[200px] h-[48px]">
            <img src={Anthony} alt="" className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#6E7491] text-base">
            <h1>Anthony Lewis</h1>
            <p>Berlin, Germany | April 2019</p>
            </div>
            <div className="flex items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <p className="text-[#27273F] text-base">When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for <span className="text-[#605DEC]"> read more...</span></p>
          </div>
         </div>

        </div>
        <Link to='/hotels' className="flex items-center justify-center mt-10">
           <button className="bg-[#605DEC] text-[#FAFAFA] px-5 py-3 outline-none border-none rounded">Explore more stays</button>
        </Link>
      </div>
    </>
  );
};

export default Testimonials;
