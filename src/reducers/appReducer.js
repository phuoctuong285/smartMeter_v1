import loginReducer from './login/loginReducer.js'
import reportsReducer from './reportsReducer.js'
import listUserReducer from './listUserReducer.js'
import {combineReducers} from 'redux'

const appReducer = combineReducers({
	loginReducer,
	listUserReducer,
	reportsReducer
})

export default appReducer
