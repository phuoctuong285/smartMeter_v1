import appConstant from '../constants/appConstant.js'

export const requestLogin = (isFlag) => {
	return {
		type:appConstant.REQUEST_LOGIN,
		isLoading:isFlag
	}
}

export const loginSuccess = (user) => {
	return {
		type:appConstant.LOGIN_SUCCESS,
		response:user
	}
}

export const loginError = (error) => {
	return {
		type:appConstant.LOGIN_ERROR,
		error:error
	}
}