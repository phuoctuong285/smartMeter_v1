import appConstant from '../constants/appConstant.js'

let initState = {isLoading:false,error:false,users:[]}

const listUserReducer = (state=initState,action) => {
	switch(action.type) {
			case appConstant.REQUEST_LOAD_STAFF:
				return {
					...state,
					isLoading:action.isLoading
				}
			case appConstant.LOAD_STAFF_SUCCESS:
				return {
					...state,
					isLoading:false,
					error:false,
					users:action.data
				}
			case appConstant.LOAD_STAFF_ERROR:
				return {
					...state,
					isLoading:false,
					error:true,
					message:action.error.message || 'Something went wrong'
				}
			default:
				return state
	}
}

export default listUserReducer
