import {apiUrl} from '../app.config.js'
import {requestLogin,loginSuccess,loginError} from '../actions/loginAction.js'

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
									dispatch(loginSuccess(data.data))
							},
							error:function(error){
									dispatch(loginError(error))
							}})
	}
}
