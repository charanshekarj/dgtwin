import React from 'react'
import { useNavigate } from 'react-router';
import logo from "../../Components/Logo.png"
const Header = () => {
    const navigate=useNavigate();
    const logoutHandler=()=>{
        localStorage.removeItem("token");
        navigate('/');
    }

    const token = localStorage.getItem("token");

  return (
    <>
    <div className='header-style'>
      { token ? <button className='theme-btngrad btn' onClick={logoutHandler}>Logout</button> : "" }
            <img src={logo} className="ms-0 mt-0 mb-0"/>  
    </div>
     </>
  )
}

export default Header
