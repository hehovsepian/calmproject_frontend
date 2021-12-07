import React, {useState, useEffect, useRef} from 'react';
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm";
import Toast from './Toast'

function Login(props) {

    const [validation, setValidation] = useState(null)
    const [showSignup, setShowSignup] = useState(false)
    const [toastMessage, setToastMessage] = useState(null)

    const usernameInput = useRef(null)
    const passwordInput = useRef(null)
    const createUsernameInput = useRef(null)
    const createPasswordInput = useRef(null)

    const login = (userObj) => {

        fetch(`/login`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
            .then(response => response.json())
            .then(data => setValidation(data.message))
            .then(props.checkLoggedIn)
    }

    const signup = (userObj) => {

        fetch(`/signup`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
            .then(response => response.json())
            .then((data) => {
                if(data.status === "error"){
                    setValidation(data.message)
                }else{
                    handleSwitchForms()
                    setToastMessage(data.message)
                    setTimeout(()=>{
                        setToastMessage(null)
                    },3000)
                }
            })
    }

    const handleSwitchForms = () => {
        setShowSignup(!showSignup)
        setValidation(null)
    }

    return (
        <div className="login">
            {
                toastMessage != null ?  <Toast message={toastMessage}/> : null
            }
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 40"><path d="M6.502 9.19a30.605 30.605 0 0 0-3.921 6.42C1.523 17.954.726 20.47.304 23.083-1.72 37.425 6.961 39.706 8.441 39.985c7.609.891 13.212-3.272 15.86-5.826.956 4.787 5.716 4.845 7.803 2.683.533-.551.959-1.229 1.29-1.934 1.238 4.524 5.203 2.983 5.67 2.783 2.21-.833 4.52-3.927 6.154-6.522 1.039 3.558 3.043 7.372 6.893 6.963 2.32-.056 8.138-6.273 8.676-5.462.537.671.68 1.903.644 3.742-.035 1.839 1.417 1.931 2.075 1.749 1.016-.283 1.655-2.297 2.72-4.048.834-1.372 1.455-2.15 2.283-3.063.417-.452 2.306-2.417 3.638-1.75 1.332.668 1.468 2.039 1.56 2.797.103.76.104 1.567.136 2.45-.04 3.045 1.384 3.475 1.785 3.587 3.292.894 3.496-5.329 5.911-7.639.226-.235 2.336-2.425 3.541 1.148 1.74 6.459 7.097 8.873 14.307 5.282 1.337-.666 1.6-.927 2.33-1.473a.708.708 0 0 0 .283-.562v-.01a.7.7 0 0 0-1.043-.612l-.003.002c-.738.411-3.193 1.235-3.97 1.516-2.91.478-6.473.37-8.228-3.903-.529-1.288-1.053-2.448-1.957-3.667-1.022-1.379-4.37-3.018-7.498-.06-.812.748-1.411 1.576-1.931 2.401-.212.338-.408.677-.594 1.017l-.036-.135c-.276-.957-1.16-4.495-4.835-5.07-.505-.042-2.55-.273-5.38 2.848-.989 1.082-1.811 2.234-2.579 3.4l-.002.004c-.135-.634-.298-1.21-.46-1.463-2.405-3.72-6.046-.75-7.614.358-3.515 2.485-5.144 5.824-7.286-1.762a31.855 31.855 0 0 1-.665-3.26c2.135-3.647 6.48-14.743 3.986-22.182-.162-.47-1.03-2.872-3.118-2.717-.3.03-2.679-.221-3.978 6.461-1.217 6.46-.948 14.787-.653 17.548.033.286.095.851.206 1.59-2.057 3.54-4.76 7.566-6.406 7.754-2.14.243-1.543-1.74-2.849-6.144-.225-.57-.946-3.293-4.192-3.158-1.587.066-3.268.482-5.563 3.006C21.626 32.75 13.128 38.914 7.05 35.04c-.66-.515-3.945-3.214-2.735-11.303a26.182 26.182 0 0 1 1.95-6.452 28.55 28.55 0 0 1 3.338-5.653c6.244-7.711 11.653-8.612 12.72-8.566 2.737.001 3.448 3.563 3.446 3.53.06.626.614 1.084 1.236 1.023a1.136 1.136 0 0 0 1.017-1.243c-.005-.031.005-1.164-.463-2.24-.429-1.402-1.663-2.704-2.381-3.185-.886-.62-2.06-.95-3.442-.951-3.972 0-9.67 2.733-15.234 9.19m40.912 11.254c-.029-12.559 1.559-15.41 1.676-15.19.605 1.128 1.91 8.2-1.65 15.93-.01-.247-.018-.493-.026-.74M26.82 32.784c.046-3.323 4.162-5.412 5.267-3.1.09.19.152.403.21.614-.19.611-.268 1.597-.915 2.935-.682 1.413-1.755 2.114-2.689 2.114-1.033 0-1.896-.859-1.873-2.563" fillRule="evenodd" fill="white"></path></svg>
            <h1>Find Your Calm</h1>
            <p>{validation}</p>
            {
                showSignup === true ? <SignupForm handleSwitchForms={handleSwitchForms} signup={signup}/> : <LoginForm handleSwitchForms={handleSwitchForms} login={login}/>
            }
        </div>
    );
}

export default Login;
