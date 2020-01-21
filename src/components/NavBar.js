import React from 'react'

const NavBar = () => {
    return(
        <nav>
            <div className="ui secondary  menu">
                <button className="active item">
                    <i class="home icon"></i>
                    Home
                </button>
                <button className="item">
                    <i class="newspaper icon"></i>                    
                    Diary
                </button>
                <button className="item">
                    <i class="camera retro icon"></i>
                    Photo
                </button>
                <div className="right menu">
                    <button className="ui item">
                    <i class="sign-out icon"></i>
                    Logout
                    </button>
                </div>
            </div>    
        </nav>
    )
}

export default NavBar