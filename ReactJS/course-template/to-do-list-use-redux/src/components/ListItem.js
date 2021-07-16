import React from 'react'
import * as actions from '../actions/index'
import { connect } from 'react-redux'

class ListItem extends React.Component {
   handleUpdateTaskStatus = () => {
      this.props.onUpdateTaskStatus(this.props.task.id)
   }

   handleDeleteTask = () => {
      this.props.onDeleteTask(this.props.task.id)
   }

   handleEditTask = () => {
      this.props.onOpenForm()
      this.props.onEditTask(this.props.task)
   }

   render() {
      var {task, index} = this.props

      return (
         <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
               <span
                  className={task.status ? 'label label-success' : 'label label-danger'}
                  onClick={this.handleUpdateTaskStatus}
               >
                  {task.status ? 'Kích Hoạt' : 'Ẩn'}
               </span>
            </td>
            <td className="text-center">
               <button
                  type="button"
                  className="btn btn-warning"
                  onClick={this.handleEditTask}
               >
                  <i className="far fa-edit"></i>&nbsp;
                  Sửa
               </button>&nbsp;
               <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.handleDeleteTask}
               >
                  <i className="fas fa-trash"></i>&nbsp;
                  Xóa
               </button>
            </td>
         </tr>
      )
   }
}

const mapStateToProps = state => {
   return {

   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onUpdateTaskStatus: (id) => {
         dispatch(actions.updateTaskStatus(id))
      },
      onDeleteTask: (id) => {
         dispatch(actions.deleteTask(id))
      },
      onOpenForm: () => {
         dispatch(actions.openForm())
      },
      onEditTask: (task) => {
         dispatch(actions.editTask(task))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)