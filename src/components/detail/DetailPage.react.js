import React from 'react'
import moment from 'moment'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Input,AlertDialog,Row,Col,ProgressCircular} from 'react-onsenui'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button} from 'react-bootstrap'
import LoginPageContainer from '../login/LoginPageContainer.react.js'


const renderToolbar = (navigator) => (
	<Toolbar>
		<div className='left'><BackButton onClick={() => navigator.popPage()}>戻る</BackButton></div>
		<div className='center'>詳細</div>
		<div className='right'><a className='padding-space' onClick={() => navigator.replacePage({component:LoginPageContainer})}>Logout</a></div>
	</Toolbar>
)

const dateFormatter = (cell,row) => {
	return moment(cell).format('YYYY/MM/DD hh:mm:ss')
}

const DetailPage = ({
	route,
	navigator,
	isLoading,
	id,
	noteValue,
	reportDetail={},
	fileList={},
	statusHistory={},
	putReportDetail,
	onChangeText
	}) => {
	console.log("Tuong",isLoading)
	if(isLoading) {
		return (
			<div className='center'>
				<ProgressCircular indeterminate/>
			</div>
		)
	} else {
		let status = reportDetail.response.length != 0 ? reportDetail.response[0].status_Id : 0
		let info = reportDetail.response.length != 0 ? reportDetail.response[0].info : ''
		return (
			<Page renderToolbar={renderToolbar.bind(this,navigator)}>
					<div className='detail-page'>
						<BootstrapTable headerStyle={{backgroundColor:'#89C4F4'}} data={reportDetail.response} striped hover>
							<TableHeaderColumn dataField='id' isKey={true}><Glyphicon glyph="glyphicon glyphicon-stop" />お客様番号 1</TableHeaderColumn>
							<TableHeaderColumn dataField='staff_Name'><Glyphicon glyph="glyphicon glyphicon-stop" />住所</TableHeaderColumn>
							<TableHeaderColumn dataField='name'><Glyphicon glyph="glyphicon glyphicon-stop" />氏名</TableHeaderColumn>
						</BootstrapTable>
						<div className='detail-page-description padding-space'>
							<div className='detail-page-description-title'>
								<Glyphicon glyph='glyphicon glyphicon-stop'/>機器情報
							</div>
							<div className='detail-page-description-textarea'>
								<textarea style={{width:'100%',height:'100px'}} placeholder='Type here' 
									value={info}/>
							</div>
						</div>
						<div className='detail-page-upload padding-space'>
						 	<Row>
						 		<Col width='50%'>
									<div>
										<Button bsStyle={status == 0 ? 'success' : 'default'} className='align-right' onClick={() => putReportDetail('STATUS',id,'0')}>未着手</Button>
										<Button bsStyle={status == 1 ? 'success' : 'default'} className='align-right' onClick={() => putReportDetail('STATUS',id,'1')}>PR配布</Button>
										<Button bsStyle={status == 2 ? 'success' : 'default'} className='align-right' onClick={() => putReportDetail('STATUS',id,'2')}>作業開始</Button>
										<Button bsStyle={status == 3 ? 'success' : 'default'} className='align-right' onClick={() => putReportDetail('STATUS',id,'3')}>作業完了</Button>
									</div>
									<div className='top-space-bottom'/>
									<div>
										<Button bsStyle='info' 	className='align-right'>写真選択</Button>
										<Button bsStyle='info'	className='align-right'>アップロード</Button>
									</div>
								</Col>
								<Col width='50%' style={{textAlign:'center'}}>
									<img alt='No Picture' width='200' height='300'/>
								</Col>
							</Row>
						</div>
						<div className='detail-page-note padding-space'>
							<textarea style={{width:'100%',height:'100px'}} placeholder='特記事項があればここに記入' onChange={onChangeText.bind(this,'note')}/>	
							<div className='detail-page-submit'>
								<Button bsStyle='info' bsSize="large" onClick={() => putReportDetail('MEMO',id,noteValue)}>更新</Button>	
							</div>
						</div>
						
						<div className='detail-page-history padding-space'>
							<BootstrapTable headerStyle={{backgroundColor:'#89C4F4'}} data={statusHistory.response} striped hover>
								<TableHeaderColumn row='0' colSpan='3'><Glyphicon glyph="glyphicon glyphicon-stop" />ステータス更新職歴</TableHeaderColumn>
								<TableHeaderColumn dataField='id' isKey={true} hidden={true}>Id</TableHeaderColumn>
								<TableHeaderColumn row='1' dataField='update_Date' dataFormat={dateFormatter}>更新日時</TableHeaderColumn>
								<TableHeaderColumn row='1' dataField='update_Staff'>更新者</TableHeaderColumn>
								<TableHeaderColumn row='1' dataField='status_Name'>ステータス</TableHeaderColumn>		
							</BootstrapTable>
							<div className='detail-page-submit'>
								<Button bsStyle='info' bsSize="large">出力</Button>
							</div>
						</div>
					</div>
			</Page>
		)
	}
}

export default DetailPage
