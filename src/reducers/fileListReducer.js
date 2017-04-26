import appConstants from '../../constants/appConstants.js'

const fileListReducer = (state={},action) => {
	switch(action.type) {
		case appConstants.REQUEST_GET_REPORT_DETAIL:
			return {
				isLoading:action.isLoading
			}
		case appConstants.GET_REPORT_DETAIL_SUCCESS:
			return {
				isLoading:false,
				error:false,
				response:action.response
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