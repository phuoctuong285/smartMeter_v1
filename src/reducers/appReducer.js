
import loginReducer from './loginReducer.js'
import reportDetailReducer from './reportDetailReducer.js'
import statusHistoryReducer from './statusHistoryReducer.js'
import fileListReducer from './fileListReducer.js'
import reportsReducer from './reportsReducer.js'
import listUserReducer from './listUserReducer.js'

import {combineReducers} from 'redux'

const appReducer = combineReducers({
	loginReducer,
	listUserReducer,
	reportsReducer,
	fileListReducer,
	statusHistoryReducer,
	reportDetailReducer
})

export default appReducer
