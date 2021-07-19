import React from 'react';
import { Route, Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const navItems = [
   {
      name: 'Home',
      to: '/',
      exact: true,
   },
   {
      name: 'About',
      to: '/about',
      exact: false,
   },
   {
      name: 'Contact',
      to: '/contact',
      exact: false,
   },
   {
      name: 'Products',
      to: '/products',
      exact: false,
   },
   {
      name: 'Login',
      to: '/login',
      exact: false,
   },
];

// Custom link mở rộng việc thêm className cho các element không dùng NavLink hoặc Link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
   return (
      <Route
         path={to}
         exact={activeOnlyWhenExact}
         children={({ match }) => {
            var active = match ? 'active' : '';
            return (
               <li className={active}>
                  <Link to={to} className="nav-link">
                     {label}
                  </Link>
               </li>
            );
         }}
      ></Route>
   );
};

class Nav extends React.Component {
   showNav = (navItems) => {
      var result = null;
      if (navItems.length > 0) {
         result = navItems.map((navItem, index) => {
            return (
               <MenuLink
                  key={index}
                  label={navItem.name}
                  to={navItem.to}
                  activeOnlyWhenExact={navItem.exact}
               />
            );
         });
      }
      return result;
   };

   render() {
      return (
         <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
               <div className="collapse navbar-collapse" id="navbarID">
                  <ul className="navbar-nav">
                     {/* <li className="nav-item">
                        <NavLink
                           exact
                           // activeClassName="active"
                           // activeStyle={{
                           //    fontWeight: 'bold',
                           //    color: '#fff',
                           // }}
                           to="/"
                           className="nav-link"
                        >
                           Home
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                           About
                        </NavLink>
                     </li> */}
                     {this.showNav(navItems)}
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}

export default Nav;
