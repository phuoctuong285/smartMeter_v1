import {apiUrl} from '../app.config.js'
import {requestGetStatusHistory,getStatusHistorySuccess,getStatusHistoryError} from '../actions/statusHistoryAction.js'

export const GetStatusHistory = (id,keyword='') => {
	return (dispatch) => {
		dispatch(requestGetStatusHistory(true))
		return $.ajax({
			url:`${apiUrl}/api/StatusHistories/${id}`,
			data:{
				keyword:keyword
			},
			type:'GET',
			xhrFields:{
				withCredentials:true
			},
			success:(data) => {
				dispatch(getStatusHistorySuccess(data))
			},
			error:(error) => {
				dispatch(getStatusHistoryError(error))
			}
		})
	}
}