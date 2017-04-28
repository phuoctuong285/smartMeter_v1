import appConstants from '../constants/appConstant.js'

const reportDetailReducer = (state={response:[]},action) => {
	switch(action.type) {
		//GET REPORT DETAIL
		case appConstants.REQUEST_GET_REPORT_DETAIL:
			return {
				isLoading:action.isLoading
			}
		case appConstants.GET_REPORT_DETAIL_SUCCESS:
			return {
				isLoading:false,
				error:false,
				response:action.response.reduce((accumulator,currentValue,currentIndex) => {
					accumulator.push({
						key:currentIndex,
						...currentValue
					})
					return accumulator
				},[]),
				method:'GET'
			}			
		case appConstants.GET_REPORT_DETAIL_ERROR:
			return {
				isLoading:false,
				error:true,
				message:action.error.message || 'Something went wrong'
			}

		//PUT REPORT DETAIL	
		case appConstants.REQUEST_PUT_REPORT_DETAIL:
			return {
				isLoading:action.isLoading
			}
		case appConstants.PUT_REPORT_DETAIL_SUCCESS:
			return {
				isLoading:false,
				error:false,
				response:action.response,
				method:'PUT'
			}
		case appConstants.PUT_REPORT_DETAIL_ERROR:
			return {
				isLoading:false,
				error:true,
				message:action.error.message || 'Something went wrong'
			}

		default:
			return state	
	}
}

export default reportDetailReducer
