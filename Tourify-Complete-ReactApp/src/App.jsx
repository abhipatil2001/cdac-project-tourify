import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//new prop owner import 
import './src/assets/plugins/nucleo/css/nucleo.css';
import './src/assets/css/argon-dashboard-react.css';

import AdminLogin from "./pages/admin/adminLogin";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import SignUpCard from "./pages/signUpCard/signUpCard";
import Dashboard from "./pages/dashboard/dashboard";
import PropertyHome from "./pages/propertyHome/propertyHome";

import CustomerLogin from "./pages/customer/login/customerLogin";
import CustomerRegister from "./pages/customer/register/customerRegister";
import PropertyDetails from "./pages/customer/propertyDetails/propertyDetails";
import PropertyBooking from "./pages/propertyBooking/propertyBooking";
import MyBookings from "./pages/customer/myBookings/myBookings";
import CustomerProfile from "./pages/customer/profile/customerProfile";

import OwnerLogin from "./pages/propertyOwner/login/ownerLogin";
import OwnerRegister from "./pages/propertyOwner/register/ownerRegister";
//import OwnerDashboard from "./pages/propertyOwner/dashboard/dashboard";
//import AddProperty from "./pages/propertyOwner/addProperty/addProperty";
//import MyProperties from "./pages/propertyOwner/myProps/myProperties";
//import OwnerProfile from "./pages/propertyOwner/profile/ownerProfile";
import PropDashboard from "./src/page/Home";
import Profile from "./src/page/Profile";
import ViewBookings from "./src/component/viewBookings";
import AddProperty from "./src/component/addproperty";
//import { Logout } from "./src/page/logout";

function App() {
  const location = useLocation();
  const shouldHideFooter = location.pathname.startsWith('/owner');

  return (
    <div>
      <Routes>
        // common routes
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUpCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        // customer routes
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/register" element={<CustomerRegister />} />
        <Route path="/customer/profile" element={<CustomerProfile />} />
        <Route
          path="/customer/properties/:cityName"
          element={<PropertyHome />}
        />
        <Route
          path="/customer/propertydetails/:placeId/:id"
          element={<PropertyDetails />}
        />
        <Route path="/customer/booking" element={<PropertyBooking />} />
        <Route path="/customer/mybookings" element={<MyBookings />} />
        // owner routes
        {/* //<Route path="/owner/login" element={<OwnerLogin />} />
        //<Route path="/owner/register" element={<OwnerRegister />} />
        //<Route path="/owner/dashboard" element={<PropDashboard />} />
        //<Route path="/owner/myprops" element={<MyProperties />} />
        //<Route path="/owner/profile" element={<OwnerProfile />} />
        //<Route path="/owner/add/property/:cityId" element={<AddProperty />} />   */}

        <Route path="/owner/login" element={<OwnerLogin />} />
        <Route path="/owner/register" element={<OwnerRegister />} />
        <Route path="/owner/dashboard" element={<PropDashboard/>} />
        <Route path="/owner/profile" element={<Profile/>} />
        <Route path="/owner/view-bookings" element={<ViewBookings/>} />
        <Route path="/owner/add-property" element={<AddProperty/>}/>

        
        // admin routes
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>

      <ToastContainer
        // position="bottom-center"
        position="top-right"
        theme="dark"
        autoClose={4000}
      />
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
