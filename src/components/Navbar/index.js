import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Cart } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
      <Cart to="/cart">
            <button>Cart</button>
            <span>0</span>
        </Cart>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;