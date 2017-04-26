import {apiUrl} from '../app.config.js'
import {requestGetFileList,getFileListSuccess,getFileListError} from '../actions/fileListAction.js'

export const GetFileList = (id) => {
	dispatch(requestGetFileList())
	return (dispatch) => {
		return $.ajax({
			url:`${apiUrl}/api/FileList/${id}`,
			type:'GET',
			success:(data) => {
				console.log("Get File List Success",data)
				dispatch(getFileListSuccess(data))
			},
			error:(error) => {
				console.log(error)
				dispatch(getFileListError(error))
			}
		})
	}
}