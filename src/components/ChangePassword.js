import React, {useState, useEffect, useRef} from 'react';

function ChangePassword(props) {

    const [prevalidation, setPreValidation] = useState(null)
    const [showToast, setShowToast] = useState(null)

    const oldPasswordInput = useRef(null)
    const newPasswordInputOne = useRef(null)
    const newPasswordInputTwo = useRef(null)

    const update = (e) => {

        e.preventDefault()

        let userObj = {...props.userData}

        if(newPasswordInputOne.current.value !== newPasswordInputTwo.current.value) {
            setPreValidation("Passwords don't match")
        }else {

            userObj.oldpassword = oldPasswordInput.current.value
            userObj.newpassword = newPasswordInputOne.current.value

            fetch(`/change_password`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj)
            })
                .then(response => response.json())
                .then((data) => {
                    if(data.status === "success"){
                        props.handleShowMenu()
                        props.showToastMessage(data.message)
                    }
                })
        }

    }

    const handleReset = () => {
        oldPasswordInput.current.value = ""
        newPasswordInputOne.current.value = ""
        newPasswordInputTwo.current.value = ""
    }

    return (
        <div className="change-password">
            <button onClick={props.handleShowMenu}>
                <svg className="ScreenTitle__IconChevron-sc-1uv8lep-0 edPSSh" xmlns="http://www.w3.org/2000/svg"
                     width="26" height="26" viewBox="0 0 96 96">
                    <path d="M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82" fillRule="evenodd" fill="white"></path>
                </svg>
            </button>
            <h1>Change Password</h1>
            <div className='transparent-background'>
                <p>{prevalidation}</p>
                <form onSubmit={update} className='change-password'>
                    <label>Old Password</label>
                    <input required type="password" ref={oldPasswordInput}/>
                    <label>New Password</label>
                    <input required type="password" ref={newPasswordInputOne}/>
                    <label>Retype Password</label>
                    <input required type="password" ref={newPasswordInputTwo}/>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
