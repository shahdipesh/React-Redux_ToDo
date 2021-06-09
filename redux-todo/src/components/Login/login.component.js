import { Button } from 'react-bootstrap';
import { ArrowBarRight } from 'react-bootstrap-icons';
import React from 'react';
import firebase from '../../firebase/firebase';
import login from '../../redux/user/user.actions';
import { signOut } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const userObj = useSelector((state) => state.userState.userObj);
    const dispatch = useDispatch();
    var handleSubmitLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user.displayName)
                dispatch(login(result));
            })
    }
    var handleSubmitSignOut = () => {
        firebase.auth().signOut();
        dispatch(signOut());
    }
    return (
        <div>
            { userObj ?
                <div style={{fontSize:"14px",fontWeight:"bold"}}>
                Welcome {userObj.displayName}
                <ArrowBarRight size={"30px"}variant="dark" onClick={() => handleSubmitSignOut()}></ArrowBarRight>
                </div>
                : 
                <div>
                <Button variant="dark" onClick={() => handleSubmitLogin()}>Login with Google</Button>
               </div>
            }
        </div>
    )
}
