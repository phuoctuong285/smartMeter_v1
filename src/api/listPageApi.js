import {apiUrl} from '../app.config.js'
import {requestStaff,loadStaffSuccess, loadStaffError,loadReports,loadReportsSuccess,loadReportsError } from '../actions/listAction.js'
import $ from 'jquery'

export default {
  getStaff: () => {
    return (dispatch) => {
  		dispatch(requestStaff(true))
      return $.ajax({ type:'GET',
                      url:`${apiUrl}/api/Staffs`,
                      xhrFields: {
              					withCredentials: true
          						},
                      dataType: "json",
                      crossDomain: true,
                      error:function(xhr,status,error) {
                        dispatch(loadStaffError(error))
                      },
                      success:function(data,status,xhr) {
                        dispatch(loadStaffSuccess(data))
                      }
                    })
                  }},

      getListReports: (params) => {
        return (dispatch) => {
              dispatch(loadReports(true))
               return $.ajax({ type:'GET',
                              url:`${apiUrl}/api/Reports`,
                              data:{
                                filter:params.filter,
                                staff:params.staff,
                                targetDate:params.targetDate
                              },
                              xhrFields: {
                      					withCredentials: true
                  						},
                              dataType: "json",
                              crossDomain: true,
                              error:function(xhr,status,error) {
                                console.log(error)
                                dispatch(loadReportsError(error))

                              },
                              success:function(data,status,xhr) {
                                console.log(data)
                                dispatch(loadReportsSuccess(data))
                              }
                            })

        }
          }}
