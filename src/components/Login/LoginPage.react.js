import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'

const renderToolbar = (title,navigator) => (
	<Toolbar>
		<div className='center'>{title}</div>
	</Toolbar>
)


const LoginPage = ({
			route,
			username,
			password,
			handleUserNameChange,
			handlePasswordChange,
			handleLogin,
			handleHideAlert,
			loginInform:{
				error=false,
				message='',
				isLoading=false
			},
			navigator
		}) => (
	 <Page renderToolbar={renderToolbar.bind(this,'Login Page',navigator)}>
	 	<AlertDialog isOpen={error} isCancelable={false} >
	 		<div className='alert-dialog-title'>
	 			Warning!
	 		</div>
	 		<div className='alert-dialog-content'>
	 			{message}
	 		</div>
	 		<div className='alert-dialog-footer'>
	 			<button onClick={handleHideAlert} className='alert-dialog-button'>Ok</button>
	 		</div>
	 	</AlertDialog>
       <div className='login-form'>
       		<div className='login-form-header'>
       			<b>ログイン</b>
       		</div>
       		<div className='login-form-input'>
	       		<input type='text' className='text-input--underbar' placeholder='Username' value={username} onChange={handleUserNameChange}/>
	       		<div className='separate'/>
	       		<input type='password' className='text-input--underbar' placeholder='Password' value={password} onChange={handlePasswordChange}/>
	       	</div>
       		<div className='login-form-button'>
       			<button onClick={handleLogin} className='login-button' disabled={isLoading}>
       				{
       					isLoading ? "Loading..." : "ログイン"
       				}
       			</button>
       		</div>
       </div>
	</Page>
)

export default LoginPage
