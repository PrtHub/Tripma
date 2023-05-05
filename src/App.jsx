import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import { FlightExplore, Flights, Hotels, Packages } from './pages'



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
       </Routes>
       <Footer/>
    </div>
    </>
  )
}

export default App
