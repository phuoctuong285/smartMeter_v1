import appConstants from '../constants/appConstant.js'

const statusHistoryReducer = (state={response:[]},action) => {
	switch(action.type) {
		case appConstants.REQUEST_GET_STATUS_HISTORY:
			return {
				isLoading:action.isLoading
			}
		case appConstants.GET_STATUS_HISTORY_SUCCESS:
			return {
				isLoading:false,
				error:false,
				response:action.response.reduce((accumulator,currentValue,currentIndex) => {
					accumulator.push({
						id:currentIndex,
						...currentValue
						})
					return accumulator
				},[]),
				method:'GET'
			}
		case appConstants.GET_STATUS_HISTORY_ERROR:
			return {
				isLoading:false,
				error:true,
				message:action.error.message || 'Something went wrong'
			}
		default:
			return state
	}
}

export default statusHistoryReducer