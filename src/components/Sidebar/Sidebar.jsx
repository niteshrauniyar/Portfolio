import React, { useState } from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  const [toggle,showMenu] = useState(false);
  return (
    <>
   <aside className={toggle ? "aside show-menu" :"aside "}>
   <a href='#home' className='nav__logo'>
    N<span className='fullstop'>.</span>
   </a>
   <nav className='nav'>
    <div className='nav__menu'>
      <ul className='nav__list'>
        <li className='nav_item'>
          <a href='#home' className='nav__link'>
            <i className='icon-home'></i>
          </a>
        </li>
        <li className='nav_item'>
          <a href='#about' className='nav__link'>
            <i className='icon-user-following'></i>
          </a>
        </li>
     
        
        <li className='nav_item'>
          <a href='#contact' className='nav__link'>
          <i className='icon-envelope'></i>
          </a>
        </li>
      </ul>
    </div>
   </nav>
   <div className='nav__footer'>
    <span className='copyright'>&copy; 2023 - 2024.</span>
   </div>

   </aside>

   <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle" } onClick= {() => showMenu(!toggle) }>
    <i className='icon-menu'></i>
   </div>
</>

  );
};

export default Sidebar