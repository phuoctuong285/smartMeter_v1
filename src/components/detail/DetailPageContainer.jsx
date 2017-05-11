import React from 'react'
import DetailPage from './DetailPage.jsx'
import {connect} from 'react-redux'
import autoBind from 'react-autobind'
import * as ReportDetailActions from '../../api/reportDetailApi.js'
import * as StatusHistoryActions from '../../api/statusHistoryApi.js'
import * as FileListActions from '../../api/fileListApi.js'
import {notification} from 'onsenui'
import moment from 'moment'
import LoginPageContainer from '../login/LoginPageContainer.react.js'

class DetailPageContainer extends React.Component {
	constructor(props) {
		super(props)
		autoBind(this)
		this.state = {
			isLoading:true,
			isPending:true,
			memo:'',
			file:'',
			imagePreviewUrl:''
		}
	}
	componentDidMount() {
		const {getReportDetail,getFileList,getStatusHistory,route} = this.props
		getReportDetail(route.id)
		// getFileList(route.id)
		 getStatusHistory(route.id)
	}
	
	componentWillReceiveProps(nextProps) {
		const {getReportDetail,getStatusHistory} = this.props

		if(nextProps.reportDetail.error || nextProps.fileList.error 
				|| nextProps.statusHistory.error) {
			notification.alert(`Refresh Token Expired Time`)
			this.props.navigator.replacePage({component:LoginPageContainer})
		} else {
			if(!nextProps.reportDetail.isLoading && 
				!nextProps.fileList.isLoading && !nextProps.statusHistory.isLoading) {
				this.setState({
					isLoading:false,
					isPending:false
				})
			} else {
				this.setState({
					isLoading:true,
					isPending:true
				})
			}
			if(nextProps.reportDetail.method === 'PUT') {
				getReportDetail(nextProps.ownProps.route.id)
				getStatusHistory(nextProps.ownProps.route.id)
			}
		}
	}

	onChangeText(type,e) {
		if(type == 'note') {
			this.setState({
				memo:e.target.value
			})
		}
	}

	render() {
		return (	
			<DetailPage {...this.props} {...this.state}
					onChangeText={this.onChangeText}
					changeActiveButton={this.changeActiveButton}
					handleImageChange={this.handleImageChange}
					handleImageSubmit={this.handleImageSubmit}
					handleSubmit={this.handleSubmit}
			/>
		)
	}

	changeActiveButton(status) {
		const {putReportDetail,route} = this.props
		putReportDetail("STATUS",[route.id],status)
		this.setState({
			isPending:true
		})
	}

	handleImageChange(e) {
		e.preventDefault()

		let reader = new FileReader()
		let file = e.target.files[0]

		reader.onloadend = () => {
			this.setState({
				file:file,
				imagePreviewUrl:reader.result
			})
		}

		reader.readAsDataURL(file)
	}

	handleImageSubmit(e) {
		notification.alert(`Upload Successfully ${this.state.file}`)
	}

	handleSubmit(e) {
		const {putReportDetail,route} = this.props
		const {memo} = this.state
		putReportDetail("MEMO",[route.id],memo)
		this.setState({
			isPending:true
		})
	}
}

export default connect(
	(state,ownProps) => {
		return {
			reportDetail:state.reportDetailReducer,
			fileList:state.fileListReducer,
			statusHistory:state.statusHistoryReducer,
			ownProps:ownProps
		}
	},
	dispatch => {
		return {
			getReportDetail:(id) => dispatch(ReportDetailActions.GetReportDetail(id)),
			getFileList:(id) => dispatch(FileListActions.GetFileList(id)),
			getStatusHistory:(id) => dispatch(StatusHistoryActions.GetStatusHistory(id)),
			putReportDetail:(key,target,value) => dispatch(ReportDetailActions.PutReportDetail(key,target,value))
		}
	}
)(DetailPageContainer)