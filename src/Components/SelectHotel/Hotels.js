import React from 'react';
import './SelectHotel.css'

const Hotels = (props) => {
    const { title, guest, bedrooms, beds, baths, extraFacilities1, extraFacilities2, stars, review, perNight, totalCost, img } = props.hotels
    return (
        <div className="hotelsCard row">
            <img src={img} className="col-6" alt=""/>
            <div className="col-6">
            <h1 className="hotelh1">{title}</h1>
            <p className="hotelp">{guest} guests {bedrooms} bedrooms {beds} beds {baths} baths</p>
            <p className="hotelp">{extraFacilities1}</p>
            <p className="hotelp">{extraFacilities2}</p>
            <p className="hotelp">Rating:{stars} ({review})     ${perNight}/night ${totalCost} total</p>
            </div>
        </div>
    );
};

export default Hotels;