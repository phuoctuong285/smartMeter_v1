import appConstant from '../../constants/appConstant.js'

const loginReducer = (state={},action) => {
	switch(action.type) {
			case appConstant.REQUEST_LOGIN:
				return {
					isLoading:action.isLoading
				}
			case appConstant.LOGIN_SUCCESS:
				return {
					isLoading:false,
					error:false,
					response:action.response
				}
			case appConstant.LOGIN_ERROR:
				return {
					isLoading:false,
					error:true,
					message:action.error.message || 'Something went wrong'
				}
			default:
				return state
	}
}

export default loginReducer