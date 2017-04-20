import loginReducer from './login/loginReducer.js'
import {combineReducers} from 'redux'

const appReducer = combineReducers({
	loginReducer
})

export default appReducer