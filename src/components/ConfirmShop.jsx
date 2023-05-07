import { Link } from "react-router-dom";
import { Bessho, HotelFlag, Ryoka, fiveHole, kimono, teamLab } from "../assets/images";

const ConfirmShop = () => {
  return (
    <>
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-start justify-start gap-4">
        <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">
          Shop<span className="text-[#605DEC]"> hotels</span>
        </h1>
        <p className="text-[#7C8DB0] text-sm sm:text-base font-medium">
          Tripma partners with thousands of hotels to get you the best deal.
          Save up to 30% when you add a hotel to your trip.
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-start gap-10 mt-14">
        <div className="w-full h-[330px] flex flex-col items-start rounded-b-xl bg-white dealsShadow">
          <div className="w-full h-[247px]">
            <img
              src={Ryoka}
              alt="Ryokan"
              className="w-full h-full object-contain rounded-t-xl "
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-[#6E7491] text-base font-medium capitalize">
                Ryokan Japan
              </h1>
              <p className="text-[#6E7491] text-base font-medium">$439</p>
            </div>
            <p className="text-[#7C8DB0] text-sm font-normal">
              Enjoy views of the garden from your room
            </p>
          </div>
        </div>
        <div className="w-full h-[330px] flex flex-col items-start rounded-b-xl bg-white dealsShadow">
          <div className="w-full h-[247px]">
            <img
              src={HotelFlag}
              alt="Ryokan"
              className="w-full h-full object-contain rounded-t-xl "
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-[#6E7491] text-base font-medium capitalize">
              HOTEL THE FLAG 大阪市
              </h1>
              <p className="text-[#6E7491] text-base font-medium">$139</p>
            </div>
            <p className="text-[#7C8DB0] text-sm font-normal">
            Modern hotel in the heart of Osaka
            </p>
          </div>
        </div>
        <div className="w-full h-[330px] flex flex-col items-start rounded-b-xl bg-white dealsShadow">
          <div className="w-full h-[247px]">
            <img
              src={Bessho}
              alt="Ryokan"
              className="w-full h-full object-contain rounded-t-xl "
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-[#6E7491] text-base font-medium capitalize">
              Bessho SASA
              </h1>
              <p className="text-[#6E7491] text-base font-medium">$529</p>
            </div>
            <p className="text-[#7C8DB0] text-sm font-normal">
            Japanese ryokan with private onsen bath
            </p>
          </div>
        </div>
        <div className="w-full h-[330px] flex flex-col items-start rounded-b-xl bg-white dealsShadow">
          <div className="w-full h-[247px]">
            <img
              src={fiveHole}
              alt="Ryokan"
              className="w-full h-full object-contain rounded-t-xl "
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-[#6E7491] text-base font-medium capitalize">
              9 Hours Shinjuku
              </h1>
              <p className="text-[#6E7491] text-base font-medium">$59</p>
            </div>
            <p className="text-[#7C8DB0] text-sm font-normal">
            A convenient capsule hotel at Shinjuku station
            </p>
          </div>
        </div>

        <Link to='/hotels' className="w-full h-full flex items-center justify-center">
            <button className="py-2 px-4 border-[1px] border-[#605DEC] text-[#605DEC] bg-white rounded hover:bg-[#605DEC] hover:text-white hover:border-[#605DEC] transition-all duration-200">Shop all hotels</button>
        </Link>
      </div>
      </div>
      
      <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-start justify-start gap-4">
        <h1 className="text-[#6E7491] text-xl sm:text-2xl font-bold">
        Find unique<span className="text-[#605DEC]"> experiences</span>
        </h1>
        <p className="text-[#7C8DB0] text-sm sm:text-base font-medium">
        Find events and authentic cultrual experiences available exclusively to Tripma users.
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-start gap-10 mt-14">
      <div className="w-full h-[330px] flex flex-col items-start rounded-b-xl bg-white dealsShadow">
          <div className="w-full h-[247px]">
            <img
              src={kimono}
              alt="Ryokan"
              className="w-full h-full object-contain rounded-t-xl "
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-[#6E7491] text-base font-medium capitalize">
              Nihon Kimono
              </h1>
              <p className="text-[#6E7491] text-base font-medium">$89</p>
            </div>
            <p className="text-[#7C8DB0] text-sm font-normal">
            Wear the national dress of Japan around the city
            </p>
          </div>
        </div>
      <div className="w-full h-[330px] flex flex-col items-start rounded-b-xl bg-white dealsShadow">
          <div className="w-full h-[247px]">
            <img
              src={teamLab}
              alt="Ryokan"
              className="w-full h-full object-contain rounded-t-xl "
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-[#6E7491] text-base font-medium capitalize">
              teamLab Borderless
              </h1>
              <p className="text-[#6E7491] text-base font-medium">$39</p>
            </div>
            <p className="text-[#7C8DB0] text-sm font-normal">
            A modern sensory experience of light and sound
            </p>
          </div>
        </div>
        <Link to='/hotels' className="w-full h-full flex items-center justify-center">
            <button className="py-2 px-4 border-[1px] border-[#605DEC] text-[#605DEC] bg-white rounded hover:bg-[#605DEC] hover:text-white hover:border-[#605DEC] transition-all duration-200">View all experiences</button>
        </Link>
      </div>
      </div>

    </>
  );
};
export default ConfirmShop;
