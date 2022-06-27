import React from "react";
import icon2 from "../../public/images/icon2.png"
export default function Hero(){
    return(
        <section className="hero">
            <img src={icon2} alt="img" className="hero--photo"/>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique interactive activities lea by on-of-a-kind hosts-all without leaving home</p>

        </section>
    )
}