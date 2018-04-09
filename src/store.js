import {createStore} from 'redux';
import data from './employees.json';
import users from './users.json';

const reducer = (state, action) =>{
    switch (action.type) {
      case "LOG_IN":
        return{
          ...state,
          user: users.find(user =>
            ((user.mail == action.user.mail) &&
            (user.password == action.user.password))
          )
        }
        break;
      case "SAVE_EMPLOYEE":
        const employeeId = action.employee.id - 1
         data[employeeId]= {
           ...action.employee
         }
        const newState = {...state}
        newState.data[employeeId] = action.employee
        return state
        break;
      default:
        return state
      }
}
export default createStore(reducer, {data: data, users: users, user: null},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
