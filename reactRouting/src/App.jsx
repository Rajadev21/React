import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Service from './Service'
import Account from './Account'
import Useraccount from './Useraccount'
import Adminaccount from './Adminaccount'

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
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/contact' element={<ContactUs></ContactUs>} />
          <Route path='/aboutus' element={<AboutUs></AboutUs>} />
          <Route path='/service' element={<Service></Service>} />
          <Route path='/account' element={<Account></Account>} >
            <Route path='useraccount' element={<Useraccount></Useraccount>} />
            <Route path='adminaccount' element={<Adminaccount></Adminaccount>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
