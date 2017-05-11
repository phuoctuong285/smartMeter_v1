import {apiUrl} from '../app.config.js'
import {requestGetReportDetail,getReportDetailSuccess,getReportDetailError,
		requestPutReportDetail,putReportDetailSuccess,putReportDetailError} from '../actions/reportDetailAction.js'
import Storage,{checkValidToken} from '../helpers/storage.js'

export const GetReportDetail = (id) => {
	return (dispatch) => {
		dispatch(requestGetReportDetail(true))
		return checkValidToken()
				.then((value) => {
					$.ajax({
						url:`${apiUrl}/api/ReportDetails/${id}`,
						type:'GET',
						headers:{'Authorization':`Bearer ${Storage.getAccessToken()}`},
                      	success:(data) => {
                      		dispatch(getReportDetailSuccess(data))
						},
						error:(error) => {
							dispatch(getReportDetailError(error))
						}
					})
				})
				.catch((error) => {
					dispatch(getReportDetailError({
						message:'Refresh Token Expired'
					}))
				})
	}
}

export const PutReportDetail = (key,target,values) => {
	return (dispatch) => {
		dispatch(requestPutReportDetail(true))
		return checkValidToken()
				.then((value) => {
					$.ajax({
						url:`${apiUrl}/api/ReportDetails/`,
						type:'PUT',
						headers:{'Authorization':`Bearer ${Storage.getAccessToken()}`},
						data:JSON.stringify({
							Key:key,
							Target:target,
							Value:values
						}),
						contentType:'application/json',
						success:(data) => {
							dispatch(putReportDetailSuccess(data))
						},
						error:(error) => {
							dispatch(putReportDetailError(error))
						}
					})
				})
				.catch((error) => {
					dispatch(putReportDetailError({
						message:'Refresh Token Expired'
					}))
				})
	}
}