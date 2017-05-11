import appConstants from '../constants/appConstant.js'

export const requestGetReportDetail = (isFlag) => {
	return {
		type:appConstants.REQUEST_GET_REPORT_DETAIL,
		isLoading:isFlag
	}
}

export const getReportDetailSuccess = (detail) => {
	return {
		type:appConstants.GET_REPORT_DETAIL_SUCCESS,
		response:detail
	}
}

export const getReportDetailError = (error) => {
	return {
		type:appConstants.GET_REPORT_DETAIL_ERROR,
		error:error
	}
}

export const requestPutReportDetail = (isFlag) => {
	return {
		type:appConstants.REQUEST_PUT_REPORT_DETAIL,
		isLoading:isFlag
	}
}

export const putReportDetailSuccess = (data) => {
	return {
		type:appConstants.PUT_REPORT_DETAIL_SUCCESS,
		response:data
	}
}

export const putReportDetailError = (error) => {
	return {
		type:appConstants.PUT_REPORT_DETAIL_ERROR,
		error:error
	}
}