import * as types from '../constants/ActionTypes'
import _ from 'lodash'

var s4 = () => {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

var generateId = () => {
   return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + s4() + s4() + '-' + s4() + s4() + s4() + s4() + '-' + s4() + s4()
}

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : []

var myReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.SAVE_TASK:
         var task = {
            id: action.task.id,
            name: action.task.name,
            status: (action.task.status === 'true' || action.task.status === true) ? true : false
         }
         if (task.id === '') {
            task.id = generateId()
            state.push(task)
         } else {
            var indexSave = _.findIndex(state, (e) => {
               return e.id === task.id
            })
            state[indexSave] = task
         }
         localStorage.setItem('tasks', JSON.stringify(state))
         return [...state]

      case types.UPDATE_TASK_STATUS:
         var indexUpdate = _.findIndex(state, (e) => {
            return e.id === action.id
         })
         state[indexUpdate] = {
            ...state[indexUpdate],
            status: !state[indexUpdate].status
         }
         localStorage.setItem('tasks', JSON.stringify(state))
         return [...state]

      case types.DELETE_TASK:
         var indexDelete = _.findIndex(state, (e) => {
            return e.id === action.id
         })
         state.splice(indexDelete, 1)
         localStorage.setItem('tasks', JSON.stringify(state))
         return [...state]
      default:
         return state
   }
}

export default myReducer