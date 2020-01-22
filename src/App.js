import React from 'react';
import NavBar from './components/NavBar';
import Login from './containers/Login';
import "./App.css";

function App() {
  return (
    <div>
      <div className='nav-bar'>
        <NavBar />
      </div>
      <div className='content'>
        {/* <div className='login-signup'>
          <Login />
        </div> */}
      </div>
    </div>
  )
}

export default App;
