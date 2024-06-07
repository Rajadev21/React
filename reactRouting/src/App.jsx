import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Service from './Service'

function App() {

  return (
    <>
      <BrowserRouter>
      <h1>This is App component</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
        <Link to="/service">Service</Link>
        </li>
      </ul>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/contact' element={<ContactUs></ContactUs>} />
          <Route path='/aboutus' element={<AboutUs></AboutUs>} />
          <Route path='/service' element={<Service></Service>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
