import { FlightDeals, Hero } from "../components"
import Places from "../components/Places"


const Flights = () => {
  return (
    <>
    <div className="mt-[70px]">
     <Hero/>
    </div>
    <div className="mt-[40px]">
      <FlightDeals/>
    </div>
    <div className="mt-[60px]">
     <Places/>
    </div>
    </>
  )
}

export default Flights