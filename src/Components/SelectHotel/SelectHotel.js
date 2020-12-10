import React from 'react';
import { Link, useParams } from "react-router-dom";
import { B016F3M7OM } from '../fakeData';
import { B01633M7OM } from '../fakeData';
import { B446F3M7OM } from '../fakeData';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Hotels from './Hotels';
import './SelectHotel.css'
import GoogleMap from './GoogleMap';

const SelectHotel = (props) => {
    const mapStyles = {
        width: '30%',
        height: '30%',
    };
    const { locationKey } = useParams();
    let getHotels;
    if (locationKey === 'B016F3M7OM') {
        getHotels = B016F3M7OM;
    }
    else if (locationKey === 'B01633M7OM') {
        getHotels = B01633M7OM;
    }
    else if (locationKey === 'B446F3M7OM') {
        getHotels = B446F3M7OM;
    }
    const sreemangal = { lat: 24.3065, lng: 91.7296 };
    const sajek = { lat: 23.3820, lng: 92.2938 };
    const sundarban = { lat: 21.9497, lng: 89.1833 };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="navSignUp col-7">
                    <div className="navBox">
                        <nav>
                            <Link className="Loginnavlink" to="../home">Home</Link>
                            <Link className="Loginnavlink" to="../destination">Destination</Link>
                            <Link className="Loginnavlink" to="../blog">Blog</Link>
                            <Link className="Loginnavlink" to="../contact">Contact</Link>
                        </nav>
                    </div>

                </div>
            </div>
            <div className='bottomMargin'>
                {
                    locationKey === 'B016F3M7OM' && <h1>Stay in Sundorbon</h1>
                }
                {
                    locationKey === 'B01633M7OM' && <h1>Stay in Sajek</h1>
                }
                {
                    locationKey === 'B446F3M7OM' && <h1>Stay in Sreemongol</h1>
                }
            </div>
            <div className='row'>
                <div className="col-5">
                    {
                        getHotels.map(ln => <Hotels
                            key={ln.id}
                            hotels={ln}></Hotels>)
                    }
                </div>
                <div>
                    {/* {
                        <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                        />
                        
                    } */}
                    {/* <GoogleMap placeName="sreemangal"></GoogleMap> */}
                    <Map
                        google={props.google}
                        zoom={8}
                        style={{
                            width: '50%',
                            height: '100%',
                        }}
                        initialCenter={locationKey === 'B446F3M7OM' ? sreemangal : locationKey === 'B01633M7OM' ? sajek : sundarban}
                    >
                        <Marker
                            name={'sundarban'} />
                    </Map>
                </div>
            </div>


        </div>
    );
};

// export default SelectHotel;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1a5ZDdUCeYkBh6bVJd3LWHQLuxussbIM'
})(SelectHotel);