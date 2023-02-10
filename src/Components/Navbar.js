import React from 'react'
import { NavLink } from 'react-router-dom'
import cart from './image/cart.png'

export default function Navbar() {
  return (
    <div>
         <nav>
              <ul className="flex">
                <li>
                  <NavLink className="navItem" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navItem" to="/Components/Product">
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navItem" to="/Components/Support">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navItem" to="/Components/Feedback">
                    Feedback
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navItem" to="/Components/Card" id="cardbtn">
                    <img src={cart} alt=""/> Cart
                  </NavLink>
                </li>
              </ul>
            </nav>
    </div>
  )
}
