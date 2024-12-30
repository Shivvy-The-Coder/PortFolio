import React from 'react';
import "./Navbar.css"
import Buttons from '../Buttons/Buttons';
const Navbar = () => {
  return (
    <nav>
        {/* here i have defined the logo section of the projet present in the navbar */}

        <div className='logo'>
            <img src="./images/Logo.png" alt='logo' />
        </div>

        {/* Here i will be defining the mddle secetion of the navbar  */}

        <div className='options'>
          <div><Buttons isButtonAlter={true} name="Home"/></div>
          <div><Buttons name="About"/></div>
          <div><Buttons name="Work"/></div>
          <div><Buttons  name="Reviews"/></div>
            
            
            
            
        </div>

            <Buttons isButtonAlter={true} name="Contact" ></Buttons>
    </nav>
  );
}

export default Navbar;