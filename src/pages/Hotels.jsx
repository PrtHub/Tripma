import { bed, holes, maldivs, mongolia, morocco, wall } from "../assets/images"
import { PlacesCard } from "../container"


const Hotels = () => {
  return (
    <>
    <div className=" px-8 flex flex-col gap-7 mt-10">
    <div className="flex items-start justify-start">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Find best <span className="text-[#54cdb7]">places to stay</span>
          </p>
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
    </>
  )
}

export default Hotels