import loginReducer from './loginReducer.js'
import listReducer from './listReducer.js'
import reportDetailReducer from './reportDetailReducer.js'
import statusHistoryReducer from './statusHistoryReducer.js'
import fileListReducer from './fileListReducer.js'
import {combineReducers} from 'redux'

const appReducer = combineReducers({
	loginReducer,
	listReducer,
	reportDetailReducer,
	fileListReducer,
	statusHistoryReducer
})

export default appReducer
