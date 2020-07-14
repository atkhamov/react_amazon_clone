import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
   return (
      <nav className="header">
         <Link>
            {/* logo on the left -> img */}
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
         </Link>
         
         {/* Search box */}
         {/* 3 Links */}
         {/* Basket icon with the number */}
      </nav>
   )
}

export default Header
