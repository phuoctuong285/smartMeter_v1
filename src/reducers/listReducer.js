import appConstant from '../constants/appConstant.js'

let initState = {isLoading:false,error:false}

const listReducer = (state=initState,action) => {
	switch(action.type) {
			case appConstant.REQUEST_LOAD_STAFF:
				return {
					isLoading:action.isLoading
				}
			case appConstant.LOAD_STAFF_SUCCESS:
				return {
					isLoading:false,
					error:false,
					data:action.data
				}
			case appConstant.LOAD_STAFF_ERROR:
				return {
					isLoading:false,
					error:true,
					message:action.error.message || 'Something went wrong'
				}
			default:
				return state
	}
}

export default listReducer
