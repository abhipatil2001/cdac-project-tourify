import React from "react";

const BeforeLoginNavWithoutLoginBtn = () => {
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
        </div>
      </nav>
    </div>
  );
};

export default BeforeLoginNavWithoutLoginBtn;
