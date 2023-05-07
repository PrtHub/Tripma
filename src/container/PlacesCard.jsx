/* eslint-disable react/prop-types */


const PlacesCard = ({ image, title, name, desc }) => {
  return (
    <>
    <div className="w-[410.67px] h-[520px] flex flex-col justify-start gap-2 dealsShadow rounded-b">
       <div className="w-full h-[397px]">
         <img src={image} alt="images" className="w-full h-full object-cover rounded-t"/>
       </div>
       <div className="w-full h-full flex flex-col items-start justify-center gap-1 px-4">
        <h1 className="text-[#6E7491] text-base font-medium capitalize">{title} <span className="text-[#54cdb7]">{name}</span></h1>
        <p className="text-[#7C8DB0] text-sm font-normal">{desc}</p>
       </div>
    </div>
    </>
  )
}

export default PlacesCard