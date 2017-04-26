import appConstants from '../constants/appConstants.js'

export const requestGetReportDetail = () => {
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