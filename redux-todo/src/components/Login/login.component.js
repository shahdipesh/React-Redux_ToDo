import { ArrowBarRight,EmojiSmileFill } from 'react-bootstrap-icons';
import React from 'react';
import firebase from '../../firebase/firebase';
import login from '../../redux/user/user.actions';
import { signOut } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import './login.css';

export default function Login() {
    const userObj = useSelector((state) => state.userState.userObj);
    const dispatch = useDispatch();
    
    var handleSubmitSignOut = () => {
        firebase.auth().signOut();
        dispatch(signOut());
    }
    return (
        <div>
            { userObj ?
            <div className="loginHeader">
                <div className="smiley">
            <EmojiSmileFill size={20}></EmojiSmileFill>
            </div>
                <div style={{fontSize:"14px",fontWeight:"bold",fontFamily:"'Courier New', Courier, monospace",color:"royalBlue"}}>
                
                   Welcome {userObj.displayName}
                <ArrowBarRight size={"30px"}variant="dark" onClick={() => handleSubmitSignOut()}></ArrowBarRight>
                </div>
                </div>
                : null
 
            }
        </div>
    )
}
