import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import {
  doLogout,
  getCurrentUserDetail,
  isLoggedIn,
} from "../../authentication/index.js";

import { useNavigate } from "react-router-dom";

const BeforeLoginNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const [name, setName] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
  }, login);

  const logout = () => {
    doLogout(() => {
      // logged out
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <div>
      <nav class="navbar navbar-info bg-light  ">
        <div className="heading">
          <div class="container-fluid ">
            <span>
              <h1 className="mt-2 mb-2 myH1 " class="markee">
                Welcome To Tourify
              </h1>
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="7"
                class="markee1"
              >
                Explore. Stay. Enjoy. !!
              </marquee>
            </span>
          </div>
          <div className="loginBtn">
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              className="myBtn"
            >
              Login / SignUp
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BeforeLoginNavbar;
