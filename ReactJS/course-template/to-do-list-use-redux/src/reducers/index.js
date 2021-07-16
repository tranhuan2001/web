import { combineReducers } from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import isEditTask from './isEditTask'
import filterTable from './filterTable'
import searchTask from './searchTask'
import sortTask from './sortTask'

const myReducer = combineReducers({
   tasks,
   isDisplayForm,
   isEditTask,
   filterTable,
   searchTask,
   sortTask,
})

export default myReducer