import { departure, arrival, calendar, person } from "../assets/icons";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useState } from "react";

const SelectDetails = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    minor: 0,
  });

  const handleOptions = (name, oparetion) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: oparetion === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="lg:w-[872px] w-full flex flex-col gap-10">
          <div className="flex w-full h-12 lg:flex-row items-center flex-col  shadowCard relative ">
            <div className="flex w-full lg:w-[173.92px] h-full justify-start items-center border-[1px] border-[#CBD4E6] p-2 lg:rounded-l-[4px]">
              <img src={departure} alt="departure" />
              <input
                type="text"
                placeholder="SFO"
                className="outline-none border-none ml-2 placeholder:text-[#7C8DB0] placeholder:text-sm placeholder:leading-6"
              />
            </div>

            <div className="flex w-full lg:w-[173.92px] h-full justify-start items-center border-[1px] border-[#CBD4E6] p-2">
              <img src={arrival} alt="departure" />
              <input
                type="text"
                placeholder="NRT"
                className="outline-none border-none ml-2 placeholder:text-[#7C8DB0] placeholder:text-sm placeholder:leading-6"
              />
            </div>

            <div className="flex w-full  h-full justify-start items-center border-[1px] border-[#CBD4E6] p-2">
              <img src={calendar} alt="calendar" />
              <span
                className="text-[#7C8DB0] text-sm leading-6 ml-2 cursor-pointer"
                onClick={() => setOpenDate(!openDate)}
              >
                {openDate
                  ? `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                      date[0].endDate,
                      "dd/MM/yyyy"
                    )}`
                  : "Depart to Return"}
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
              <span
                className="text-[#7C8DB0] text-sm leading-6 ml-2 cursor-pointer"
                onClick={() => setOpenOptions(!openOptions)}
              >
                {`${options.adult} Adult - ${options.minor} Minor `}
              </span>
              {openOptions && (
                <div className="w-52 h-fit flex flex-col gap-4 rounded-md bg-white shadowCard absolute lg:top-[70px] top-64 p-4 z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[#7C8DB0] text-base leading-6">
                      Adults:
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        className="border-2 border-[#605DEC] px-2 text-[#7C8DB0] disabled:cursor-not-allowed"
                        onClick={() => handleOptions("adult", "d")}
                        disabled={options.adult <= 1}
                      >
                        -
                      </button>
                      <span className="text-[#7C8DB0]">{options.adult}</span>
                      <button
                        className="border-2 border-[#605DEC] px-2 text-[#7C8DB0]"
                        onClick={() => handleOptions("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#7C8DB0] text-base leading-6">
                      Minors:
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        className="border-2 border-[#605DEC] px-2 text-[#7C8DB0] disabled:cursor-not-allowed"
                        onClick={() => handleOptions("minor", "d")}
                        disabled={options.minor <= 0}
                      >
                        -
                      </button>
                      <span className="text-[#7C8DB0]">{options.minor}</span>
                      <button
                        className="border-2 border-[#605DEC] px-2 text-[#7C8DB0]"
                        onClick={() => handleOptions("minor", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full lg:w-[96px] ">
              <button className="w-full bg-[#605DEC] text-[#FAFAFA] text-lg leading-6 h-[48px] px-5   lg:rounded-r-[4px]">
                Search
              </button>
            </div>
          </div>

          {/* Select section */}

          <div className="flex flex-wrap items-center  justify-start gap-3 mt-44 lg:mt-1 ">
            <select
              name="price"
              id="max-price"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="max-price" className="">
                Max price
              </option>
              <option value="$100-300">$100-300</option>
              <option value="$300-600">$300-600</option>
              <option value="$600-1000">$600-1000</option>
            </select>
            <select
              name="shops"
              id="shops"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="shops" className="">
                Shops
              </option>
              {/* <option value="$100-300$">$100-300$</option>
            <option value="$300-600$">$300-600$</option>
            <option value="$600-1000$">$600-1000$</option> */}
            </select>
            <select
              name="times"
              id="times"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="times" className="">
                Times
              </option>
              <option value="7 AM - 4 PM">7 AM - 4 PM</option>
              <option value="8 AM - 12 PM">8 AM - 12 PM</option>
              <option value="6 PM - 10 PM">6 PM - 10 PM</option>
            </select>
            <select
              name="airlines"
              id="airlines"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="airlines" className="">
                Airlines
              </option>
              <option value="Japan">Japan</option>
              <otion value="Hawai">Hawai</otion>
              <option value="Dubai">Dubai</option>
            </select>
            <select
              name="class"
              id="class"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="class" className="">
                Select Class
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <select
              name="price"
              id="max-price"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="max-price" className="">
                more
              </option>
              {/* <option value="$100-300$">$100-300$</option>
            <option value="$300-600$">$300-600$</option>
            <option value="$600-1000$">$600-1000$</option> */}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDetails;
