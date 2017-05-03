import React from 'react'
import DetailPage from './DetailPage.jsx'
import {connect} from 'react-redux'
import autoBind from 'react-autobind'
import * as ReportDetailActions from '../../api/reportDetailApi.js'
import * as StatusHistoryActions from '../../api/statusHistoryApi.js'
import * as FileListActions from '../../api/fileListApi.js'
import {notification} from 'onsenui'
import moment from 'moment'

let id_tmp = '1111-012'

class DetailPageContainer extends React.Component {
	constructor(props) {
		super(props)
		autoBind(this)
		this.state = {
			isLoading:true,
			isPending:true,
			noteValue:'',
			testStatus:0,
			file:'',
			imagePreviewUrl:'',
			testStatusHistory:{}
		}
	}
	componentDidMount() {
		const {getReportDetail,getFileList,getStatusHistory,route} = this.props
		getReportDetail(route.id)
		getFileList(route.id)
		getStatusHistory(route.id)
	}
	
	componentWillReceiveProps(nextProps) {
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
	
		if(nextProps.reportDetail.method === 'GET') {
			this.setState((prevState,props) => {
				return {
					testStatus:nextProps.reportDetail.response[0].status_Id
				}
			})
		}

		if(nextProps.statusHistory.method === 'GET') {
			this.setState((prevState,props) => {
				return {
					testStatusHistory:nextProps.statusHistory
				}
			})
		}

		if(nextProps.reportDetail.method === 'PUT') {
			getReportDetail(nextProps.ownProps.route.id)
			getStatusHistory(nextProps.ownProps.route.id)
		}
	}

	onChangeText(type,e) {
		if(type == 'note') {
			this.setState({
				noteValue:e.target.value
			})
		}
	}

	render() {
		return (	
			<DetailPage {...this.props} {...this.state}
					onChangeText={this.onChangeText}
					testChangeActiveButton={this.testChangeActiveButton}
					handleImageChange={this.handleImageChange}
					handleImageSubmit={this.handleImageSubmit}
					handleSubmit={this.handleSubmit}
			/>
		)
	}

	testChangeActiveButton(status) {
		this.setState({
			testStatus:status
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
		e.preventDefault()
		const {statusHistory,reportDetail} = this.props
		const {testStatus} = this.state
		
		let tmp = Object.assign({},statusHistory)
		let str = ''
		switch(testStatus) {
			case 0:
				str='未着手'
				break;
			case 1:
				str='PR配布'
				break
			case 2:
				str='作業開始'
				break
			case 3:
				str='作業完了'
				break
		}
		let obj = {
			id:tmp.response.length,
			update_Date:moment().format('YYYY/MM/DD hh:mm:ss'),
			update_Staff:reportDetail.response.length != 0 ? reportDetail.response[0].staff_Name : "No Name",
			status_Name:str
		}

		tmp.response.push(obj)
		
		this.setState({
			testStatusHistory:tmp,
			isPending:true
		})

		setTimeout(() => this.setState({
			isPending:false
		}),2000)
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