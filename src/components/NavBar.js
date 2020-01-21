import React from 'react'

const NavBar = () => {
    return(
        <nav>
            <div className="ui secondary  menu">
                <button className="ui black button">
                    <i className="home icon"></i>
                    Home
                </button>
                <button className="ui black button">
                    <i className="newspaper icon"></i>                    
                    Diary
                </button>
                <button className="ui black button">
                    <i className="camera retro icon"></i>
                    Photo
                </button>
                <div className="right menu">
                    <button className="ui black button">
                    <i className="sign-out icon"></i>
                    Logout
                    </button>
                </div>
            </div>    
        </nav>
    )
}

export default NavBar