import React from 'react'
import DetailPage from './DetailPage.react.js'
import {connect} from 'react-redux'
import autoBind from 'react-autobind'
import * as ReportDetailActions from '../../api/reportDetailApi.js'
import * as StatusHistoryActions from '../../api/statusHistoryApi.js'
import * as FileListActions from '../../api/fileListApi.js'

let id_tmp = '1111-012'

class DetailPageContainer extends React.Component {
	constructor(props) {
		super(props)
		autoBind(this)
		this.state = {
			isLoading:true,
			noteValue:''
		}
	}
	componentDidMount() {
		const {getReportDetail,getFileList,getStatusHistory} = this.props
		getReportDetail(id_tmp)
		getFileList(id_tmp)
		getStatusHistory(id_tmp)
	}
	
	componentWillReceiveProps(nextProps) {
		if(!nextProps.reportDetail.isLoading && 
			!nextProps.fileList.isLoading && !nextProps.statusHistory.isLoading) {
			this.setState({
				isLoading:false
			})
		} else {
			this.setState({
				isLoading:true
			})
		}
		if(nextProps.reportDetail.method === 'PUT') {
			getReportDetail(id_tmp)
			getStatusHistory(id_tmp)
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
						onChangeText={this.onChangeText}/>
		)
	}
}

export default connect(
	state => {
		return {
			reportDetail:state.reportDetailReducer,
			fileList:state.fileListReducer,
			statusHistory:state.statusHistoryReducer
		}
	},
	dispatch => {
		return {
			getReportDetail:(id) => dispatch(ReportDetailActions.GetReportDetail(id_tmp)),
			getFileList:(id) => dispatch(FileListActions.GetFileList(id_tmp)),
			getStatusHistory:(id) => dispatch(StatusHistoryActions.GetStatusHistory(id_tmp)),
			putReportDetail:(key,target,value) => dispatch(ReportDetailActions.PutReportDetail(key,target,value))
		}
	}
)(DetailPageContainer)