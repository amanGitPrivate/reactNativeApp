import {combineReducers} from 'redux';
import EmployeeFormReducer from './employeeReducer';
import LoginReducer from './loginReducer';
import TodoReducer from './todoReducer';

export default combineReducers({
  employeeForm:EmployeeFormReducer,
  loginReducer:LoginReducer,
  TodoReducer:TodoReducer
});
