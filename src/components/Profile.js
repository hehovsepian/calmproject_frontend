import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import ChangePassword from './ChangePassword'
import Stats from "./Stats"

function Profile(props) {

    const [showMenu, setShowMenu] = useState(true)
    const [showChangePassword, setShowChangePassword] = useState(false)
    const [showStats, setShowStats] = useState(false)

    const logout = () => {
    if(window.location.href.includes("/#/profile")){
        window.location = window.location.href.replace('/#/profile', '');
    }
     fetch('/logout')
        .then(response => response.json())
        .then(props.checkLoggedIn)
    }

    const handleShowStats = () => {
        setShowStats(true)
        setShowMenu(false)
    }

    const handleChangePassword = () => {
        setShowChangePassword(true)
        setShowMenu(false)
    }

     const handleShowMenu = () => {
        setShowMenu(true)
        setShowChangePassword(false)
        setShowStats(false)
    }

    return (
        <div className="profile page">
            {
                showMenu === true ? <div className='menu'>
                    <h1>Profile</h1>
                    <button className="transparent-background" onClick={handleShowStats}>
                        <div>
                            <svg className="Profile__PlayIcon-sc-6s1fdj-4 bqnuXa" xmlns="http://www.w3.org/2000/svg" width="26"
                                 height="26" viewBox="0 0 96 96">
                                <path fill="#FFF" fillRule="evenodd" d="M15 55h14a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V58a3 3 0 0 1 3-3zm52-17h14a3 3 0 0 1 3 3v36a3 3 0 0 1-3 3H67a3 3 0 0 1-3-3V41a3 3 0 0 1 3-3zM41 17h14a3 3 0 0 1 3 3v57a3 3 0 0 1-3 3H41a3 3 0 0 1-3-3V20a3 3 0 0 1 3-3z"></path>
                            </svg>
                            <span>My Stats</span>
                        </div>
                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82" fill-rule="evenodd" fill="white"></path></svg>
                    </button>
                    <button className="transparent-background" onClick={handleChangePassword}>
                        <div>
                            <svg height="26" width="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M55.444 54.757a7.437 7.437 0 0 1-4.607 6.874v7.835a2.84 2.84 0 0 1-2.843 2.826 2.831 2.831 0 0 1-2.825-2.826v-7.834a7.433 7.433 0 0 1-4.602-6.875A7.43 7.43 0 0 1 48 47.323c4.108 0 7.444 3.325 7.444 7.434zm20.498 26.496a2.25 2.25 0 0 1-2.247 2.247H22.31a2.252 2.252 0 0 1-2.253-2.247V38.368a2.254 2.254 0 0 1 2.253-2.252h51.383a2.252 2.252 0 0 1 2.248 2.252v42.885zM30.1 30.399c0-9.87 8.03-17.899 17.9-17.899S65.9 20.529 65.9 30.399v1.717H30.1v-1.717zm43.594 1.717H69.9v-1.717C69.9 18.324 60.075 8.5 48 8.5s-21.9 9.824-21.9 21.899v1.717h-3.79a6.259 6.259 0 0 0-6.252 6.252v42.885c0 3.444 2.805 6.247 6.253 6.247h51.383a6.255 6.255 0 0 0 6.248-6.247V38.368c0-3.447-2.803-6.252-6.247-6.252z" fillRule="evenodd" fill="white"></path></svg>
                            <span>Change Password</span>
                        </div>
                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82" fill-rule="evenodd" fill="white"></path></svg>
                    </button>
                    <button className="transparent-background" onClick={logout}>
                        <div>
                            <svg height="26" width="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M60.354 22.592V42.73a2 2 0 0 0 4 0V22.592c0-6.176-5.235-11.201-11.67-11.201H20.169c-6.434 0-11.669 5.025-11.669 11.201V82.609a2 2 0 0 0 4 0V22.592c0-3.971 3.44-7.201 7.669-7.201h32.515c4.23 0 7.67 3.23 7.67 7.201M87.376 54.96l.033-.105c.053-.18.091-.368.091-.567a2.02 2.02 0 0 0-.091-.568l-.033-.103a1.965 1.965 0 0 0-.266-.505c-.007-.01-.009-.02-.016-.03l-8.308-10.987a2 2 0 1 0-3.19 2.414l5.884 7.779H47.102a2 2 0 0 0 0 4H81.48l-5.884 7.78a1.999 1.999 0 1 0 3.19 2.412l8.308-10.986c.007-.009.009-.021.016-.029.112-.154.201-.324.266-.505M64.354 65.839v16.77a2 2 0 0 1-4 0v-16.77a2 2 0 0 1 4 0" fillRule="evenodd" fill="white"></path></svg>
                            <span>Logout</span>
                        </div>
                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82" fill-rule="evenodd" fill="white"></path></svg>
                    </button>
                    <p>Logged in as: {props.userData.username}</p>
                </div> : null
            }

            {
                showChangePassword === true ?
                    <ChangePassword
                        userData={props.userData}
                        handleShowMenu={handleShowMenu}
                        showToastMessage={props.showToastMessage}
                    />
                    : null
            }

            {
                showStats === true ?
                    <Stats
                        userData={props.userData}
                        handleShowMenu={handleShowMenu}
                    />
                    : null
            }


        </div>
    );
}

const mapStateToProps = ({userData}) => ({
    userData
});

export default connect(
    mapStateToProps,
)(Profile);
