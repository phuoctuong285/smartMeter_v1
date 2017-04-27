import appConstants from '../constants/appConstant.js'

export const requestGetStatusHistory = (isFlag) => {
	return {
		type:appConstants.REQUEST_GET_STATUS_HISTORY,
		isLoading:isFlag
	}
}

export const getStatusHistorySuccess = (status) => {
	return {
		type:appConstants.GET_STATUS_HISTORY_SUCCESS,
		response:status
	}
}

export const getStatusHistoryError = (error) => {
	return {
		type:appConstants.GET_STATUS_HISTORY_ERROR,
		error:error
	}
}