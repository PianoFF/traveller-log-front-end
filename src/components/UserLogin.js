import React from 'react'
import '../util/UserLogin.css';

const UserLogin = ({ showUserSignupForm }) => {
    return(
        <div className='user-login' >
            <form className="ui form" id='user-login'>
                <div className="required field">
                    <label>Email</label>
                    <input type="text" placeholder="Email"></input>
                    <br></br><br></br>
                    <label>Password</label>
                    <input type="text" placeholder="Password"></input>
                    <br></br><br></br>
                    <button className='ui black button'>
                        Log in 
                    </button>
                        or 
                    <button className='ui black button' onClick={showUserSignupForm}>
                        Sing up here
                    </button>
                </div>
            </form> 
        </div>
    )
}

export default UserLogin