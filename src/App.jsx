import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import { Confirm, FlightExplore, Flights, Hotels, Packages, PassengerInfo, Payment, SeatSelect } from './pages'


const App = () => {
  return (
    <>
    <div className='font-Nunito overflow-hidden max-w-[1440px] mx-auto'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Flights/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/explore' element={<FlightExplore/>}/>
        <Route path='/passenger-info' element={<PassengerInfo/>}/>
        <Route path='/seat-selection' element={<SeatSelect/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/confirm' element={<Confirm/>}/>
       </Routes>
       <Footer/>
    </div>
    </>
  )
}

export default App
