import {apiUrl} from '../app.config.js'
import {requestGetStatusHistory,getStatusHistorySuccess,getStatusHistoryError} from '../actions/statusHistoryAction.js'
import Storage,{checkValidToken} from '../helpers/storage.js'

export const GetStatusHistory = (id,keyword='') => {
	return (dispatch) => {
		dispatch(requestGetStatusHistory(true))
		return checkValidToken()
				.then((value) => {
					$.ajax({
						url:`${apiUrl}/api/StatusHistories/${id}`,
						headers:{'Authorization':`Bearer ${Storage.getAccessToken()}`},
						data:{
							keyword:keyword
						},
						type:'GET',
						success:(data) => {
							dispatch(getStatusHistorySuccess(data))
						},
						error:(error) => {
							dispatch(getStatusHistoryError(error))
						}
					})
				})
				.catch((error) => {
					dispatch(getStatusHistoryError({
						message:'Refresh Token Expired'
					}))
				})
	}
}