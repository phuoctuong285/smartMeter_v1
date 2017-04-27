import {apiUrl} from '../app.config.js'
import {requestGetReportDetail,getReportDetailSuccess,getReportDetailError,
		requestPutReportDetail,putReportDetailSuccess,putReportDetailError} from '../actions/reportDetailAction.js'

import axios from 'axios'

export const GetReportDetail = (id) => {
	return (dispatch) => {
		dispatch(requestGetReportDetail(true))
		return $.ajax({
			url:`${apiUrl}/api/ReportDetails/${id}`,
			type:'GET',
			xhrFields:{
				withCredentials:true
			},
			success:(data) => {
				dispatch(getReportDetailSuccess(data))
			},
			error:(error) => {
				dispatch(getReportDetailError(error))
			}
		})
	}
}

export const PutReportDetail = (key,target,value) => {
	let obj = {
		Key:key,
		Value:value,
		Target:['1111-012'],
	}
	console.log(JSON.stringify(obj))
	return (dispatch) => {
		dispatch(requestPutReportDetail(true))
		return $.ajax({
			url:`${apiUrl}/api/ReportDetails`,
			type:'PUT',
			xxhrFields: {
      			withCredentials: true
   			},
			crossDomain:true,
			headers:{
				'Content-Type':'application/json'
			},
			contentType:'application/json; charset=utf-8',
			data:JSON.stringify({
				Key:"STATUS",
				Value:"0",
				Target:["1"]
			}),
			success:(data) => {
				dispatch(putReportDetailSuccess(data))
			},
			error:(error) => {
				dispatch(putReportDetailError(error))
			}
		})

	}
}