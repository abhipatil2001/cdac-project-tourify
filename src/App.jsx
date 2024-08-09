
// import './App.css';
import { ToastContainer } from 'react-toastify'
import LoginUser from './page/login';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import RegisterOwner from './page/register';
import Home from './page/Home';
import './styles.css';
// import './styles/tourify.css'
import './assets/plugins/nucleo/css/nucleo.css'
import './assets/css/argon-dashboard-react.css'
import Profile from './page/Profile';
import ViewBookings from './component/viewBookings';
import AddProperty from './component/addproperty';
import { Logout } from './page/logout';
// import Footer from './component/footer';
function App() {
  return (
  
    <div className= "">
      <div className=''>
      <Routes>
        <Route path='/' element={<LoginUser/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>
        <Route path='/register' element={<RegisterOwner/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/view-bookings' element={<ViewBookings/>}></Route>
        <Route path='/add-property' element={<AddProperty/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
      <ToastContainer/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
