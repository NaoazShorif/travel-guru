import React from 'react';
import { Link } from 'react-router-dom';


const LocationName = (props) => {
    const { placeName, img, key } = props.location
    return (
        <div className="col-2">
            <Link to={"/location/" + key}>
                <div className="picContainer ">
                    <img className="image" src={img} alt="cox's_bazar"></img>

                    <p className="imgText">{placeName}</p>
                </div>
            </Link>
        </div>
    );
};

export default LocationName;