import Axios from 'axios'
import {apiUrl} from '../app.config.js'
import {requestLogin,loginSuccess,loginError} from '../actions/loginAction.js'

export const Login = (user) => {
	return (dispatch) => {
		dispatch(requestLogin(true))
	
		return Axios.get(`${apiUrl}/api/Login`,{
				params: {
					id:user.id,
					password:user.password
				},
				withCredentials:true
			})
			.then((response) => {//alert(response.headers)
				console.log(response)
				dispatch(loginSuccess(response.data))
			})
			.catch((error) => {
				dispatch(loginError(error))
			})
	}
}

