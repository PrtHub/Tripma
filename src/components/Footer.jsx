import { appStore, facebook, googlePlay, instagram, twitter } from "../assets/icons"


const Footer = () => {
  return (
    <>
    <div className="mt-40 flex flex-col gap-5 px-8">
      <div className="flex justify-between items-start flex-col md:flex-row gap-7">
        <div className="flex justify-start items-start">
          <h1 className="text-[#605DEC] font-bold text-2xl">Trimpa</h1>
        </div>
        <ul className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-[#6E7491] font-bold text-lg">About</h2>
          <li className="footerLi">About Tripma</li>
          <li className="footerLi">How it works</li>
          <li className="footerLi">Careers</li>
          <li className="footerLi">Blog</li>
          <li className="footerLi">Press</li>
          <li className="footerLi">Forum</li>
        </ul>
        <ul className="flex flex-col items-start justify-start gap-3 ">
          <h2 className="text-[#6E7491] font-bold text-lg">Partner with us</h2>
          <li className="footerLi">Partnership programs</li>
          <li className="footerLi">Affiliate program</li>
          <li className="footerLi">Connectivity partners</li>
          <li className="footerLi">Promotions and events</li>
          <li className="footerLi">Integrations</li>
          <li className="footerLi">Community</li>
          <li className="footerLi">Loyalty program</li>
        </ul>
        <ul className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-[#6E7491] font-bold text-lg">Support</h2>
          <li className="footerLi">Help Center</li>
          <li className="footerLi">Contact us</li>
          <li className="footerLi">Privacy policy</li>
          <li className="footerLi">Terms of service</li>
          <li className="footerLi">Trust and safety</li>
          <li className="footerLi">Accessibility</li>
        </ul>
        <ul className="flex flex-col items-start justify-start  gap-3">
          <h2 className="text-[#6E7491] font-bold text-lg">Get the app</h2>
          <li className="footerLi">Tripma for Android</li>
          <li className="footerLi">Tripma for iOS</li>
          <li className="footerLi">Mobile site</li>
          <img src={appStore} alt="appStore"  className=""/>
          <img src={googlePlay} alt="googlePlay" />
        </ul>
      </div>
      <div className="border-t-2 border-[#CBD4E6] py-8 flex justify-between items-center">
        <div className="flex items-center justify-center gap-3">
          <img src={twitter} alt="twitter"  className="cursor-pointer object-cover w-5 h-5 sm:w-7 sm:h-7"/>
          <img src={instagram} alt="twitter"  className="cursor-pointer object-cover w-5 h-5 sm:w-7 sm:h-7" />
          <img src={facebook} alt="twitter"   className="cursor-pointer object-cover w-5 h-5 sm:w-7 sm:h-7"/>
        </div>
        <p className="text-[#7C8DB0] text-sm sm:text-base">&copy; 2023 Tripma incorporated</p>
      </div>
    </div>
    </>
  )
}

export default Footer