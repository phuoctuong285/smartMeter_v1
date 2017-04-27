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
	let param = {
		"Key":"MEMO",
		"Value":"123",
		"Target":[]
	}


	return (dispatch) => {
		dispatch(requestPutReportDetail(true))
		return $.ajax({
			url:`${apiUrl}/api/ReportDetails/`,
			type:'PUT',
			dataType:'json',
			data:JSON.stringify(param),
			contentType:'application/json',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			headers:{
				"Access-Control-Request-Method":"PUT",
				"Access-Control-Request-Headers":"Content-Type"
			},
			error:function() {
				console.log("Error")
			},
			complete:function(data) {
				console.log("Data")
			}
		})
	}


// var param = {
//     "Key":"MEMO",
//     "Value": self.note.value,
//     "Target": targets
//     };
//     $.ajax({
//     url: "/api/ReportDetails/",
//     type: 'PUT',
//     dataType: 'json',
//     data:JSON.stringify(param),
//     contentType:'application/json',
//     error: function () {
//     $("#loading").fadeOut(1);
//     $("#fade").fadeOut(1);
//     },
//     complete: function (data) {
//     $.toast({text:'更新しました',showHideTransition : 'slide',hideAfter : 1000});
//     rec = JSON.parse(data.responseText);
//     self.search();
//     self.tags.statuscontents.updateView();
//     $("#loading").fadeOut(1);
//     $("#fade").fadeOut(1);
//     },
//     });

}