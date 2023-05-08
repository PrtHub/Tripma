import { useNavigate } from "react-router-dom";
import { right } from "../assets/icons";
import PlacesCard from "../container/PlacesCard";
import { maldivs, mongolia, morocco } from "../assets/images";

const Places = () => {

  const navigate = useNavigate()

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/hotels')
    
  };
  return (
    <>
      <div className="px-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Explore unique
            <span className="text-[#54cdb7]"> places to stay</span>
          </p>
          <div className="flex items-start justify-center gap-1 cursor-pointer" onClick={handleSeeAllClick}>
            <p className="text-[#A1B0CC] text-sm md:text-lg">All</p>
            <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <PlacesCard
            image={maldivs}
            title="Stay among the atolls in"
            name="Maldives"
            desc="From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
          />
          <PlacesCard
            image={morocco}
            title="Experience the Ourika Valley in"
            name="Morocco"
            desc="Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
          />
          <PlacesCard
            image={mongolia}
            title="Live traditionally in "
            name="Mongolia"
            desc="Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
          />
        </div>
      </div>
    </>
  );
};

export default Places;
