import React from "react";
import star from "../../public/images/Star.png"

export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../../public/images/${props.item.coverImg}`)} alt="img" className="card--image"/>
            <div className="card--stats">
                <img src={star} className="card--star" alt="img"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) * </span>
                <span className="gray">{props.item.country}</span>
            </div>
                <p className="card--title">{props.item.title}</p>
                <p className="card--price">From ${props.item.price}<span className="bold">/person</span></p>  
        </div>
    )
}