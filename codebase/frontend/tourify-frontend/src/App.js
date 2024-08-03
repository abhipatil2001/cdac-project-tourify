import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Register from "./pages/register/register";

function App() {
  return (
    <div>
      <Routes>
        // common routes
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <ToastContainer
        // position="bottom-center"
        position="top-right"
        theme="dark"
        autoClose={4000}
      />
      <Footer />
    </div>
  );
}

export default App;
