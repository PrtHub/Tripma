import {  kenya, seoul, shangai, sydney, temple } from "../assets/images"
import { FlightDealsCard } from "../container"


const Packages = () => {
  return (
    <>
    <div className="px-8 flex flex-col gap-7 mt-10">
    <div className="flex items-start justify-start">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Find your next adventure <br className=" block sm:hidden " /> with
            these <span className="text-[#605DEC]">flight deals</span>
          </p>
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
           <FlightDealsCard
            image={kenya}
            title="Nairobi, "
            name="Kenya"
            price="$1,248"
            des="Dubbed the Safari Capital of the World"
          />
          <FlightDealsCard
            image={seoul}
            title="Seoul, "
            name="South Korea"
            price="$589"
            des="This modern city is a traveler’s dream"
          />
        </div>
    </div>
    </>
  )
}

export default Packages