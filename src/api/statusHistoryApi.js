import {apiUrl} from '../app.config.js'
import {requestGetStatusHistory,getStatusHistorySuccess,getStatusHistoryError} from '../actions/statusHistoryApi.js'

export const GetStatusHistory = (id) => {
	return (dispatch) => {
		dispatch(requestGetStatusHistory())
		return $.ajax({
			url:`${apiUrl}/api/StatusHistories/${id}`,
			type:'GET',
			success:(data) => {
				console.log("Get Status History Success",data)
				dispatch(getStatusHistorySuccess(data))
			},
			error:(error) => {
				console.log(error)
				dispatch(getStatusHistoryError(error))
			}
		})
	}
}