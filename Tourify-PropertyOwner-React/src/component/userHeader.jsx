const UserHeader = () => {
    return(
        <>
        <div 
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
            minHeight: "400px",
            backgroundImage:
              "url(" + require("../assets/img/theme/signup-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        {/* Mask */}
        <span className="mask bg-gradient-default  opacity-6"/>
        </div>
        </>
    )
}
export default UserHeader;