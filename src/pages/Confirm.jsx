import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FlightCard } from "../container";
import { hawaiian } from "../assets/logo";
import { creditCard } from "../assets/icons";
import { map1 } from "../assets/images";
import { ConfirmShop } from "../components";

const Confirm = () => {
    const[close, setClose] = useState(true)

  return (
    <>
    <div className="px-8 w-full h-full flex lg:flex-row flex-col justify-between items-start mt-20 gap-10 ">
       <div className="w-full lg:w-[756px] flex flex-col items-start gap-16">
          { close && (
            <div className="w-full lg:w-[704px] h-[64px] border-2 border-[#007B65] bg-[#EAFFFB] rounded  p-2 hidden md:flex items-center justify-center  ">
            <p className="w-full h-full flex items-center justify-start text-[#007B65] text-xs sm:text-base">Your flight has been booked successfully! Your confirmation number is #381029404387</p>
            <MdOutlineClose className="text-[#52527A] font-medium cursor-pointer" onClick={() => setClose(false)}/>
          </div>
          )}

          <div className=" w-full flex flex-col items-start justify-start gap-2">
            <h1 className="text-[#605DEC] text-xl sm:text-2xl font-bold">Bon voyage, Sophia!</h1>
            <p className="text-[#6E7491] text-base sm:text-lg font-semibold">Confirmation number: #381029404387</p>
            <p className="text-[#7C8DB0] text-sm sm:text-base font-medium">Thank you for booking your travel with Tripma! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in <span className="text-[#605DEC]"> My trips.</span></p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
             <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">Flight summary</h1>
             <div className="w-full flex flex-col items-start gap-2 ">
             <p className="text-[#7C8DB0] text-base sm:text-lg font-semibold">Departing February 25th, 2023</p>
             <div
              className="w-full cursor-pointer border-[1px] border-[#E9E8FC] hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
            >
              <FlightCard
                img={hawaiian}
                duration="16h 45m"
                name="Hawaiian Airlines"
                time="7:00AM - 4:15PM"
                stop="1 stop"
                hnl="2h 45m in HNL"
                price="$624"
                trip="round trip"
              />
            </div>
            <p className="text-[#7C8DB0] text-sm sm:text-base font-normal">Seat 9F (economy, window), 1 checked bag</p>
             </div>
             <div className="w-full flex flex-col items-start gap-2 mt-8">
             <p className="text-[#7C8DB0] text-base sm:text-lg font-semibold">Arriving March 21st, 2023</p>
             <div
              className="w-full cursor-pointer border-[1px] border-[#E9E8FC] hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
            >
              <FlightCard
                img={hawaiian}
                duration="16h 45m"
                name="Hawaiian Airlines"
                time="7:00AM - 4:15PM"
                stop="1 stop"
                hnl="2h 45m in HNL"
                price="$624"
                trip="round trip"
              />
            </div>
            <p className="text-[#7C8DB0] text-sm sm:text-base font-normal">Seat 4F (business, window), 1 checked bag</p>
             </div>
          </div>
          <div className="w-full flex flex-col items-start gap-5">
          <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">Price breakdown</h1>
          <div className="w-full h-full sm:w-[400px] flex flex-col items-start gap-3 ">
             <div className="flex items-center justify-between w-full text-[#6E7491] text-sm sm:text-base gap-3" >
                <p>Departing Flight</p>
                <p>$251.50</p>
             </div>
             <div className="flex items-center justify-between w-full text-[#6E7491] text-sm sm:text-base gap-3" >
                <p>Arriving Flight</p>
                <p>$251.50</p>
             </div>
             <div className="flex items-center justify-between w-full text-[#6E7491] text-sm sm:text-base gap-3" >
                <p>Baggage fees</p>
                <p>$0</p>
             </div>
             <div className="flex items-center justify-between w-full text-[#6E7491] text-sm sm:text-base gap-3" >
                <p>Seat upgrade (business)</p>
                <p>$199</p>
             </div>
             <div className="flex items-center justify-between w-full text-[#6E7491] text-sm sm:text-base gap-3" >
                <p>Subtotal</p>
                <p>$702</p>
             </div>
             <div className="flex items-center justify-between w-full text-[#6E7491] text-sm sm:text-base gap-3" >
                <p>Taxes (9.4%)</p>
                <p>$66</p>
             </div>
             <hr className="w-full mt-5"/>
             <div className="flex items-center justify-between w-full text-[#36374A] text-sm sm:text-base gap-3" >
                <p>Amount paid</p>
                <p>$768</p>
             </div>
             <hr className="w-full "/>
          </div>
          </div>

          <div className="w-full h-full flex flex-col items-start justify-start gap-5">
          <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">Payment method</h1>
          <div className="w-[300px] h-[188px]">
          <img src={creditCard} alt="" className="w-full h-full object-contain"/>
          </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-start gap-4">
          <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">Share your travel itinerary</h1>
          <p className="text-[#7C8DB0] text-base sm:text-lg font-normal">You can email your itinerary to anyone by entering their email address here.</p>
          <form className="w-full h-full flex flex-col items-start justify-start gap-5 mt-5">
              <input
                type="text"
                placeholder="Email address "
                className="w-full sm:w-[400px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
              <input
                type="text"
                placeholder="Email address "
                className="w-full sm:w-[400px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
              <input
                type="text"
                placeholder="Email address "
                className="w-full sm:w-[400px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
              </form>
              <div className="flex justify-center items-center mt-2">
              <button className="bg-[#605DEC] text-[#FAFAFA] text-base px-2 py-3 rounded hover:bg-white border-[1px] border-[#605DEC] hover:text-[#605DEC] transition-all duration-200">Email itinerary</button>
              </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-start gap-4">
          <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">Flight Route</h1>
          <div className="w-full h-full md:w-[750px] md:h-[400px]">
             <img src={map1} alt=""  className="w-full h-full object-contain" />
          </div>
          </div>
       </div>

       <div className="w-full sm:w-[400px] h-full flex flex-col items-start gap-28">
           <ConfirmShop/>
       </div>
    </div>
    </>
  )
}

export default Confirm