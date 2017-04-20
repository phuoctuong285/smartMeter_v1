import React from 'react'
import {Toolbar,Page,Button,BackButton,List,ListItem,ListHeader} from 'react-onsenui'
import LoginPage from './LoginPage.react.js'
import ListPageContainer from '../list/ListPageContainer.react.js'
import autoBind from 'react-autobind'
import {connect} from 'react-redux'
import {Login} from '../../api/loginApi.js'

class LoginPageContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username:'',
			password:'',
			message:'',
			isAlert:false
		}
		autoBind(this)
	}

	handleUserNameChange(e) {
		this.setState({
			username:e.target.value
		})
	}

	handlePasswordChange(e) {
		this.setState({
			password:e.target.value
		})
	}

	handleLogin() {
		const {username,password} = this.state
		// const {dispatch} = this.props

		// if(username !== 'admin' && password !== '1234') {
		// 	Login({
		// 		id:username,
		// 		password:password
		// 	})
		// } else {
		// 	this.props.navigator.pushPage({component:ListPageContainer});
		// }
	}

	handleHideAlert() {
		this.setState({
			message:'',
			isAlert:false
		})
	}

	render() {
		return (
			<LoginPage {...this.props}
				{...this.state}
				handleUserNameChange={this.handleUserNameChange}
				handlePasswordChange={this.handlePasswordChange}
				handleLogin={this.handleLogin}
				handleHideAlert={this.handleHideAlert}/>
		)
	}
}
export default LoginPageContainer
// export default connect(
// 	state => ({loginInform:state.loginReducer})
// )(LoginPageContainer)