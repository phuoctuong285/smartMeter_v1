import {apiUrl} from '../app.config.js'
import {requestStaff,loadStaffSuccess, loadStaffError,loadReports,loadReportsSuccess,loadReportsError } from '../actions/listAction.js'
import Storage,{checkValidToken} from '../helpers/storage.js'

export default {
    getStaff: () => {
      return (dispatch) => {
    		dispatch(requestStaff(true))
        return checkValidToken()
                .then((value) => {
                    $.ajax({ 
                      type:'GET',
                      url:`${apiUrl}/api/Staffs`,
                      headers:{'Authorization':`Bearer ${Storage.getAccessToken()}`},
                      error:function(xhr,status,error) {
                        dispatch(loadStaffError(error))
                      },
                      success:function(data,status,xhr) {
                        dispatch(loadStaffSuccess(data))
                      }
                    })
                })
                .catch((error) => {
                    dispatch(loadStaffError({
                      error:'Refresh Token Expired'
                    }))
                })
        }},

    getListReports: (params) => {
      return (dispatch) => {
            dispatch(loadReports(true))
             return checkValidToken()
                      .then((value) => {
                          $.ajax({ 
                            type:'GET',
                            url:`${apiUrl}/api/Reports`,
                            headers:{'Authorization':`Bearer ${Storage.getAccessToken()}`},
                            data:{
                              filter:params.filter,
                              staff:params.staff,
                              targetDate:params.targetDate
                            },
                            error:function(xhr,status,error) {
                              dispatch(loadReportsError(error))
                            },
                            success:function(data,status,xhr) {
                              dispatch(loadReportsSuccess(data))
                            }
                          })
                      })
                      .catch((error) => {
                          dispatch(loadReportsError({
                            error:'Refresh Token Expired'
                          }))
                      })

        }
          }}
