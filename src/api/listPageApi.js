import {apiUrl} from '../app.config.js'
import {requestStaff,loadStaffSuccess, loadStaffError} from '../actions/listAction.js'
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
                      crossDomain: true,
                      error:function(xhr,status,error) {
                        console.log(xhr)
                        dispatch(loadStaffError(error))
                      },
                      success:function(data,status,xhr) {
                        console.log(data)
                        dispatch(loadStaffSuccess(data))
                      }
                    })
  }
}
}
