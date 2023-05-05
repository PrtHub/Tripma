import { Link, useLocation } from "react-router-dom";
import { tripma } from "../assets/logo";
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineMenu } from 'react-icons/hi'
import { useState } from "react";
import { Signin } from "../container";

const Navbar = () => {
  const location = useLocation();
  const[toggle, setToggle] = useState(false);
  const [signin, setSignin] = useState(false);

  const loactionPath = (route) => {
    if(route === location.pathname) {
     return true
    }
   }

  return (
    <>
      <nav className="w-full flex flex-row items-center justify-between px-5 py-4 relative">

        <div className="flex items-center justify-center">
          <img
            src={tripma}
            alt="Tripma"
            className="md:w-[107px] md:h-[30px] w-[90px] h-[25px] object-contain"
          />
        </div>

        {/* Desktop View */}

        <div className="hidden md:flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8 text-[#7C8DB0]">
            <Link
              to="/"
              className={`text-base  hover:text-[#605DEC] transition-all duration-200 ${loactionPath("/") && "text-[#605DEC]"}`}
            >
              <li>Flights</li>
            </Link>
            <Link
              to="/hotels"
              className={`text-base hover:text-[#605DEC] transition-all duration-200 ${loactionPath("/hotels") && "text-[#605DEC]"}`}
            >
              <li>Places</li>
            </Link>
            <Link
              to="/packages"
              className={`text-base hover:text-[#605DEC] transition-all duration-200 ${loactionPath("/packages") && "text-[#605DEC]"}`}
            >
              <li>Packages</li>
            </Link>
          </ul>
          <div className="">
          <button className="bg-[#605DEC] py-2 px-4 md:py-3 md:px-5 rounded-[5px] border-2 border-[#605DEC] text-base text-[#FAFAFA] hover:text-[#605DEC] hover:bg-white hover:border-2 hover:border-[#605DEC] transition-all duration-200" onClick={() => setSignin(!signin)}>Sign up</button>
         { signin && ( 
          <Signin signin={signin} setSignin={setSignin}/>
          )}
          </div>
        </div>

       {/* Mobile View */}

       <div className="md:hidden flex items-center space-x-2">
        <div className="">
       <button className="bg-[#605DEC] py-2 px-4 rounded-[5px] border-2 border-[#605DEC] text-base text-[#FAFAFA] hover:text-[#605DEC] hover:bg-white hover:border-2 hover:border-[#605DEC] transition-all duration-200" onClick={() => setSignin(!signin)}>Sign up</button>
       { signin && ( 
          <Signin signin={signin} setSignin={setSignin}/>
          )}
        </div>
       <div className="relative">
       {toggle ? (
          <MdOutlineClose src={close} alt="close" className="w-9 h-9 text-[#605DEC] cursor-pointer" onClick={() => setToggle(false)}/>
          ) : (
            <HiOutlineMenu className="w-9 h-9 text-[#605DEC] cursor-pointer" onClick={() => setToggle(true)}/>
          )}
        { toggle && (
            <ul className="absolute w-32 z-10 h-fit bg-[#FFFFFF] shadow-xl top-14 right-1 text-[#7C8DB0] flex flex-col gap-2 items-end p-4 scaleUp">
                <Link
              to="/"
              className={`text-base  hover:text-[#605DEC] transition-all duration-200 ${loactionPath("/") && "text-[#605DEC]"}`}
            >
              <li>Flights</li>
            </Link>
            <Link
              to="/hotels"
              className={`text-base hover:text-[#605DEC] transition-all duration-200 ${loactionPath("/hotels") && "text-[#605DEC]"}`}
            >
              <li>Hotels</li>
            </Link>
            <Link
              to="/packages"
              className={`text-base hover:text-[#605DEC] transition-all duration-200 ${loactionPath("/packages") && "text-[#605DEC]"}`}
            >
              <li>Packages</li>
            </Link>
            </ul>
        )}
        </div>
       </div>

      </nav>
    </>
  );
};

export default Navbar;
