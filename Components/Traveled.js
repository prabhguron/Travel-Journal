import React from "react";

export default function Traveled(props) {
    return (
        <div className="infoSection">
        
            <div className="info">
                <img className="traveledPics" src={props.imageUrl} alt="Traveled destination"/>
                <div className="infoContainer">
                    <p className="location">{props.location}<a href={props.googleMapsUrl} className="google" target="_blank">View on Google Maps</a></p>
                    
                      <h1 className="place">{props.title}</h1>
                      <p className="date">{props.startDate} </p>
                      <p className="description">{props.description} </p>
                </div> 
            </div>
            
        </div>
    );
}

    
    
