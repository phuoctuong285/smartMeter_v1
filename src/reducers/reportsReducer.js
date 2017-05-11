import appConstant from '../constants/appConstant.js'

let initState = {isLoading:false,error:false,reports:[]}

const reportsReducer = (state=initState,action) => {
	switch(action.type) {

			case appConstant.LOAD_REPORTS:
				return {
					...state,
					isLoading:action.isLoading,
				}
			case appConstant.LOAD_REPORTS_SUCCESS:
				return {
					...state,
					isLoading:false,
					error:false,
					reports:action.data
				}
			case appConstant.LOAD_REPORTS_ERROR:
				return {
					...state,
					isLoading:false,
					error:true,
					message:action.error || 'Something went wrong'
				}

			default:
				return state
	}
}

export default reportsReducer
