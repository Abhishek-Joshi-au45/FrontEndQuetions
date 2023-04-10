import React, { useState } from 'react';
import './LoginPopup.css'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {  useEffect } from 'react';
const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const [userData, setUserData] = useState(null);

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
        
    };

    const handleFacebookLogin = () => {
        const FBprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(FBprovider);
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // User is signed in, get their data
            const { displayName, email, photoURL } = user;
            setUserData({ displayName, email, photoURL });
            console.log(`Name is ${displayName},and email is ${email}`)
          } else {
            // User is signed out
            setUserData(null);
            console.log("Signout / user is not")
          }
        });
      }, []);

        const handleSignOut = () => {
            firebase.auth().signOut();
        };

    return (
        <>
            <button className='btn btn-warning' onClick={handleOpenPopup}>Login</button>
            {isOpen && (
            <div className="login-popup rounded-4" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="login-popup-inner border border-warning border-5" style={{ backgroundColor: 'white', padding: '4rem', borderRadius: '10px', margin: "20px" }}>
            {/* <button onClick={handleClosePopup} style={{position: 'absolute', top: '95px',right: '405px'}}> X </button> */}
            <p onClick={handleClosePopup} style={{position: 'absolute', top: '105px',right: '420px'}}> X </p>

            <h2 style={{margin:'10px'}}>Log In To Participate</h2>
            <div className="button-container">
            {/* <button onClick={handleFacebookLogin} className="login-facebook btn btn-info">Login with Facebook</button> */}
            <button onClick={handleFacebookLogin} className=" btn " style={{border: '1px solid black', padding:'10px'}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEU7WZj///+kr8otUJMVQo3p6/KZpcPS1+Tx8/cmS5IrTpP5+vuhrMk0VJY5V5fHzd2tt8+Rnr+Lmb0dRo9GYZ1MZp90hrHb3+m2v9VUbKNdc6Z9jbWEk7lpfasDPYvAx9oAL4UANoiuPPm2AAACIUlEQVRoge3ba3OqMBAG4Ei4ZWkuCoq9WNv//ycPzDlzWmULmcAmbWffGccv4iMKZBNcsRvSWJdFjbPN6Irh4TSAjBoA7f7iB2VE9Bh1GHGn4tNjlNuJRifY7zFGN8JCGlsIsMKlw53IZCpcZowzzjjjPxM3Y8bnuLjRoEB0xyFdJ4xUqlUgpx+CAAd5PGW2L4p6SFEUfd9X9pwdHif61rgBWVY7NNlk9NwYb49nXB7yQItr9TVNjcunYsamxeF5jqbF4WXepsTlacEmxE23ZBPieZ8Ol4dFmw43dToc9ss2FW7M7NWFFtcXD5sKn72kU+Pg860TDanmqcG52mbl/n8umgLX+JW1ury2n5dhaMooKNGfuJ3sKQWOHm/WY5FpC7zFirbHxf3eCEcGlfrVY8Mt8Bw5064+y2tUuNebUuEl44wzzjjjJLjHiBqGg7rJG4Lvc3UX5H5GCK5sdRukfiyq+5y3qeFyj4nZNMh9pHj4eVpexMP3UyYefpoe//HwLuUBh1SU0fB6o/M8CO9T4teUuEOUaDhymsfDkdM8Hn5EZszR8Bx5o1g4OmWOhfdtQhydr4fgbV/fBsGa21c0aEEZq4ZD68nfWTozzjjjjDPOOOOMM84444wzzjjjjDPO+LfDV7eMBePg1jfLheN2fZtgKD62Ca5ukAzFxwbJ1a2hYf8c+NcaurYp9h1bdW7nt/loil3ZDlzWzX129sGrHfgPUyAsw77qUXwAAAAASUVORK5CYII=" alt="Facebook Logo" className="logo" style={{width: '20px',height: '20px',marginRight: '10px'}}/>
                Sign in
                </button>
            <button onClick={handleGoogleLogin} className="btn" style={{border: '1px solid black',padding:'10px'}} >
                <img src="data:image/png;base64,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" alt="Google Logo" className="logo" style={{width: '20px',height: '20px',marginRight: '10px'}}/>
                Sign in
                </button>
            {/* <button onClick={handleGoogleLogin} className="login-google btn btn-success">Login with Google</button> */}
            </div>
            <hr className="border border-danger border-2 opacity-50" style={{margin:'20px'}}></hr>
            <input type={Text} placeholder="Enter Email" className='form-control border-success'></input>
            <button className="Next btn btn-primary" style={{marginTop:'20px'}} onClick={handleSignOut}>Next</button>
            
            </div>
            </div>
            )}
        </>
    );
};

export default LoginPopup;
