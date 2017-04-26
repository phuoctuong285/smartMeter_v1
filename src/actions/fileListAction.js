import appConstants from '../constants/appConstants.js'

export const requestGetFileList = (isFlag) => {
	return {
		type:appConstants.REQUEST_GET_FILE_LIST,
		isLoading:isFlag
	}
}

export const getFileListSuccess = (fileList) => {
	return {
		type:appConstants.GET_FILE_LIST_SUCCESS,
		response:fileList
	}
}

export const getFileListError = (error) => {
	return {
		type:appConstants.GET_FILE_LIST_ERROR,
		error:error
	}
}