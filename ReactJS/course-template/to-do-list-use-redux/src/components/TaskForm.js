import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class TaskForm extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         id: '',
         name: '',
         status: false,
      }
   }
   
   UNSAFE_componentWillMount() {
      if (this.props.taskEditing) {
         this.setState({
            id: this.props.taskEditing.id,
            name: this.props.taskEditing.name,
            status: this.props.taskEditing.status,
         })
      }
   }

   handleClearForm = () => {
      this.setState({
         id: '',
         name: '',
         status: false,
      })
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps && nextProps.taskEditing) {
         this.setState({
            id: nextProps.taskEditing.id,
            name: nextProps.taskEditing.name,
            status: nextProps.taskEditing.status,
         })
      } else if (!nextProps.taskEditing) {
         this.handleClearForm()
      }
   }

   handleCloseForm = () => {
      this.props.onCloseForm()
   }

   handleChange = (event) => {
      var target = event.target
      var name = target.name
      var value = target.value
      if (name === 'status') {
         value = target.value === 'true' ? true : false
      }
      this.setState({
         [name]: value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.onSaveTask(this.state)
      this.handleClearForm()
      this.handleCloseForm()
   }

   render() {
      return (
         <div className="panel">
            <div className="panel-heading">
               <h4>{this.state.id !== '' ? 'Sửa Công Việc' : 'Thêm Công Việc'}</h4>
               <i
                  className="far fa-times-circle"
                  onClick={this.handleCloseForm}
               ></i>
            </div>
            <div className="panel-body">
               <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <label>Tên:</label>
                     <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                     />
                  </div>
                  <br/>
                  <div className="form-group">
                     <label>Trạng Thái:</label>
                     <select
                        className="form-control"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                     >
                        <option value={true}>Kích hoạt</option>
                        <option value={false}>Ẩn</option>
                     </select>
                  </div>
                  <br/>
                  <div className="text-center">
                     <button type="submit" className="btn btn-success">
                        <i className="fas fa-plus"></i>&nbsp;
                        Lưu Lại
                     </button>&nbsp;
                     <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.handleClearForm}
                     >
                        <i className="fas fa-times"></i>&nbsp;
                        Hủy Bỏ
                     </button>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      taskEditing: state.isEditTask
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onSaveTask: (task) => {
         dispatch(actions.saveTask(task))
      },
      onCloseForm: () => {
         dispatch(actions.closeForm())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)