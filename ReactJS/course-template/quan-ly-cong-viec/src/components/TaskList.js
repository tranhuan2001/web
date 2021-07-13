import React from 'react'
import ListItem from './ListItem'

class TaskList extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         filterName: '',
         filterStatus: -1,
      }
   }

   onChange = (event) => {
      var target = event.target
      var name = target.name
      var value = target.value
      this.props.onFilter(
         name === 'filterName' ? value : this.state.filterName,
         name === 'filterStatus' ? value : this.state.filterStatus
      )
      this.setState({
         [name]: value
      })
   }

   render() {
      // var {tasks} = this.props 
      var tasks = this.props.tasks
      var taskElement = tasks.map((task, index) => {
         return <ListItem
                  key={task.id}
                  index={index}
                  task={task}
                  onUpdateStatus={this.props.onUpdateStatus}
                  onDelete={this.props.onDelete}
                  onUpdate={this.props.onUpdate}
               />
      })

      return (
         <table className="table">
            <thead>
               <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td></td>
                  <td>
                     <input
                        type="text"
                        className="form-control"
                        name="filterName"
                        value={this.state.filterName}
                        onChange={this.onChange}
                     />
                  </td>
                  <td>
                     <select
                        className="form-control"
                        name="filterStatus"
                        value={this.state.filterStatus}
                        onChange={this.onChange}
                     >
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                     </select>
                  </td>
                  <td></td>
               </tr>
               {/* <ListItem /> */}
               {taskElement}
            </tbody>
         </table>
      )
   }
}

export default TaskList