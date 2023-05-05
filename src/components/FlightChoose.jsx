import { useState } from "react";
import { Pricehistory, map } from "../assets/images";
import {
  delta,
  france,
  hawaiian,
  japan,
  quantas,
  united,
} from "../assets/logo";
import { FlightCard, PriceDetails } from "../container";

const FlightChoose = () => {
  const [priceShown, setPriceShow] = useState(true);

  return (
    <>
      <div className="flex lg:flex-row flex-col items-start justify-between gap-16 ">
        <div className="w-full lg:w-[872px] h-full flex flex-col gap-5">
          <div className="flex items-start justify-start">
            <h1 className="text-[#6E7491]  text-lg leading-6 font-semibold">
              Choose a <span className="text-[#605DEC]">departing </span>/{" "}
              <span className="text-[#605DEC]">returning </span>flight
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-start  border-[1px] border-[#E9E8FC] rounded-xl">
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC] hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
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
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={japan}
                duration="18h 22m"
                name="Japan Airlines"
                time="7:35AM - 12:15PM"
                stop="1 stop"
                hnl="50m in HKG"
                price="$663"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={delta}
                duration="18h 52m"
                name="Delta Airlines"
                time="9:47 AM - 4:15 PM"
                stop="1 stop"
                hnl="4h 05m in ICN"
                price="$756"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={quantas}
                duration="15h 45m"
                name="Qantas Airlines"
                time="10:55 AM - 8:15 PM"
                stop="Nonstop"
                price="$839"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={united}
                duration="16h 05m"
                name="United Airlines"
                time="11:15 AM - 7:45 PM"
                stop="Nonstop"
                price="$837"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={france}
                duration="18h 30m"
                name="France Airlines"
                time="10:15 AM - 8:45 PM"
                stop="Nonstop"
                price="$964"
                trip="round trip"
              />
            </div>
          </div>
          <div className="w-full lg:mt-12">
            <img src={map} alt="map" className="w-full h-full object-cover" />
          </div>
        </div>

        {priceShown && (
          <div className="flex flex-col gap-10 ">
            <div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[#7C8DB0] font-semibold text-lg leading-6">
                  <span className="text-[#6E7491]"> Price grid</span> (flexible
                  dates)
                </h1>
              </div>
              <div className="mt-5 w-full sm:w-[397px] h-[247px] flex flex-col border-[1px] border-[#E9E8FC] rounded-xl  ">
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="w-[45px] sm:w-[65px] h-full text-center border-r-[1px]  border-[#E9E8FC]"></h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/7</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/8</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/9</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/10</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/11</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[#6E7491] font-semibold text-lg leading-6">
                  Price history
                </h1>
              </div>
              <div className="w-full h-full">
                <img
                  src={Pricehistory}
                  alt="Price-history"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="flex items-center justify-start gap-3">
                <h1 className="text-[#6E7491] font-semibold text-lg leading-6">
                  Price rating
                </h1>
                <button className="bg-[#5CD6C0] px-2 py-1 rounded text-white font-semibold">
                  Buy soon
                </button>
              </div>
              <div className="flex flex-col items-start justify-start max-w-sm gap-2 px-3">
                <p className="text-[#6E7491] ">
                  We recommend booking soon. The average cost of this flight is
                  $750, but could rise 18% to $885 in two weeks.
                </p>
                <p className="text-[#A1B0CC] ">
                  Tripma analyzes thousands of flights, prices, and trends to
                  ensure you get the best deal.
                </p>
              </div>
            </div>
          </div>
        )}

        {!priceShown && (
          <div className="mt-10">
            <PriceDetails />
          </div>
        )}
      </div>
    </>
  );
};

export default FlightChoose;
