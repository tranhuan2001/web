import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         txtUsername: '',
         txtPassword: '',
      };
   }

   handleChange = (e) => {
      var target = e.target;
      var name = target.name;
      var value = target.value === 'checked' ? target.checked : target.value;
      this.setState({
         [name]: value,
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      var { txtUsername, txtPassword } = this.state;
      if (txtUsername === 'admin' && txtPassword === 'admin') {
         localStorage.setItem(
            'user',
            JSON.stringify({
               username: txtUsername,
               password: txtPassword,
            })
         );
      }
   };

   render() {
      var { txtUsername, txtPassword } = this.state;
      var loggedInUser = localStorage.getItem('user');

      if (loggedInUser !== null) {
         var { location } = this.props;
         return (
            <Redirect
               to={{
                  pathname: '/products',
                  state: {
                     from: location,
                  },
               }}
            />
         );
      }

      return (
         <div className="container">
            <div className="row justify-content-md-center">
               <div className="col-3">
                  <br />
                  <br />
                  <div className="card">
                     <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                           <label className="form-label">Username:</label>
                           <input
                              className="form-control"
                              name="txtUsername"
                              type="text"
                              required
                              value={txtUsername}
                              onChange={this.handleChange}
                           />
                        </div>
                        <div className="form-group">
                           <label className="form-label">Password:</label>
                           <input
                              className="form-control"
                              name="txtPassword"
                              type="password"
                              required
                              value={txtPassword}
                              onChange={this.handleChange}
                           />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-success">
                           Login
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;
