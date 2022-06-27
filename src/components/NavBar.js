import React from "react"
import airbnb_icon from "../../public/images/airbnb.png"
export default function NavBar(){
    return(
        <nav>
            <img src={airbnb_icon} alt="AirBNB" className="nav--logo"/>  
        </nav>
       
    )
}