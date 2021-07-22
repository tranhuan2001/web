import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {
   BrowserRouter as Router,
   Route,
   Switch,
} from 'react-router-dom';
import routes from './routes';

class App extends React.Component {
   render() {
      return (
         <Router>
            <Menu />
            {this.showContentPage(routes)}
         </Router>
      );
   }

   showContentPage = (routes) => {
      var result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={route.main}
               ></Route>
            );
         });
      }
      return <Switch>{result}</Switch>;
   };
}

export default App;
