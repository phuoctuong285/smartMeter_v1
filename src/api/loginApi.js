import {apiUrl} from '../app.config.js'
import {requestLogin,loginSuccess,loginError} from '../actions/loginAction.js'
import Storage from '../helpers/storage.js'
import moment from 'moment'

export const Login = (user) => {
	return (dispatch) => {
		dispatch(requestLogin(true))
		return $.ajax({type:'POST',
							url:`${apiUrl}/api/login`,
							contentType:'application/x-www-form-urlencoded;charset=UTF-8',
							xhrFields:{
								withCredentials:true
							},
							crossDomain:true,
							data:{
								username:user.id,
								password:user.password
							},
							success:function(data){
								Storage.setAccessToken(data.access_token)
								Storage.setExpireAccessToken(moment().add(data.expires_in,'s').format('YYYY-MM-DD HH:mm:ss'))
								Storage.setStaffName(data.staff_Name)
								dispatch(loginSuccess(
									{
										'staff_Code':data.staff_Code,
										'staff_Name':data.staff_Name
									}
								))
							},
							error:function(xhr,status,error){
								dispatch(loginError({
									message:error
								}))
							}})
	}
}
