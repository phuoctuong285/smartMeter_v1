import Axios from 'axios'
import {apiUrl} from '../app.config.js'
import {requestStaff,loadStaffSuccess, loadStaffError} from '../actions/listAction.js'

export default {
  getStaff: () => {
    return (dispatch) => {
  		dispatch(requestStaff(true))

  		return Axios.get(`${apiUrl}/api/Staffs`)
  			.then((response) => {
  				console.log(response.data)
  				dispatch(loadStaffSuccess(response.data))
  			})
  			.catch((error) => {
  				console.log(error)
  				dispatch(loadStaffError(error))
  			})
  	}
  }
}
