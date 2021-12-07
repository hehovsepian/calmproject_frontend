import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import './css/styles.css'
import Login from "./components/Login"
import Home from './components/Home'

function App(props) {

    const [loggedin, setLoggedin] = useState(false)

    const checkLoggedIn = () => {
     fetch('/home')
        .then(response => response.json())
        .then((data) => {
            if(data.message === "success"){
                setLoggedin(true);
                let userObj = {...data.user}
                props.updateData(userObj)
            }else{
                setLoggedin(false)
                props.updateData({})
            }
        })
    }

    useEffect(checkLoggedIn,[])

    if(loggedin === true){
        return (
            <Home checkLoggedIn={checkLoggedIn}/>
        )
    }else{
     return (
            <Login loggedin={loggedin} checkLoggedIn={checkLoggedIn}/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateData: (userData) => dispatch({type: 'UPDATE_DATA', userData:userData}),
});

export default connect(
    null,
    mapDispatchToProps
)(App);
