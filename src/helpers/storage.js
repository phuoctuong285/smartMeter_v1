import moment from 'moment'
import {apiUrl} from '../app.config.js'

const tokenName = 'smart-meter-token'
const tokenExpireName = 'smart-meter-token-expire'
export default class Storage {
	static getExpireAccessToken() {
		return window.localStorage.getItem(tokenExpireName)
	}
	static setExpireAccessToken(expire) {
		window.localStorage.setItem(tokenExpireName,expire)
	}
	static getAccessToken() {
		return window.localStorage.getItem(tokenName)
	}
	static setAccessToken(token) {
		window.localStorage.setItem(tokenName,token)
	}
	static removeAll() {
		window.localStorage.removeItem(tokenName)
		window.localStorage.removeItem(tokenExpireName)
	}
	static setStaffName(name) {
		window.localStorage.setItem('staff_Name',name)
	} 
}

//Success Status
//0: Error with expired time
//1: Success with expired time
//2: Not Expired Time

export const checkValidToken = () => {
	return new Promise((resolve,reject) => {
		if(Storage.getExpireAccessToken()) { //expired time existed same as not logout yet
			let flag = moment().isBefore(moment(Storage.getExpireAccessToken(),'YYYY-MM-DD HH:mm:ss'))
			if(flag) { //not expired time
				resolve({
					success:2
				})
			} else { //expired time
				$.ajax({
					url:`${apiUrl}/api/login/refresh`,
					type:'POST',
					xhrFields:{
						withCredentials:true
					},
					crossDomain:true,
					headers:{'Authorization':`Bearer ${Storage.getAccessToken()}`},
					success:function(data) {
						Storage.setAccessToken(data.access_token)
						Storage.setExpireAccessToken(moment().add(data.expires_in,'s').format('YYYY-MM-DD HH:mm:ss'))
						resolve({
							success:1,
							data:'Set New Token Already'
						})
					},
					error:function(xhr,status,err) { //refresh token expired time also
						reject({
							success:0,
							data:err
						})
					}
				})
			}
		} else { //logout already
				reject({
					success:0,
					data:'Logout Already'
				})
		}
	})
}	
