import loginReducer from './login/loginReducer.js'
import listReducer from './listReducer.js'
import {combineReducers} from 'redux'

const appReducer = combineReducers({
	loginReducer,
	listReducer
})

export default appReducer
