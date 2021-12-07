import React, {useState, useEffect, useRef} from 'react';

function SignupForm(props) {

    const [prevalidation, setPreValidation] = useState(null)

    const emailInput = useRef(null)
    const usernameInput = useRef(null)
    const passwordInputOne = useRef(null)
    const passwordInputTwo = useRef(null)

    const validateEmail = () => {
           let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           return emailRegex.test(emailInput.current.value);
    }

    const signup = (e) => {

        e.preventDefault();

        if(passwordInputOne.current.value !== passwordInputTwo.current.value) {
            setPreValidation("Passwords don't match")
        }else if(validateEmail() === false){
            setPreValidation("Please enter a valid email")
        }else{

            let userObj = {
                email: emailInput.current.value,
                username: usernameInput.current.value,
                password: passwordInputOne.current.value
            }

            props.signup(userObj)
        }

    }


    return (
        <>
            <p>{prevalidation}</p>
            <form onSubmit={signup} className='signup-form'>
                <label>Email</label>
                <input required type="email" ref={emailInput}/>
                <label>Create a Username</label>
                <input required type="text" ref={usernameInput}/>
                <label>Create a Password</label>
                <input required type="password" ref={passwordInputOne}/>
                <label>Retype Password</label>
                <input required type="password" ref={passwordInputTwo}/>
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? <button className='link' onClick={props.handleSwitchForms}>Log in</button></p>
        </>
    );
}

export default SignupForm;
