import {apiUrl} from '../app.config.js'
import {requestLogin,loginSuccess,loginError} from '../actions/loginAction.js'
import $ from 'jquery'

export const Login = (user) => {
	return (dispatch) => {
		dispatch(requestLogin(true))
		return $.ajax({type:'GET',
								url:`${apiUrl}/api/Login?id=${user.id}&password=${user.password}`,
								xhrFields: {
        					withCredentials: true
    						},
								crossDomain: true,
								success:function(data, textStatus, request){
										console.log(data[0])
										window.localStorage.setItem('staff_Code',data[0].staff_Code)
										window.localStorage.setItem('staff_Name',data[0].staff_Name)
										dispatch(loginSuccess(data[0]))
								},
								error:function(error){
											console.log(error)
											dispatch(loginError(error))
								}})

	}
}
