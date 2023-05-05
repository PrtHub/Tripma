import { FlightChoose, SelectDetails } from "../components"


const FlightExplore = () => {
  return (
    <>
    <div className="px-8 w-full flex flex-col">
        <div className="mt-10">
         <SelectDetails/>
        </div>   
        <div className="mt-16">
          <FlightChoose/>
        </div>   
    </div>
    </>
  )
}

export default FlightExplore