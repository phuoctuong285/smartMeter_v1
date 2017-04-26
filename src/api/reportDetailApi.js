import {apiUrl} from '../app.config.js'
import {requestGetReportDetail,getReportDetailSuccess,getReportDetailError} from '../actions/reportDetailAction.js'

export const GetReportDetail = (id) => {
	return (dispatch) => {
		dispatch(requestGetReportDetail())
		return $.ajax({
			url:`${apiUrl}/api/ReportDetails/${id}`
			type:'GET',
			success:(data) => {
				console.log("Get Report Detail Success",data)
				dispatch(getReportDetailSuccess(data))
			},
			error:(error) => {
				console.log(error)
				dispatch(getReportDetailError(error))
			}
		})
	}
}