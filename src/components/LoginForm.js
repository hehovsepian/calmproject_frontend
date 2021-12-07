import React, {useState, useEffect, useRef} from 'react';

function LoginForm(props) {

    const usernameInput = useRef(null)
    const passwordInput = useRef(null)

    const login = (e) => {

        e.preventDefault();

        let userObj = {
            username: usernameInput.current.value,
            password: passwordInput.current.value
        }

        props.login(userObj)
    }

    return (
        <>
            <form onSubmit={login} className='login-form'>
                <label>Username</label>
                <input required type="text" ref={usernameInput}/>
                <label>Password</label>
                <input required type="password" ref={passwordInput}/>
                <button type="submit">Log in</button>
            </form>
            <p>Don't have an account? <button className='link' onClick={props.handleSwitchForms}>Sign up</button></p>
        </>
    );
}

export default LoginForm;
