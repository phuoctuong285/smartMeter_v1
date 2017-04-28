import appConstants from '../constants/appConstant.js'

const fileListReducer = (state={response:[]},action) => {
	switch(action.type) {
		case appConstants.REQUEST_GET_REPORT_DETAIL:
			return {
				isLoading:action.isLoading
			}
		case appConstants.GET_REPORT_DETAIL_SUCCESS:
			return {
				isLoading:false,
				error:false,
				response:action.response,
				method:'GET'
			}
		case appConstants.GET_REPORT_DETAIL_ERROR:
			return {
				isLoading:false,
				error:true,
				message:action.error.message || 'Something went wrong'
			}	
		default:
			return state
	}
}

export default fileListReducer