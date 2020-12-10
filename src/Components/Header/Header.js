import React, { useContext } from 'react';
import './Header.css';
import logo from './Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="mainBody d-flex justify-content-center">
            <img className="logo" src={logo} alt="logo" />
            <div className="navSignUp col-7">
                <div className="searchBox">
                    <div className="form-inline">

                        <i className="fas fa-search" aria-hidden="true"><FontAwesomeIcon icon={faSearch} /></i>
                        <input className="form-control" type="text" placeholder="Search your destination"
                            aria-label="Search" />
                    </div>
                    <nav>
                        <Link className="navlink" to="./home">Home</Link>
                        <Link className="navlink" to="./destination">Destination</Link>
                        <Link className="navlink" to="./blog">Blog</Link>
                        <Link className="navlink" to="./contact">Contact</Link>
                    </nav>
                    {
                        loggedInUser.isSignedIn ? <Link to="./login"><button>Log Out</button></Link> : <Link to="./login"><button>Log In</button></Link>
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default Header;