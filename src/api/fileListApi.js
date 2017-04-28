import {apiUrl} from '../app.config.js'
import {requestGetFileList,getFileListSuccess,getFileListError} from '../actions/fileListAction.js'

export const GetFileList = (id) => {
	return (dispatch) => {
		dispatch(requestGetFileList(true))
		return $.ajax({
			url:`${apiUrl}/api/FileLists/${id}`,
			type:'GET',
			xhrFields:{
				withCredentials:true
			},
			crossDomain:true,
			success:(data) => {
				dispatch(getFileListSuccess(data))
			},
			error:(error) => {
				dispatch(getFileListError(error))
			}
		})
	}
}