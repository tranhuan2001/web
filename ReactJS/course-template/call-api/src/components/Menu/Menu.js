import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
   render() {
      return (
         <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
               <NavLink className="navbar-brand" to="/">
                  Call API
               </NavLink>

               <div className="collapse navbar-collapse" id="navbarID">
                  <div className="navbar-nav">
                     <NavLink
                        className="nav-link"
                        to="/home"
                        activeClassName="active"
                     >
                        Home
                     </NavLink>
                     <NavLink
                        className="nav-link"
                        to="/products"
                        activeClassName="active"
                     >
                        Products
                     </NavLink>
                  </div>
               </div>
            </div>
         </nav>
      );
   }
}

export default Menu;
