import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div  style={{padding: '20px 0 0px 20px', margin: '50px'}}>
            <nav>
                <Link style={{paddingRight:'20px', color:'black'}} to="../home">Home</Link>
                <Link style={{paddingRight:'20px', color:'black'}} to="../destination">Destination</Link>
                <Link style={{paddingRight:'20px', color:'black'}} to="../blog">Blog</Link>
                <Link style={{paddingRight:'20px', color:'black'}} to="../contact">Contact</Link>
            </nav>
            <h1>Sorry 404 error.</h1>
        </div>
    );
};

export default NotFound;