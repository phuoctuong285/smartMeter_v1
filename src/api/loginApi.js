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
				}
			})
			.then((response) => {
				console.log(response.data)
				dispatch(loginSuccess(response.data))
			})
			.catch((error) => {
				console.log(error)
				dispatch(loginError(error))
			})
	}
}

