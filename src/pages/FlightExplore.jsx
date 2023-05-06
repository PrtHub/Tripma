import { Link } from "react-router-dom";
import { FlightChoose, SelectDetails } from "../components";
import { PlacesCard } from "../container";
import { right } from "../assets/icons";
import { bed, holes, maldivs, mongolia, morocco, wall } from "../assets/images";

const FlightExplore = () => {
  return (
    <>
      <div className="px-8 w-full flex flex-col">
        <div className="mt-10">
          <SelectDetails />
        </div>
        <div className="mt-16">
          <FlightChoose />
        </div>
        <div className="mt-20 flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
              Find{" "}
              <span className="text-[#54cdb7]"> places to stay</span> in japan
            </p>
            <Link
              to="/hotels"
              className="flex items-start justify-center gap-1"
            >
              <p className="text-[#A1B0CC] text-sm md:text-lg">All</p>
              <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
          <div className="flex gap-16 flex-wrap items-start ">
            <PlacesCard
              image={bed}
              name="Hotel Kaneyamaen and Bessho SASA"
              desc="Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner."
            />
            <PlacesCard
              image={wall}
              name="HOTEL THE FLAG 大阪市"
              desc="Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street."
            />
            <PlacesCard
              image={holes}
              name="9 Hours Shinjuku"
              desc="Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!"
            />
          </div>
        </div>
        
        
      </div>
    </>
  );
};

export default FlightExplore;
