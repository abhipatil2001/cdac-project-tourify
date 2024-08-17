import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  
  sessionStorage.clear(); // Corrected usage
  navigate('/login');

  // Navigate to the login page after clearing the session
};
