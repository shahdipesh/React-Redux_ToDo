import React from 'react';
import {Button} from 'react-bootstrap';
import './signInWithGoogle';
import firebase from 'firebase/app';
import login from '../../redux/user/user.actions'
import { useDispatch, useSelector } from 'react-redux';
import './signInWithGoogle.css'

export default function SignInWithGoogle() {
    const dispatch = useDispatch();

var handleSubmitLogin=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            dispatch(login(result));
        })
}

    return (
        <div>
            
                <Button id="signInBtn" onClick={() => {handleSubmitLogin()}}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="20" alt="google logo png suite everything you need know about google newest" />   Login with Google</Button>
       
        </div>
    )
}
