
import loginReducer from './loginReducer.js'
import listReducer from './listReducer.js'
import reportDetailReducer from './reportDetailReducer.js'
import statusHistoryReducer from './statusHistoryReducer.js'
import fileListReducer from './fileListReducer.js'
import reportsReducer from './reportsReducer.js'
import listUserReducer from './listUserReducer.js'

import {combineReducers} from 'redux'

const appReducer = combineReducers({
	loginReducer,
	listReducer,
	reportDetailReducer,
	fileListReducer,
	statusHistoryReducer
	listUserReducer,
	reportsReducer
})

export default appReducer
