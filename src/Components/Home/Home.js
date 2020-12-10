import React, { useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import LocationName from '../LocationName/LocationName';
import fakeData from '../fakeData';

const Home = () => {


    const [locations, setLocations] = useState(fakeData);


    return (
        <div className="mainHomeBody">
            <div className="blackTransparent">
                <Header></Header>
                <div className='homeBody'>
                    <div className='row'>
                        <div className="descreption col-4  align-self-center">
                            <h1>Choose your location</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi atque repellendus porro maxime, aliquam quisquam cupiditate ducimus labore aspernatur.</p>
                            <button disabled>Booking -&gt;</button>
                        </div>
                        {
                            
                                locations.map(ln => <LocationName
                                    key={ln.key}
                                    location={ln}></LocationName>)
                            
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;