import React from 'react'
import './Main.css'

class Main extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         username: '',
         password: '',
         desc: '',
         gender: 1,
         language: 'vi',
         status: false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(event) {
      var target = event.target
      var name = target.name
      var value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({
         [name]: value
      })
   }

   handleSubmit(event) {
      event.preventDefault()
      console.log(this.state)
   }

   render() {
      return (
         <div className="container mt-30">
            <form onSubmit={this.handleSubmit}>
               <div className="form-group row">
                  <label>User name:</label>
                  <div className="col-sm-6">
                     <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                     />
                  </div>
               </div>
               <br/>
               <div className="form-group row">
                  <label>Password:</label>
                  <div className="col-sm-6">
                     <input
                        type="password"
                        className="form-control"
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                     />
                  </div>
               </div>
               <br/>
               <div className="form-group row">
                  <label>Description:</label>
                  <div className="col-sm-6">
                     <textarea
                        className="form-control"
                        rows="3"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange}
                     ></textarea>
                  </div>
               </div>
               <br/>
               <div className="form-group row">
                  <label>Gender:</label>
                  <div className="col-sm-6">
                     <select
                        className="form-control"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleChange}
                     >
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                     </select>
                  </div>
               </div>
               <br/>
               <div className="form-check">
                  <label className="form-check-label">
                     <input
                        type="radio"
                        className="form-check-input"
                        name="language"
                        value="en"
                        onChange={this.handleChange}
                        checked={this.state.language === 'en'}
                     />
                     English
                  </label>
                  <br/>
                  <label className="form-check-label">
                     <input
                        type="radio"
                        className="form-check-input"
                        name="language"
                        value="vi"
                        onChange={this.handleChange}
                        checked={this.state.language === 'vi'}
                     />
                     Vietnamese
                  </label>
               </div>
               <div className="form-check">
                  <label className="form-check-label">
                     <input
                        type="checkbox"
                        className="form-check-input"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                        checked={this.state.status === true}
                     />
                     Status
                  </label>
               </div>
               <br/>
               <div className="form-group row">
                  <div className="offset-sm-2 col-sm-6">
                     <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                     <button type="reset" className="btn btn-default">Reset</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default Main