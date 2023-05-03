import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import { Flights, Hotels, Packages } from './pages'



const App = () => {
  return (
    <>
    <div className='font-Nunito'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Flights/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/packages' element={<Packages/>}/>
       </Routes>
       <Footer/>
    </div>
    </>
  )
}

export default App
