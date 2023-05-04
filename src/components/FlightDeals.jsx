import { Link } from "react-router-dom";
import { right } from "../assets/icons";
import { msunrise, shangai, sunrise, sydney, temple } from "../assets/images";
import FlightDealsCard from "../container/FlightDealsCard";

const FlightDeals = () => {
  return (
    <>
      <div className="px-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Find your next adventure <br className=" block sm:hidden " /> with
            these <span className="text-[#605DEC]">flight deals</span>
          </p>
          <Link
            to="/packages"
            className="flex items-start justify-center gap-1"
          >
            <p className="text-[#A1B0CC] text-sm md:text-lg">All</p>
            <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <FlightDealsCard
            image={shangai}
            title="The Bund, "
            name="Shanghai"
            price="$598"
            des=" China’s most international city"
          />
          <FlightDealsCard
            image={sydney}
            title="Sydney Opera House, "
            name="Sydney"
            price="$981"
            des=" Take a stroll along the famous harbor"
          />
          <FlightDealsCard
            image={temple}
            title="Kōdaiji Temple,"
            name="Kyoto"
            price="$633"
            des=" Step back in time in the Gion district"
          />
        </div>

        <div className="w-full h-full flex flex-col dealsShadow rounded-b gap-2 ">
           <div className="w-full h-full">
             <img src={sunrise} alt="" className="w-full h-full object-cover rounded-t hidden md:block" />
             <img src={msunrise} alt="" className="w-full h-full object-cover rounded-t block md:hidden" />
           </div>
           <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4 py-3">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-[#6E7491] text-base font-medium capitalize">
            Tsavo East National Park, <span className="text-[#605DEC]">Kenya</span>
            </h1>
            <p className="text-[#6E7491] text-base font-medium">$1,248</p>
          </div>
          <p className="text-[#7C8DB0] text-sm font-normal">
          Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.
          </p>
        </div>
        </div>

      </div>
    </>
  );
};

export default FlightDeals;
