import Axios from 'axios'
import {apiUrl} from '../app.config.js'
import {loginSuccess,loginError} from '../actions/loginAction.js'

export const Login = (user) => {
	return (dispatch) => {
		return Axios.get(`${apiUrl}/api/Login`,{
				id:user.id,
				password:user.password
			})
			.then((response) => {
				console.log(response)
				dispatch(loginSuccess(response))
			})
			.catch((error) => {
				console.log(error)
				dispatch(loginError(error))
			})
	}
}

