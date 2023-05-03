import { departure, arrival, calendar, person } from "../assets/icons";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <header className="flex flex-col items-center relative w-full h-[529px] px-7 py-4">
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl text-center leading-[55px] sm:leading-[70px] md:leading-[90px] text-gradient">
            It's more than <br /> just a trip
          </h1>
        </div>
    
        <div className="flex w-full max-w-[1024px] lg:h-[65px] lg:flex-row items-center flex-col mt-20  shadowCard relative ">
          <div className="flex w-full h-full justify-start items-center border-[1px] border-[#CBD4E6] p-2 lg:rounded-l-[4px]">
            <img src={departure} alt="departure" />
            <input
              type="text"
              placeholder="From where?"
              className="outline-none border-none ml-2 placeholder:text-[#7C8DB0] placeholder:text-base placeholder:leading-6"
            />
          </div>

          <div className="flex w-full h-full justify-start items-center border-[1px] border-[#CBD4E6] p-2">
            <img src={arrival} alt="departure" />
            <input
              type="text"
              placeholder="Where to?"
              className="outline-none border-none ml-2 placeholder:text-[#7C8DB0] placeholder:text-base placeholder:leading-6"
            />
          </div>

          <div className="flex w-full h-full justify-start items-center border-[1px] border-[#CBD4E6] p-2">
            <img src={calendar} alt="calendar" />
            <span
              className='text-[#7C8DB0] text-base leading-6 ml-2 cursor-pointer'
              onClick={() => setOpenDate(!openDate)}
            >
           {openDate ? (
               `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`
           ) : 'Depart to Return'}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-64 lg:top-20 z-10 "
              />
            )}
          </div>

          <div className="flex w-full h-full justify-start items-center border-[1px] border-[#CBD4E6]  p-2">
            <img src={person} alt="person" />
            <span className="text-[#7C8DB0] text-base leading-6 ml-2 cursor-pointer">
              1 adult
            </span>
          </div>
          <div className="w-full ">
          <button className="w-full bg-[#605DEC] text-[#FAFAFA] text-lg leading-6 h-[45px] lg:h-[65px] px-5   lg:rounded-r-[4px]">
            Search
          </button>
        </div>
        </div>

       

      </header>
    </>
  );
};

export default Hero;
