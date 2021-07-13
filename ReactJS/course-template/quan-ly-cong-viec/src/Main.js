import React from 'react'
import './Main.css'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import _ from 'lodash'

class Main extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         tasks: [],
         isDisplayForm: false,
         taskEditing: null,
         filter: {
            name: '',
            status: -1
         },
         keyword: '',
         sort: {
            by: 'name',
            value: 1
         }
      }
   }

   UNSAFE_componentWillMount() {
      if (localStorage.getItem('tasks')) {
         var tasks = JSON.parse(localStorage.getItem('tasks'))
         this.setState({
            tasks: tasks
         })
      }
   }

   s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
   }

   generateId() {
      return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4()
   }

   // generateData = () => {
   //    var tasks = [
   //       {
   //          id: this.generateId(),
   //          name: 'Học lập trình 1',
   //          status: true,
   //       },
   //       {
   //          id: this.generateId(),
   //          name: 'Học lập trình 2',
   //          status: false,
   //       },
   //       {
   //          id: this.generateId(), 
   //          name: 'Học lập trình 3',
   //          status: true,
   //       },
   //    ]
   //    this.setState({
   //       tasks: tasks
   //    })
   //    localStorage.setItem('tasks', JSON.stringify(tasks))
   // }

   toggleForm = () => {
      if (this.state.taskEditing !== null) {
         this.setState({
            isDisplayForm: true,
            taskEditing: null
         })
      } else {
         this.setState({
            isDisplayForm: !this.state.isDisplayForm,
            taskEditing: null
         })
      }
   }

   closeForm = () => {
      this.setState({
         isDisplayForm: false,
      })
   }

   handleSubmit = (data) => {
      // var task = {
      //    id: this.generateId(),
      //    name: data.name,
      //    status: data.status,
      // }
      var {tasks} = this.state
      if (data.id === '') {
         data.id = this.generateId()
         tasks.push(data)
      } else {
         var index = this.findIndex(data.id)
         tasks[index] = data
      }
      this.setState({
         tasks: tasks,
         taskEditing: null,
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
      this.closeForm()
   }

   findIndex = (id) => {
      var {tasks} = this.state
      var result = -1
      tasks.forEach((task, index) => {
         if (task.id === id) {
            result = index
         }
      })
      return result
   }

   onUpdateStatus = (id) => {
      var {tasks} = this.state
      // var index = this.findIndex(id)
      // find by lodash
      var index = _.findIndex(tasks, (task) => {
         return task.id === id
      })
      if (index !== -1) {
         tasks[index].status = !tasks[index].status
         this.setState({
            tasks: tasks
         })
         localStorage.setItem('tasks', JSON.stringify(tasks))
      }
   }

   onDelete = (id) => {
      var {tasks} = this.state
      var index = this.findIndex(id)
      if (index !== -1) {
         var newTasks = [...tasks]
         newTasks.splice(index, 1)
         this.setState({
            tasks: newTasks
         })
         localStorage.setItem('tasks', JSON.stringify(newTasks))
      }
   }

   onUpdate = (id) => {
      var {tasks} = this.state
      var index = this.findIndex(id)
      if (index !== -1) {
         this.setState({
            isDisplayForm: true,
            taskEditing: tasks[index],
         })
      }
   }

   onFilter = (filterName, filterStatus) => {
      filterStatus = parseInt(filterStatus, 10)
      this.setState({
         filter: {
            name: filterName.toLowerCase(),
            status: filterStatus
         }
      })
   }

   onSearch = (keyword) => {
      this.setState({
         keyword: keyword
      })
   }

   onSortClick = (data) => {
      if (data) {
         this.setState({
            sort: {
               by: data.by,
               value: data.value
            }
         })
      }
   }

   render() {
      var {tasks, isDisplayForm, taskEditing, filter, keyword, sort} = this.state // var tasks = this.state.tasks
      
      if (filter) {
         if (filter.name) {
            tasks = tasks.filter((task) => {
               return task.name.toLowerCase().indexOf(filter.name) !== -1
            })
         }
         tasks = tasks.filter((task) => {
            if (filter.status === -1) {
               return task
            } else {
               return task.status === (filter.status === 1 ? true : false)
            }
         })
      }

      if (keyword) {
         tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword) !== -1
         })
      }

      if (sort.by === 'name') {
         tasks.sort((a, b) => {
            if (a.name > b.name) return sort.value
            else if (a.name < b.name) return -sort.value
            else return 0
         })
      } else {
         tasks.sort((a, b) => {
            if (a.status < b.status) return sort.value
            else if (a.status > b.status) return -sort.value
            else return 0
         })
      }

      var taskFormElement = isDisplayForm
         ? <TaskForm
               closeForm={this.closeForm}
               submit={this.handleSubmit}
               onUpdate={this.onUpdate}
               taskEditing={taskEditing}
            />
         : ''

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
                     onClick={this.toggleForm}
                  >
                     <i className="fas fa-plus"></i>&nbsp;
                     Thêm Công Việc
                  </button>&nbsp;
                  {/* <button type="button" className="btn btn-success" onClick={this.generateData}>
                     Generate Data
                  </button> */}
                  <br/>
                  <Control onSearch={this.onSearch} onSortClick={this.onSortClick} />
                  <br/>
                  <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList
                           tasks={tasks}
                           onUpdateStatus={this.onUpdateStatus}
                           onDelete={this.onDelete}
                           onUpdate={this.onUpdate}
                           onFilter={this.onFilter}
                        />   
                     </div>
                  </div>
               </div>
               {/* End show */}
            </div>
         </div>
      )
   }
}

export default Main