import React from "react"


export default function Card (props){
    console.log(props)
    return (
        <>
       <div className="card">
            <img src={props.imageUrl}/>
            <div className="content">
                <div className="location">
                    <img src="./location.png"/>
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
       </div>
       <hr/>
       </>
    )   
}