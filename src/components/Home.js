import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { Routes, Route } from 'react-router-dom';
import '../css/styles.css'
import Navigation from "./Navigation";
import Featured from "./Featured.js"
import Sleep from './Sleep'
import Meditate from "./Meditate";
import Body from './Body'
import Scenes from "./Scenes";
import Profile from './Profile'
import Toast from './Toast'

function Home(props) {

    const [toastMessage, setToastMessage] = useState(null)

    const showToastMessage = (message) => {
        setToastMessage(message)
        setTimeout(()=>{
            setToastMessage(null)
        },3000)
    }

    const loadScene = () => {
        fetch(`/one_scene/id/61af77177d801406f9b25539`,)
            .then(response => response.json())
            .then(data => {props.setScene(data)});
    }

    useEffect(loadScene, [])

    return (
        <div className="app">
            {
                toastMessage != null ? <Toast message={toastMessage}/> : null
            }
            <Navigation/>
            <Routes>
                <Route exact path={'/'} element={<Featured/>} />
                <Route exact path={'/sleep'} element={<Sleep/>} />
                <Route exact path={'/meditate'} element={<Meditate/>} />
                <Route exact path={'/body'} element={<Body/>} />
                <Route exact path={'/scenes'} element={<Scenes/>} />
                <Route exact path={'/profile'} element={<Profile checkLoggedIn={props.checkLoggedIn} showToastMessage={showToastMessage}/>} />
            </Routes>
            <div className='background-scene'>
                <video loop playsInline autoPlay muted src={props.scene.video}></video>
            </div>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    setScene: (scene) => dispatch({type: 'SET_SCENE', scene:scene}),
});

const mapStateToProps = ({scene}) => ({
    scene
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

