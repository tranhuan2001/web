import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import routes from './Routes';

class App extends React.Component {
   showRoutes = (routes) => {
      var result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               ></Route>
            );
         });
      }
      return result;
   };

   render() {
      return (
         <Router>
            <Nav />
            <Switch>{this.showRoutes(routes)}</Switch>
         </Router>
      );
   }
}

export default App;
