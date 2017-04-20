import appConstant from '../../constants/appConstant.js'

const loginReducer = (state={},action) => {
	switch(action.type) {
			case appConstant.LOGIN_SUCCESS:
				return {
					error:false,
					response:action.user
				}
			case appConstant.LOGIN_ERROR:
				return {
					error:true,
					message:action.error.message
				}
			default:
				return state
	}
}

export default loginReducer