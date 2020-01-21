import React, { useState } from 'react';
import UserLogin from '../components/UserLogin';
import UserSignup from '../components/UserSignup';


const Login = () => {
    const [showSignup, setShowSingup] = useState(false);


    const showUserSignupForm = (e) => {
        e.preventDefault();
        setShowSingup(!showSignup)
    };

    return (
        <div>
            {
                showSignup 
                ? <UserSignup />
                : <UserLogin showUserSignupForm={showUserSignupForm}/> 
            }
        </div>
    )
}

export default Login;