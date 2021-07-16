import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends React.Component {
   handleToggleForm = () => {
      var {taskEditing} = this.props
      if (taskEditing && taskEditing.id !== '') {
         this.props.onOpenForm()
      } else {
         this.props.onToggleForm()
      }
      this.props.onClearTask({
         id: '',
         name: '',
         status: false
      })
   }

   render() {
      var { isDisplayForm } = this.props

      var taskFormElement = isDisplayForm ? <TaskForm /> : ''

      return (
         <div className="container mt-20">
            <div className="text-center">
               <h1>Quản Lý Công Việc</h1>
            </div>
            <hr/>
            <div className="row">
               {/* Form add work */}
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  {/* <TaskForm /> */}
                  {taskFormElement}
               </div>
               {/* End form add work */}

               {/* Show */}
               <div
                  className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}
               >
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={this.handleToggleForm}
                  >
                     <i className="fas fa-plus"></i>&nbsp;
                     Thêm Công Việc
                  </button>&nbsp;
                  <br/>
                  <Control />
                  <br/>
                  <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList />
                     </div>
                  </div>
               </div>
               {/* End show */}
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      isDisplayForm: state.isDisplayForm,
      taskEditing: state.isEditTask
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onToggleForm: () => {
         dispatch(actions.toggleForm())
      },
      onClearTask: (task) => {
         dispatch(actions.editTask(task))
      },
      onOpenForm: () => {
         dispatch(actions.openForm())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
