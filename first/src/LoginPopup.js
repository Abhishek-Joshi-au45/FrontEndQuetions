import React, { useState } from 'react';
import './LoginPopup.css'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    const handleFacebookLogin = () => {
        const FBprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(FBprovider);
    }

    return (
        <>
            <button className='btn btn-warning' onClick={handleOpenPopup}>Login</button>
            {isOpen && (
            <div className="login-popup rounded-4" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="login-popup-inner border border-warning border-5" style={{ backgroundColor: 'white', padding: '0rem', borderRadius: '10px', margin: "20px" }}>
            <button onClick={handleClosePopup} > X </button>
            <h1>Log In To Participate</h1>
            <div className="button-container">
            <button onClick={handleFacebookLogin} className="login-facebook btn btn-info">Login with Facebook</button>
            <button onClick={handleGoogleLogin} className="login-google btn btn-success">Login with Google</button>
            </div>
            <hr className="border border-danger border-2 opacity-50"></hr>
            <input type={Text} placeholder="Enter Email" className='form-control border-success' ></input>
            <button className="Next btn btn-primary">Next</button>
            </div>
            </div>
            )}
        </>
    );
};

export default LoginPopup;
