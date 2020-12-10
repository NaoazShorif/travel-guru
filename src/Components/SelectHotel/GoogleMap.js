// import React from 'react';
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { render } from '@testing-library/react';
import './SelectHotel.css'
import { useParams } from 'react-router-dom';
// const { locationKey } = useParams()
class GoogleMap extends Component {
    // const GoogleMap = (props) => {

    render() {

        return (
            <div>
                
            </div>
        );

    };
}

    // export default GoogleMap;

    export default GoogleApiWrapper({
        apiKey: ('AIzaSyC1a5ZDdUCeYkBh6bVJd3LWHQLuxussbIM')
    // apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
}) (GoogleMap)