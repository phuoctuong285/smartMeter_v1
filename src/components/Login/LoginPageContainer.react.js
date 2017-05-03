import React from 'react'
import {Toolbar,Page,Button,BackButton,List,ListItem,ListHeader} from 'react-onsenui'
import LoginPage from './LoginPage.react.js'
import ListPageContainer from '../list/ListPageContainer.react.js'
import autoBind from 'react-autobind'
import {connect} from 'react-redux'
import * as LoginAction from '../../api/loginApi.js'
import {requestLogin} from '../../actions/loginAction.js'
import MapDirection from '../map/MapDirections.react.js'

const reports = [{address:'7 Phan Văn Hớn,Tân Thới Nhất, Quận 12, Hồ Chí Minh'},
{address:'106 Trường Chinh, Tân Hưng Thuận, Quận 12, Hồ Chí Minh, Vietnam'},
{address:'36 Tây Thạnh, Hồ Chí Minh, Việt Nam,Tây Thạnh,Tân Phú,Hồ Chí Minh , Vietnam'}]

class LoginPageContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username:'',
			password:'',
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
		const {handleLogin} = this.props

		handleLogin({
			id:username,
			password:password
		})
	}

	handleHideAlert() {
		const {handleHideAlert} = this.props
		handleHideAlert(false)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.loginInform) {
			if(nextProps.loginInform.error == false) {
				nextProps.loginOwnProps.navigator.replacePage({component:ListPageContainer})
			}
		}
	}

	render() {
		return (
			// <LoginPage {...this.props}
			// 	{...this.state}
			// 	handleUserNameChange={this.handleUserNameChange}
			// 	handlePasswordChange={this.handlePasswordChange}
			// 	handleLogin={this.handleLogin}
			// 	handleHideAlert={this.handleHideAlert}/>
			<MapDirection Addresses={reports} />
		)
	}
}
export default connect(
	(state,ownProps) => {
		return {
			loginInform:state.loginReducer,
			loginOwnProps:ownProps
		}
	},

	dispatch => {
		return {
			handleLogin: user => dispatch(LoginAction.Login(user)),
			handleHideAlert: isFlag => dispatch(requestLogin(isFlag))
		}
	}
)(LoginPageContainer)
