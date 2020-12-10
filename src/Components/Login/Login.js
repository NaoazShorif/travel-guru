import React, { useContext, useState } from 'react';
import './Login.css'
import logo from '../Header/Logo.png';
import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig)
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',

    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookprovider = new firebase.auth.FacebookAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(err => {
            })
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: false,
                }
                setUser(signOutUser);
                setLoggedInUser(signOutUser);
            })
    }

    const FBSignIn = () => {
        firebase.auth().signInWithPopup(facebookprovider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {

            })
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber
        }

        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    userUpdate(res);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {
                    catchError(error);
                });
            
        }
        const userUpdate = (res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.isSignedIn = true;
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
        }
        const catchError = (error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    userUpdate(res);
                    history.replace(from);
                })
                .catch(error => {
                    catchError(error);
                });
        }
        e.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then(() => {

            })
            .catch(error => {

            })

    }


    return (
        <div className="loginBody">
            <div>
                <div className="d-flex justify-content-center">
                    <img className="Navlogo" src={logo} alt="logo" />
                    <div className="navSignUp col-7">
                        <div className="navBox">
                            <nav>
                                <Link className="Loginnavlink" to="./home">Home</Link>
                                <Link className="Loginnavlink" to="./destination">Destination</Link>
                                <Link className="Loginnavlink" to="./blog">Blog</Link>
                                <Link className="Loginnavlink" to="./contact">Contact</Link>
                            </nav>
                            {
                                user.isSignedIn && <button onClick={handleSignOut}>Log Out</button>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="container top-margin">
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'logged in'} Successfully.</p>}
                <form className="form-group form-box" onSubmit={handleSubmit}>
                    <br />
                    <h3>{!newUser ? 'Log In' : 'Create an account'}</h3>
                    {
                        newUser && <input type="name" onBlur={handleBlur} className="form-control blackcolor" name="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                    }
                    <input type="email" onBlur={handleBlur} className="form-control blackcolor" name="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small style={{ color: 'red' }}>{user.error}</small>
                    <input type="password" name="password" onBlur={handleBlur} className="form-control blackcolor" id="pass" placeholder="Password" required />
                    <br />
                    {
                        <input type="submit" className="btn btn-primary buttonNomargin" value={!newUser ? 'Sign In' : 'Create an Account'} />
                    }


                    <br />
                    <br />

                    <p className="loginLine">{
                        !newUser ? <span>Don't have an account?</span> : <span>Already have an account?</span>
                    } {!newUser ? <span className="orangeColor" onClick={() => setNewUser(!newUser)}>Create an Account</span> : <span className="orangeColor" onClick={() => setNewUser(!newUser)}>Log In</span>}</p>
                </form>

                <div className="signInPopup" onClick={handleSignIn}>
                    <p>Connect with google</p>
                </div>
                <div className="signInPopup" onClick={FBSignIn}>
                    <p>Connect with facebook</p>
                </div>
            </div>
        </div>
    );
};

export default Login;