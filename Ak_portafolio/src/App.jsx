import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import MainPage from './pages/MainPage'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'
import ContactUs from './pages/'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          
          <Route path='/' element= {<MainPage/>}/>
          <Route path='/aboutus' element = {<Aboutus/>}/>
          <Route path='/services' element = {<Services/>}/>
          <Route path='/contact' element = {<ContactUs/>}/>

        </Routes>

      </BrowserRouter>

    </>
  )
}


export default App
