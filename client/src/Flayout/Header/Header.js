import React from "react"
import {ReactNavbar} from "overlay-navbar"
import M from "materialize-css";
import { Link, useNavigate } from "react-router-dom";

const options = {
    burgerColorHover: "#eb4034",
    
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };
  
  const Fheader = () => {
    const history = useNavigate();
    const Logout=()=>{ fetch("/logout",{
      method:"GET"

  }).then((res)=>res.json())
  .then(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
       M.toast({ html:"okey your succcesfully logged out", classes: "#4caf50 green" });
        history("/signin");

  }).catch((err)=>{
      console.log(err)
  })}
   
    return (<>
    <ReactNavbar {...options} />
    <button type="submit"  onClick={(e)=>Logout()}>logout</button>
    
    </>);
  };
  
  export default Fheader;
  