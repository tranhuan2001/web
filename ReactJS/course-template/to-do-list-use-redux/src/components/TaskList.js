import React from 'react'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class TaskList extends React.Component {
   handleChange = (event) => {
      var target = event.target
      var name = target.name
      var value = target.value
      
      var filter = {
         name: name === 'filterName' ? value : this.props.filterTable.name,
         status: name === 'filterStatus' ? value : this.props.filterTable.status
      }
      this.props.onFilterTable(filter)
   }

   render() {
      var { tasks, filterTable, keyword, sort } = this.props
      
      // filter on table
      if (filterTable) {
         if (filterTable.name) {
            tasks = tasks.filter((task) => {
               return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            })
         }
         tasks = tasks.filter((task) => {
            if (filterTable.status === -1) {
               return task
            } else {
               return task.status === (filterTable.status === 1 ? true : false)
            }
         })
      }

      // search
      if (keyword) {
         tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword) !== -1
         })
      }

      // sort
      if (sort.by === 'name') {
         tasks.sort((a, b) => {
            if (a.name > b.name) return sort.value
            else if (a.name < b.name) return -sort.value
            else return 0
         })
      } else {
         tasks.sort((a, b) => {
            // if (a.status < b.status) return sort.value
            // else if (a.status > b.status) return -sort.value
            // else return 0
            return a.status > b.status ? -sort.value : sort.value
         })
      }

      var taskElement = tasks.map((task, index) => {
         return <ListItem
                  key={task.id}
                  index={index}
                  task={task}
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
                        value={this.props.filterTable.name}
                        onChange={this.handleChange}
                     />
                  </td>
                  <td>
                     <select
                        className="form-control"
                        name="filterStatus"
                        value={this.props.filterTable.status}
                        onChange={this.handleChange}
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

const mapStateToProps = (state) => {
   return {
      tasks: state.tasks,
      filterTable: state.filterTable,
      keyword: state.searchTask,
      sort: state.sortTask
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onFilterTable: (filter) => {
         dispatch(actions.filterTable(filter))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)